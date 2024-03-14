import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

function Layout() {
  return (
    <>
      <Header />
      <main style={{
        backgroundColor: "white",
        margin: "20px",
        // width: "100vw",
        height: `calc(100vh - 170px)`


      }}>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
