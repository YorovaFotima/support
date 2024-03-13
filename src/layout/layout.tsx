import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
