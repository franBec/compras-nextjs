import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden w-full xl:block xl:w-1/2">
      <div className="px-26 py-17.5 text-center">
        <Image
          src={"/images/logo.png"}
          className="mb-5.5 inline-block"
          alt="Logo"
          width={519}
          height={289}
        />

        <p className="2xl:px-20">
          Hecho por{" "}
          <a href="https://pollito.dev" target="_blank">
            Pollito {"<🐤/>"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Logo;
