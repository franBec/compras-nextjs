"use client";

import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>Hola {session?.user.displayName} 👋</div>
      <button className="text-red-500" onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  );
};

export default Home;
