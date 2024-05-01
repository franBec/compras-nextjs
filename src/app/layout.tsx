"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StoreProvider from "./storeProvider";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <StoreProvider>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              <DefaultLayout>{children}</DefaultLayout>
            </div>
          </StoreProvider>
        </Provider>
      </body>
    </html>
  );
}
