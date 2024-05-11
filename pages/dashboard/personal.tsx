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
import { validateEmail } from "@/helpers/validators";

const Personal = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
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
        setPersonalData({
          name: "",
          username: "",
          email: "",
          phone: "",
          address: "",
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
      const snapshot = await get(ref(db, `users/${userId}/personal`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setPersonalData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const validatePersonalInformation = () => {
    let errorMessage = "";
    if (!personalData.name.trim()) {
      errorMessage += "Please enter your full name.\n";
    }
    if (!personalData.username.trim()) {
      errorMessage += "Please enter a username.\n";
    } else if (/\s/.test(personalData.username.trim())) {
      errorMessage += "Username cannot contain spaces.\n";
    }
    if (!personalData.email) {
      errorMessage += "Please enter your email address.\n";
    } else if (!validateEmail(personalData.email)) {
      errorMessage += "Please enter a valid email address.\n";
    }
    if (!personalData.phone) {
      errorMessage += "Please enter your phone number.\n";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(personalData.phone)) {
      errorMessage += "Please enter a valid phone number.\n";
    }

    return errorMessage;
  };

  const handleSave = async () => {
    let errorMessage = validatePersonalInformation();
    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      if (/\s/.test(personalData.username.trim())) {
        toast.error("Username cannot contain spaces.");
      } else {
        try {
          const db = getDatabase();
          await set(ref(db, `users/${userId}/personal`), {
            ...personalData,
          });
          toast.success("Personal information saved successfully!");
          console.log("Data saved successfully!");
        } catch (error: any) {
          console.error("Error saving data:", error);
          toast.error(error.message);
        }
      }
    }
  };

  const required = <span className="text-red-500">*</span>;

  return (
    <>
      <Head>
        <title>Personal Information</title>
      </Head>
      <PageWrapper>
        <div className="w-[calc(100%-160px)] float-end mt-32">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name {required}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={personalData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username {required}</Label>
                  <Input
                    id="username"
                    name="username"
                    value={personalData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email {required}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={personalData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone {required}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={personalData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address </Label>
                <Input
                  id="address"
                  name="address"
                  value={personalData.address}
                  onChange={handleChange}
                />
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

export default Personal;
