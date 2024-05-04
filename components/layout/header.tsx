import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { useAuthStore } from "@/stores/authStore";
import PageWrapper from "../animation/page-wrapper";

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

  return (
    <header
      className={`bg-white fixed px-4 md:px-36 drop-shadow-md border-b ${
        isDashboard ? "fixed right-0 w-[calc(100%-160px)]" : "w-full"
      }`}
    >
      <div className="flex items-center h-20">
        {" "}
        <Link className="mr-6" href="#">
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
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
