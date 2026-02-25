import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContainerListPage from "./pages/ContainerListPage";
import LogsPage from "./pages/LogsPage";
import ImagesPage from "./pages/ImagesPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<ContainerListPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/volumes" element={<ContainerListPage />} />
          <Route path="/settings" element={<ContainerListPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
