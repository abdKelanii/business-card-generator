import React, { useState, useEffect } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/animation/page-wrapper";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "sonner";

const Business = () => {
  const [businessData, setBusinessData] = useState({
    company: "",
    jobTitle: "",
    website: "",
    industry: "",
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
        setBusinessData({
          company: "",
          jobTitle: "",
          website: "",
          industry: "",
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
      const snapshot = await get(ref(db, `users/${userId}/business`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setBusinessData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBusinessData({
      ...businessData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const db = getDatabase();
      await set(ref(db, `users/${userId}/business`), {
        ...businessData,
      });
      toast.success("Business information saved successfully!");
      console.log("Data saved successfully!");
    } catch (error: any) {
      console.error("Error saving data:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Business Information</title>
      </Head>
      <PageWrapper>
        <div className="w-full md:w-[calc(100%-160px)] float-end mt-32">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={businessData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={businessData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={businessData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Location</Label>
                  <Input
                    id="industry"
                    name="industry"
                    value={businessData.industry}
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

export default Business;
