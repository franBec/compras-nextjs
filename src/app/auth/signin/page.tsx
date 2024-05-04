import { Metadata } from "next";
import Form from "./_components/form";
import Logo from "./_components/logo";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Compras y Contrataciones - Iniciar sesión",
};

const SignIn: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <Logo />
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
