import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/animation/page-wrapper";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Head from "next/head";
import { Button } from "@chakra-ui/react";

const Business = () => {
  return (
    <>
      <Head>
        <title>Business Information</title>
      </Head>
      <PageWrapper>
        <div className="w-[calc(100%-160px)] float-end mt-32">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input defaultValue="Acme Inc." id="company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input defaultValue="CEO" id="job-title" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input defaultValue="www.acme.com" id="website" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input defaultValue="Technology" id="industry" />
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

export default Business;
