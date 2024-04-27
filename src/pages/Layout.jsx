import { Outlet, Link } from "react-router-dom";
import Path from "../components/Path";

const Layout = () => {
  return (
    <main className="flex h-screen bg-red-50 gap-5">
      <nav className="w-[15rem] ">
        <ul className="text-center">
          <Path link={"Home"} way={"/"} />
          <Path link={"Blog"} way={"/blog"} />
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
};

export default Layout;
