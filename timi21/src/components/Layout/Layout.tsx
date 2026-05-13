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

        <NavLink
          to="/lucide-react"
          className={({ isActive }) => (isActive ? "active-nav" : "nav")}
        >
          Lucide React
        </NavLink>

        <NavLink
          to="/canvas-confetti"
          className={({ isActive }) => (isActive ? "active-nav" : "nav")}
        >
          Canvas Confetti
        </NavLink>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
