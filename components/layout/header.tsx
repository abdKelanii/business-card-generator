import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { useAuthStore } from "@/stores/authStore";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const router = useRouter();
  const isAuthPage =
    router.asPath.startsWith("/login") ||
    router.asPath.startsWith("/signup") ||
    (router.asPath.startsWith("/") && !router.asPath.startsWith("/dashboard"));
  const signout = useAuthStore((state) => state.signOut);

  const isDashboard = router.asPath.startsWith("/dashboard");

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged out successfully!");
        router.push("./login");
        signout();
      })
      .catch((error) => {
        toast.error("An error occurred!");
      });
  };

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

  return (
    <header
      className={`bg-white fixed px-4 md:px-36 drop-shadow-md border-b ${
        isDashboard ? "fixed right-0 w-[calc(100%-160px)]" : "w-full"
      }`}
    >
      <div className="flex items-center h-20">
        <Image
          src={"/logo.jpg"}
          width={50}
          height={50}
          alt="bcg-logo"
          className="mx-6"
        />
        <Link className="mr-6" href="">
          Business Card Generator
        </Link>

        {isAuthPage ? (
          <div className="ml-auto flex gap-2">
            <Link href={"./login"}>
              <Button variant="outline">Sign in</Button>
            </Link>
            <Link href={"./signup"}>
              <Button>Sign Up</Button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto flex gap-2">
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={() => router.push(`/${personalData?.username}`)}>
              View Your Public Page
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
