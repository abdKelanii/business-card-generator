import { User } from "@/utils/fetchUser";
import React from "react";
import {
  IconUserCircle,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

interface ViewProps {
  user: User;
}

const Personal = ({ user }: ViewProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Personal Details</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <IconUserCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">
            {user?.personal?.name}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <IconPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">
            {user?.personal?.phone}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <IconMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">
            {user?.personal?.email}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <IconMapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">
            {user?.personal?.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Personal;
