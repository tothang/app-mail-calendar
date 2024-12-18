import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 flex bg-gray-200 flex-nowrap">
      <Sidebar />
      <div className="flex flex-col flex-1 max">
        <Navbar />
        <main className="px-1 py-2 overflow-auto md:p-3 lg:p-5 xl:p-8 max-w-[100vw] flex-1">
          <div className="flex mx-auto max-w-screen-2xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
