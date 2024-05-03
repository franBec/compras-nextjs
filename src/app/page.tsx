import Home from "@/components-compras/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compras y Contrataciones",
  description: "Compras y Contrataciones - SAN LUIS LA CIUDAD",
};

export default function HomePage() {
  return <Home />;
}
