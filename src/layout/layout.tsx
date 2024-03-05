import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Menu } from "./menu";

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
