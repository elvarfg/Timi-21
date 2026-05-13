import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FramerMotion from "./pages/FramerMotion.tsx";
import Layout from "./components/Layout/Layout.tsx";
import LucideReact from "./pages/LucideReact.tsx";
import CanvasConfetti from "./pages/CanvasConfetti.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/framer-motion" element={<FramerMotion />} />
          <Route path="/lucide-react" element={<LucideReact />} />
          <Route path="/canvas-confetti" element={<CanvasConfetti />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
