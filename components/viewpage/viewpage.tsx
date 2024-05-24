import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { User } from "@/utils/fetchUser";
import Personal from "./personal";
import Links from "./links";
import Business from "./business";
import PageWrapper from "../animation/page-wrapper";
import Profile from "./profile";

interface ViewProps {
  user: User;
}
export function View({ user }: ViewProps) {
  return (
    <>
      <div className="relative bg-gradient-to-r from-green-400 to-blue-500 w-full h-48 flex justify-center items-center">
        <div>
          <blockquote className="text-2xl font-medium text-center text-white">
            "The only way to do great work is to love what you do."
          </blockquote>
        </div>
        <div className="absolute bottom-0 transform translate-y-1/2">
          <Avatar className="h-28 w-28 bg-white rounded-full border-2 border-black">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div key="1" className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="text-center mt-5">
          <h3 className="text-lg font-semibold">{user?.personal?.name}</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {user?.business?.jobTitle}
          </p>
          <div className="flex justify-center mt-5">
            <div className="text-gray-700 dark:text-gray-300 px-5 md:px-0 md:w-2/3">
              <h3 className="text-lg font-semibold text-center mb-2">Bio</h3>
              <p className="">
                Frontend Software Engineer with 2+ experience. My focus is
                ReactJS, NextJS, and TypeScript. Currently, I'm part of the
                DaleelStore team, developing a cutting-edge platform to enhance
                employee benefits in KSA. Additionally, I actively contribute to
                open-source projects to improve their functionality and
                performance.
              </p>
            </div>
          </div>
        </div>
        <PageWrapper>
          <div className="gap-8 mt-12 border-2 py-10 px-5 md:px-10 rounded-lg w-full shadow-md">
            <div className="md:flex justify-around mb-10">
              <div className="mb-5 md:mb-0">
                <Personal user={user} />
              </div>
              <div>
                <Business user={user} />
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center items-center w-full">
              <Links user={user} />
            </div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
}
