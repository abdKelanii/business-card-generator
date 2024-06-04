import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/animation/page-wrapper";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { toast } from "sonner";

const SocialMedia = () => {
  const [links, setLinks] = useState({
    linkedIn: "",
    x: "",
    instagram: "",
    facebook: "",
  });
  const [userId, setUserId] = useState<string | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchData(user.uid);
      } else {
        setUserId(null);
        setLinks({
          linkedIn: "",
          x: "",
          instagram: "",
          facebook: "",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const fetchData = async (userId: string) => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, `users/${userId}/links`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setLinks(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLinks({
      ...links,
      [name]: value,
    });
  };

  const validateSocialMediaLinks = () => {
    let errorMessage = "";

    if (
      links.linkedIn &&
      !links.linkedIn.startsWith("https://www.linkedin.com/")
    ) {
      errorMessage +=
        "LinkedIn link should start with 'https://www.linkedin.com/'.\n";
    }

    if (
      links.instagram &&
      !links.instagram.startsWith("https://www.instagram.com/")
    ) {
      errorMessage +=
        "Instagram link should start with 'https://www.instagram.com/'.\n";
    }

    if (
      links.facebook &&
      !links.facebook.startsWith("https://www.facebook.com/")
    ) {
      errorMessage +=
        "Facebook link should start with 'https://www.facebook.com/'.\n";
    }

    return errorMessage;
  };

  const handleSave = async () => {
    let errorMessage = validateSocialMediaLinks();

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      try {
        const db = getDatabase();
        await set(ref(db, `users/${userId}/links`), {
          ...links,
        });
        toast.success("Social media links saved successfully!");
        console.log("Data saved successfully!");
      } catch (error: any) {
        console.error("Error saving data:", error);
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Social Media</title>
      </Head>
      <PageWrapper>
        <div className="w-full md:w-[calc(100%-160px)] float-end mt-32">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    defaultValue="linkedin.com/in/johndoe"
                    id="linkedIn"
                    name="linkedIn"
                    value={links.linkedIn}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="X">X</Label>
                  <Input
                    defaultValue="@johndoe"
                    id="x"
                    name="x"
                    value={links.x}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    defaultValue="instagram.com/johndoe"
                    id="instagram"
                    name="instagram"
                    value={links.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    defaultValue="facebook.com/johndoe"
                    id="facebook"
                    name="facebook"
                    value={links.facebook}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSave} className="mt-5 w-24">
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </>
  );
};

export default SocialMedia;
