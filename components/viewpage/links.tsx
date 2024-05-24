import { User } from "@/utils/fetchUser";
import Link from "next/link";
import React from "react";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface ViewProps {
  user: User;
}

const Links = ({ user }: ViewProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Link
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          href={user.links.facebook}
        >
          <IconBrandFacebook className="h-6 w-6" />
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          href={user.links.instagram}
        >
          <IconBrandInstagram className="h-6 w-6" />
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          href={user.links.linkedIn}
        >
          <IconBrandLinkedin className="h-6 w-6" />
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          href={user.links.x}
        >
          <IconBrandX className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Links;
