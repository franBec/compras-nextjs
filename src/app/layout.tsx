"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ReactReduxStoreProvider from "../providers/reactReduxStoreProvider";
import NextAuthSessionProvider from "../providers/nextAuthSessionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextAuthSessionProvider>
          <ReactReduxStoreProvider>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              <DefaultLayout>{children}</DefaultLayout>
            </div>
          </ReactReduxStoreProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
