import { ROUTES } from "@/utils/constants";
import { useState } from "react";
import { Link } from "react-router";

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogout = () => {
    try {
      console.log("signing out");
      // const data = await logout();
      // console.log(data);
      // await checkAuth();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={ROUTES.LANDING} className="text-xl font-bold">
          MyApp
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to={ROUTES.ALPHA}
            className="text-sm font-medium hover:underline"
          >
            Alpha
          </Link>

          <Link
            to={ROUTES.BETA}
            className="text-sm font-medium hover:underline"
          >
            Beta
          </Link>

          <Link
            to={ROUTES.COUNTRY}
            className="text-sm font-medium hover:underline"
          >
            Country
          </Link>

          {!isAuthenticated ? (
            <Link
              to={ROUTES.LOGIN}
              className="text-sm font-medium hover:underline"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/"
              className="text-sm font-medium hover:underline"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
