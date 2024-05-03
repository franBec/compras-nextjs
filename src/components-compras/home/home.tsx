"use client";

import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <p className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
      Hola {session?.user.displayName} 👋
    </p>
  );
};

export default Home;
