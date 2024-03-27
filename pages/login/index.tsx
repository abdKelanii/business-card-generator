import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "@/stores/authStore";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signIn = useAuthStore((state) => state.signIn);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Logged in successfully!");
      router.push(`/dashboard`);
      signIn(userCredential.user.uid);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login to your account</title>
      </Head>
      <div className="mx-auto max-w-sm space-y-6 h-screen mt-28">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>

          {error && (
            <div className="mt-2 text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link className="underline" href="/signup">
              Sign up here.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
