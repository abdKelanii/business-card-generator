import { GetServerSideProps } from "next";
import PageWrapper from "@/components/animation/page-wrapper";
import { View } from "@/components/viewpage/viewpage";
import fetchUsers, { User } from "@/utils/fetchUser";
import Head from "next/head";

interface ViewPageProps {
  user: User | null;
}

const ViewPage = ({ user }: ViewPageProps) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{user.personal.name}</title>
      </Head>
      <View user={user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params!;
  const users = await fetchUsers();
  const user = Object.values(users).find(
    (user: User) => user.personal.username === username
  );

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default ViewPage;
