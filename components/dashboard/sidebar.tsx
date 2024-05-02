import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-full dark:bg-gray-800 p-6 md:p-8 lg:p-10 w-64 border-r border-gray-200 dark:border-gray-700 fixed">
      <nav className="space-y-4 ">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-500 dark:text-gray-400">@johndoe</p>
          </div>
        </div>
        <div className="space-y-2">
          <Link
            className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/dashboard/personal"
          >
            <span>Personal Information</span>
          </Link>
          <Link
            className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/dashboard/business"
          >
            <span>Business Information</span>
          </Link>
          <Link
            className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/dashboard/socila-media"
          >
            {/* Icon Place Holde */}
            <span>Social Media Links</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
