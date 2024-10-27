import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({
  children,
  status,
}: {
  children: ReactNode;
  status?: boolean;
}) {
  return (
    <div className="h-screen bg-primaryLightMode ">
      {status ? (
        <div className="pt-4 ">
          <Header />
        </div>
      ) : null}

      <main className="w-full  px-6 max-sm:px-0 ">{children}</main>
    </div>
  );
}
