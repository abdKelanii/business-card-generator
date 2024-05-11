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
import { validateEmail } from "@/helpers/validators";

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
      const snapshot = await get(ref(db, "users/links" + userId));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setLinks(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Social Media</title>
      </Head>
      <PageWrapper>
        <div className="w-[calc(100%-160px)] float-end mt-32">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input defaultValue="linkedin.com/in/johndoe" id="linkedin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="X">X</Label>
                  <Input defaultValue="@johndoe" id="x" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input defaultValue="instagram.com/johndoe" id="instagram" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input defaultValue="facebook.com/johndoe" id="facebook" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="mt-5 w-24">Save</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </>
  );
};

export default SocialMedia;
