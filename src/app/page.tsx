import DummyAuth from "@/components-compras/dummyAuth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compras y Contrataciones",
  description: "Compras y Contrataciones - SAN LUIS LA CIUDAD",
};

export default function Home() {
  return <DummyAuth />;
}
