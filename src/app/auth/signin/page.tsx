import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SigninForm from "@/components-compras/auth/signin/signinForm";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Compras y Contrataciones - Iniciar sesión",
};

const SignIn: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            <Link className="mb-5.5 inline-block" href="/">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={374}
                height={208}
              />
            </Link>

            <p className="2xl:px-20">
              Hecho por{" "}
              <a href="https://pollito.dev" target="_blank">
                Pollito {"<🐤/>"}
              </a>
            </p>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Iniciar Sesión</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Compras y Contrataciones
            </h2>
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
