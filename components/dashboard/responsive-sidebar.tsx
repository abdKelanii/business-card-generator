import React, { useState } from "react";
import Link from "next/link";
import {
  IconUserCircle,
  IconBriefcase,
  IconSocial,
  IconUserScan,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { useRouter } from "next/router";

interface Props {
  userData: { id: string; name: string; username: string };
  photo?: string;
  showSidbar: boolean;
  setShowSidebar: React.Dispatch<any>;
}

const ResponsiveSidebar: React.FC<Props> = ({
  userData,
  photo,
  showSidbar,
  setShowSidebar,
}) => {
  const router = useRouter();

  const isPersnal = router.asPath.endsWith("/personal");
  const isBusiness = router.asPath.endsWith("/business");
  const isSocial = router.asPath.endsWith("/social-media");
  const isProfile = router.asPath.endsWith("/dashboard");

  return (
    <div>
      <div
        className={`fixed inset-0 z-30 transition-transform transform ${
          showSidbar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-auto md:z-0 md:transition-none bg-gray-100 dark:bg-gray-800 w-64 border-r border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10`}
      >
        <button
          className="flex justify-end w-full md:hidden p-2"
          onClick={() => setShowSidebar(!showSidbar)}
        >
          <IconX color="black" />
        </button>
        <nav className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage alt="User Avatar" src={photo} />
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
              className={`flex items-center gap-3 text-gray-500 hover:text-gray-900 ${
                isProfile && "text-gray-900"
              }`}
              href="/dashboard"
            >
              <IconUserScan stroke={1.5} />
              <span>Profile</span>
            </Link>
          </div>
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900 ${
              isPersnal && "text-gray-900"
            }`}
            href="/dashboard/personal"
          >
            <IconUserCircle stroke={1.5} />
            <span>Personal Info</span>
          </Link>
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900 ${
              isBusiness && "text-gray-900"
            }`}
            href="/dashboard/business"
          >
            <IconBriefcase stroke={1.5} />
            <span>Business Info</span>
          </Link>
          <Link
            className={`flex items-center gap-3 text-gray-500 hover:text-gray-900 ${
              isSocial && "text-gray-900"
            }`}
            href="/dashboard/social-media"
          >
            <IconSocial stroke={1.5} />
            <span>Social Media Links</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
