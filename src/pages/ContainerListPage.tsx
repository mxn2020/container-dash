import { Box, Play, Square, Trash2, CircleDot, AlertCircle } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const containers = [
    { id: "c1", name: "nginx-proxy", image: "nginx:1.25", status: "running" as const, cpu: "0.3%", mem: "42 MB", ports: "80:80, 443:443", uptime: "14 days" },
    { id: "c2", name: "api-service", image: "node:20-slim", status: "running" as const, cpu: "2.1%", mem: "256 MB", ports: "3000:3000", uptime: "14 days" },
    { id: "c3", name: "postgres-db", image: "postgres:16", status: "running" as const, cpu: "1.5%", mem: "512 MB", ports: "5432:5432", uptime: "28 days" },
    { id: "c4", name: "redis-cache", image: "redis:7", status: "running" as const, cpu: "0.1%", mem: "18 MB", ports: "6379:6379", uptime: "28 days" },
    { id: "c5", name: "worker-jobs", image: "node:20-slim", status: "stopped" as const, cpu: "—", mem: "—", ports: "—", uptime: "—" },
];

function StatusIcon({ status }: { status: string }) {
    if (status === "running") return <CircleDot size={14} style={{ color: "var(--color-success)" }} />;
    return <AlertCircle size={14} style={{ color: "var(--color-text-tertiary)" }} />;
}

export default function ContainerListPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Box size={24} style={{ color: "var(--color-accent-primary)" }} /> Containers</h1>
            <Button variant="primary" size="sm">+ Create</Button>
        </div>
        <Card padding="none">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "2px solid var(--color-border-strong)", background: "var(--color-bg-secondary)" }}>
                        {["", "Name", "Image", "Status", "CPU", "Memory", "Ports", "Actions"].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {containers.map(c => (
                        <tr key={c.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "10px 16px" }}><StatusIcon status={c.status} /></td>
                            <td style={{ padding: "10px 16px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>{c.name}</td>
                            <td style={{ padding: "10px 16px" }}><Badge variant="secondary">{c.image}</Badge></td>
                            <td style={{ padding: "10px 16px" }}><Badge variant={c.status === "running" ? "success" : "secondary"}>{c.status}</Badge></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono">{c.cpu}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono">{c.mem}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{c.ports}</span></td>
                            <td style={{ padding: "10px 16px" }}>
                                <div style={{ display: "flex", gap: 4 }}>
                                    <Button variant="outline" size="sm">Logs</Button>
                                    {c.status === "running" ? <Button variant="outline" size="sm" icon={<Square size={10} />} /> : <Button variant="outline" size="sm" icon={<Play size={10} />} />}
                                    <Button variant="ghost" size="sm" icon={<Trash2 size={12} />} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    </div>);
}
