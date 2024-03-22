import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const Signup = () => {
  const initialUserData = {
    name: "",
    email: "",
    password: "",
    r_password: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (fieldName: string, value: any) => {
    setUserData({
      ...userData,
      [fieldName]: value,
    });
  };

  const handleSignUp = async () => {
    if (!userData.name) {
      toast.error("Please add your name");
    } else if (!userData.email) {
      toast.error("Please add your email address");
    } else if (!userData.password) {
      toast.error("Please write your password");
    } else if (userData.password !== userData.r_password) {
      toast.error("Passwords do not match");
    } else {
      try {
        const { email, password } = userData;
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("User created successfully!");
        setUserData(initialUserData);
      } catch (error: any) {
        console.error("Error signing up:", error.message);
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Create a new account</title>
      </Head>
      <div className="mx-auto max-w-sm space-y-6 h-screen mt-28">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              required
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              required
              type="password"
              onChange={(e) => handleChange("r_password", e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleSignUp}>
            Sign Up
          </Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link className="underline" href="#">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
