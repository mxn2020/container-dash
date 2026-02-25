import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import ContainerListPage from "../pages/ContainerListPage"; import LogsPage from "../pages/LogsPage"; import ImagesPage from "../pages/ImagesPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("ContainerDash")).toBeInTheDocument(); });
    it("ContainerListPage renders", () => { wrap(<ContainerListPage />); expect(screen.getByText("nginx-proxy")).toBeInTheDocument(); });
    it("LogsPage renders", () => { wrap(<LogsPage />); expect(screen.getAllByText("Live Logs")[0]).toBeInTheDocument(); });
    it("ImagesPage renders", () => { wrap(<ImagesPage />); expect(screen.getAllByText("Images")[0]).toBeInTheDocument(); });
});
