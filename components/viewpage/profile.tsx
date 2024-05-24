import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { User } from "@/utils/fetchUser";

interface ViewProps {
  user: User;
}
const Profile = ({ user }: ViewProps) => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-10">

    </div>
  );
};

export default Profile;
