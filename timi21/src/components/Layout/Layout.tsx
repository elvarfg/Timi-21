import { NavLink } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ display: "flex", gap: "24px" }}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-nav" : "nav")}
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          to="/framer-motion"
          className={({ isActive }) => (isActive ? "active-nav" : "nav")}
        >
          Framer Motion
        </NavLink>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
