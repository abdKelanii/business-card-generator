import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from 'next/image'
import { User } from "@/utils/fetchUser";
import Personal from "./personal";
import Links from "./links";
import Business from "./business";
import PageWrapper from "../animation/page-wrapper";

interface ViewProps {
  user: User;
}
export function View({ user }: ViewProps) {
  return (
    <>
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 w-full h-48 flex justify-center items-center">
        <div>
          <blockquote className="text-2xl font-medium text-center text-white">
            {user?.profile?.quote}
          </blockquote>
        </div>
        <div className="absolute bottom-0 transform translate-y-1/2">
          <Avatar className="h-28 w-28 bg-white rounded-full border-2 border-black ">
            <AvatarImage
              alt="@prfilePhoto"
              className="object-cover"
              src={user?.profile?.photoLink || "/placeholder-avatar.jpg"}
            />
            <AvatarFallback></AvatarFallback>
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
              <h3 className="text-lg font-semibold text-center mb-2">
                About Me
              </h3>
              <p className="">{user?.profile?.about}</p>
            </div>
          </div>
        </div>
        <PageWrapper>
          <div className="gap-8 mt-12 border-2 py-10 px-5 md:px-10 w-auto rounded-lg shadow-sm">
            <div className="md:flex justify-around mb-10">
              <div className="mb-5 md:mb-0">
                {user?.personal && <Personal user={user} />}
              </div>
              {user?.business && (
                <div>{user.business && <Business user={user} />}</div>
              )}
            </div>

            {
              <div className="md:col-span-2 my-5 flex justify-center items-center w-full">
                <Image src={user.profile.qrLink} width={100} height={100} alt="QrCode"></Image>
              </div>
            }
            {user?.links && (
              <div className="md:col-span-2 flex justify-center items-center w-full">
                <Links user={user} />
              </div>
            )}
          </div>
        </PageWrapper>
      </div>
    </>
  );
}
