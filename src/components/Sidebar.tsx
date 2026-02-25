import { Link, useLocation } from "react-router-dom";
import { Container, Image, Database, ScrollText, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Container, label: "Containers" },
        { to: "/logs", icon: ScrollText, label: "Logs" },
        { to: "/images", icon: Image, label: "Images" },
        { to: "/volumes", icon: Database, label: "Volumes" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ background: "#2496ED", borderRadius: "4px", padding: "4px 8px", fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "white" }}>DOCK</div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.5px" }}>ContainerDash</strong>
        </div>
        <nav style={{ padding: "var(--space-3)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-card)" : "transparent", fontWeight: 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={16} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
