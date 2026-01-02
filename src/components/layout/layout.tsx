import { Outlet } from "react-router";
import NavBar from "./navbar";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
        {/* <Toaster position="bottom-right" /> */}
      </main>
    </div>
  );
}
