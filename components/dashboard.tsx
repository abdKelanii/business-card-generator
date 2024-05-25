import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, ChangeEvent, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { get, ref as dbRef, set } from "firebase/database";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@chakra-ui/react";
import { db, storage } from "@/lib/firebase";
import { toast } from "sonner";

interface Profile {
  qrLink: string;
  photoLink: string;
  quote: string;
  about: string;
}

const Dashboard = () => {
  const [profile, setProfile] = useState<Profile>({
    qrLink: "",
    photoLink: "",
    quote: "",
    about: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const auth = getAuth();

  const fetchProfileData = async (userId: string) => {
    try {
      const snapshot = await get(dbRef(db, `users/${userId}/profile`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchProfileData(user.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
      const objectURL = URL.createObjectURL(e.target.files[0]);
      setPhotoURL(objectURL);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (!userId) {
        throw new Error("User not authenticated.");
      }

      let photoLink = profile.photoLink;

      if (photo) {
        const storagePath = `users/${userId}/${photo.name}`;
        const storageRef = ref(storage, storagePath);
        const snapshot = await uploadBytes(storageRef, photo);
        photoLink = await getDownloadURL(snapshot.ref);
      }

      const profileData = {
        ...profile,
        photoLink,
      };

      await set(dbRef(db, `users/${userId}/profile`), profileData);

      toast.success("Profile saved successfully!");
    } catch (error: any) {
      console.error("Error saving profile:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex-1 p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qr-code">QR Code</Label>
                <div className="flex justify-center">
                  <img
                    alt="QR Code"
                    height={150}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width={150}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-photo">Profile Photo</Label>
                <div className="flex items-center justify-center gap-2">
                  <Input
                    type="file"
                    id="profile-photo"
                    className="py-0"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mt-2">
                  <img
                    alt="Uploaded Profile Photo"
                    className="rounded-md"
                    height={100}
                    src={photoURL || profile?.photoLink}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote">Favourite Quote</Label>
              <Input
                defaultValue={profile.quote}
                id="quote"
                value={profile.quote}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="about">About Me</Label>
              <Textarea
                className="min-h-[100px]"
                id="about"
                placeholder="Tell us about yourself..."
                value={profile.about}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end">
              <Button className="mt-5 w-24" onClick={handleSave}>
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
