import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/animation/page-wrapper";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Head from "next/head";

const SocialMedia = () => {
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
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input defaultValue="@johndoe" id="twitter" />
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
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </>
  );
};

export default SocialMedia;
