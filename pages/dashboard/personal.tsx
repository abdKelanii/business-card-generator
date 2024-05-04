import React, { useState } from "react";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/animation/page-wrapper";
import Head from "next/head";
import { Button } from "@chakra-ui/react";

const Personal = () => {
  const [personalData, setPersonalData] = useState();

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
                  <Label htmlFor="name">Name</Label>
                  <Input defaultValue="John Doe" id="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input defaultValue="johndoe" id="username" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    defaultValue="john@example.com"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input defaultValue="+1 (555) 555-5555" id="phone" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input defaultValue="123 Main St, Anytown USA" id="address" />
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

export default Personal;
