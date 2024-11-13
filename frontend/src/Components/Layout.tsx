import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-primaryLightMode overflow-hidden overflow-y-auto ">
      <main className="w-full  px-6 max-sm:px-0 ">{children}</main>
    </div>
  );
}
