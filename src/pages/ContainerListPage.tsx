import { Square, RefreshCw, Trash2, Search, Play, ChevronDown } from "lucide-react";
const containers = [
    { id: "a1b2", name: "nginx-proxy", image: "nginx:1.25", status: "running", uptime: "2d 14h", cpu: "0.2%", mem: "18 MB", ports: "0.0.0.0:80->80/tcp" },
    { id: "c3d4", name: "api-service", image: "node:20-slim", status: "running", uptime: "14h", cpu: "1.4%", mem: "142 MB", ports: "0.0.0.0:3000->3000/tcp" },
    { id: "e5f6", name: "postgres-db", image: "postgres:16", status: "running", uptime: "6d", cpu: "0.7%", mem: "64 MB", ports: "5432/tcp" },
    { id: "g7h8", name: "redis-cache", image: "redis:7", status: "running", uptime: "6d", cpu: "0.1%", mem: "8 MB", ports: "6379/tcp" },
    { id: "i9j0", name: "worker-jobs", image: "python:3.12", status: "exited", uptime: "2h ago", cpu: "0%", mem: "0 MB", ports: "-" }
];
export default function ContainerListPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>Containers <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--color-text-secondary)", marginLeft: 8 }}>{containers.length} total</span></h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-sm"><RefreshCw size={14} /> Refresh</button>
                <button className="btn btn-primary btn-sm"><Play size={14} /> Run</button>
            </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)", background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", padding: "4px 12px" }}>
            <Search size={14} style={{ color: "var(--color-text-tertiary)" }} />
            <input type="text" placeholder="Filter containers..." style={{ border: "none", background: "transparent", outline: "none", color: "var(--color-text-primary)", fontFamily: "var(--font-mono)", fontSize: "13px", width: "300px", padding: "6px 4px" }} />
            <button className="btn btn-sm" style={{ marginLeft: "auto" }}>Status: All <ChevronDown size={12} /></button>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        {["", "Container", "Image", "Status", "CPU", "Memory", "Ports", "Actions"].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {containers.map(c => (
                        <tr key={c.id} style={{ borderBottom: "1px solid var(--color-border)" }} className="trow">
                            <td style={{ padding: "10px 16px" }}><span className={`dot ${c.status === "running" ? "dot-success" : "dot-danger"}`}></span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ fontWeight: 600 }}>{c.name}</span><br /><span className="mono" style={{ color: "var(--color-text-tertiary)", fontSize: "11px" }}>{c.id}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ color: "var(--color-text-secondary)" }}>{c.image}</span></td>
                            <td style={{ padding: "10px 16px" }}><span style={{ color: c.status === "running" ? "var(--color-success)" : "var(--color-danger)", fontWeight: 600, fontSize: "12px", textTransform: "uppercase" }}>{c.status}</span><span style={{ color: "var(--color-text-tertiary)", fontSize: "11px", marginLeft: 6 }}>{c.uptime}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono">{c.cpu}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono">{c.mem}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{c.ports}</span></td>
                            <td style={{ padding: "10px 16px" }}>
                                <div style={{ display: "flex", gap: 4 }}>
                                    <button className="btn btn-sm">Logs</button>
                                    {c.status === "running" ? <button className="btn btn-sm btn-danger"><Square size={10} /></button> : <button className="btn btn-sm"><Play size={10} /></button>}
                                    <button className="btn btn-sm" style={{ color: "var(--color-danger)" }}><Trash2 size={12} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}
