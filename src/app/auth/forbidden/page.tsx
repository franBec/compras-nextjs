import Image from "next/image";
import Link from "next/link";

const Forbidden = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full xl:block xl:w-1/2">
        <div className="text-center">
          <div className="mb-5.5 inline-block">
            <Image
              src={"/images/chicken-knife.png"}
              alt="Logo"
              width={311}
              height={300}
            />
          </div>

          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            No tienes permisos para acceder al recurso solicitado
          </h2>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
