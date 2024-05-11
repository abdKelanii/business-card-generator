import { IconUserCircle, IconBriefcase, IconSocial } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Sidebar = () => {
  const router = useRouter();

  const isPersnal = router.asPath.endsWith("/personal");
  const isBusiness = router.asPath.endsWith("/business");
  const isSocial = router.asPath.endsWith("/social-media");

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    username: "",
  });

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const db = getDatabase();
          const userRef = ref(db, "users/" + user.uid + "/personal");
          const snapshot = await get(userRef);

          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData({
              id: user.uid,
              name: data.name,
              username: data.username,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData({ id: "", name: "", username: "" });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className="bg-gray-100 h-full dark:bg-gray-800 p-6 md:p-8 lg:p-10 w-64 border-r border-gray-200 dark:border-gray-700 fixed">
      <nav className="space-y-4 ">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">
              {userData.name.split(" ")[0]}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              @{userData.username}
            </p>
          </div>
        </div>
        <div className="space-y-4 pt-5">
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900  ${
              isPersnal && "text-gray-900"
            }`}
            href="/dashboard/personal"
          >
            <IconUserCircle stroke={1.5} />
            <span>Personal Info</span>
          </Link>
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900  ${
              isBusiness && "text-gray-900"
            }`}
            href="/dashboard/business"
          >
            <IconBriefcase stroke={1.5} />
            <span>Business Infor</span>
          </Link>
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900  ${
              isSocial && "text-gray-900"
            }`}
            href="/dashboard/social-media"
          >
            <IconSocial stroke={1.5} />
            <span>Social Media Links</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
