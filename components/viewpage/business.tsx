import { User } from "@/utils/fetchUser";
import React from "react";
import {
  IconBuildingEstate,
  IconBriefcase,
  IconWorld,
} from "@tabler/icons-react";

interface ViewProps {
  user: User;
}

const Personal = ({ user }: ViewProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Professional Details</h3>
      <div className="space-y-2">
        {user.business.company && (
          <div className="flex items-center space-x-2">
            <IconBuildingEstate className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {user.business.company}
            </span>
          </div>
        )}
        {user.business.jobTitle && (
          <div className="flex items-center space-x-2">
            <IconBriefcase className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {user.business.jobTitle}
            </span>
          </div>
        )}
        {user.business.website && (
          <div className="flex items-center space-x-2">
            <IconWorld className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {user.business.website}
            </span>
          </div>
        )}
      </div>
      <div className="text-gray-700 dark:text-gray-300">
        {/* {user.business.bio} */}
      </div>
    </div>
  );
};

export default Personal;
