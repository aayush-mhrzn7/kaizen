import { ReactNode } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Layout({ children }: { children: ReactNode }) {
  const status = useSelector((state: RootState) => state.auth.status);
  return (
    <div className="h-screen bg-primaryLightMode overflow-hidden overflow-y-auto ">
      {status ? (
        <div className="pt-4 ">
          <Header />
        </div>
      ) : null}

      <main className="w-full  px-6 max-sm:px-0 ">{children}</main>
    </div>
  );
}
