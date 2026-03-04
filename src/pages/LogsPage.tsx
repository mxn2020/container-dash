import { ScrollText, Download, Search, ChevronDown } from "lucide-react";
import { Button, Card, Input } from "@geenius-ui/react-css";

const logs = [
    { ts: "2026-02-25T10:00:01Z", level: "INFO", src: "nginx-proxy", msg: '{"status": 200, "method": "GET", "path": "/api/health"}' },
    { ts: "2026-02-25T10:00:03Z", level: "INFO", src: "api-service", msg: "Server listening on :3000" },
    { ts: "2026-02-25T10:00:08Z", level: "WARN", src: "postgres-db", msg: "Autovacuum: table pg_catalog.pg_class has a high dead-tuple count" },
    { ts: "2026-02-25T10:00:12Z", level: "ERROR", src: "worker-jobs", msg: "Connection refused: redis:6379" },
    { ts: "2026-02-25T10:00:22Z", level: "INFO", src: "nginx-proxy", msg: '{"status": 404, "method": "GET", "path": "/api/missing"}' },
    { ts: "2026-02-25T10:00:35Z", level: "ERROR", src: "worker-jobs", msg: "Max retries exceeded. Job 7c9a failed." },
    { ts: "2026-02-25T10:00:41Z", level: "INFO", src: "api-service", msg: "User login: user_id=42 from 192.168.1.10" },
];

const levelColors: Record<string, string> = { INFO: "#3FB950", WARN: "#D29922", ERROR: "#F85149" };

export default function LogsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400, display: "flex", flexDirection: "column", height: "calc(100vh - 1px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><ScrollText size={24} style={{ color: "var(--color-accent-primary)" }} /> Live Logs</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" size="sm">Source: All <ChevronDown size={12} /></Button>
                <Button variant="outline" size="sm">Level: All <ChevronDown size={12} /></Button>
                <Button variant="outline" size="sm" icon={<Download size={14} />}>Export</Button>
            </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
            <Search size={14} style={{ color: "var(--color-text-tertiary)" }} />
            <Input type="text" placeholder="Search logs..." />
        </div>
        <Card padding="md" className="logs-stream">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: 1.7 }}>
                {logs.map((l, i) => (
                    <div key={i} style={{ display: "flex", gap: "var(--space-4)", padding: "2px 0", borderBottom: "1px solid var(--color-border)" }}>
                        <span style={{ color: "var(--color-text-tertiary)", whiteSpace: "nowrap", flexShrink: 0 }}>{l.ts.replace("T", " ").replace("Z", "")}</span>
                        <span style={{ color: levelColors[l.level], fontWeight: 700, width: 44, flexShrink: 0 }}>{l.level}</span>
                        <span style={{ color: "var(--color-accent-secondary)", whiteSpace: "nowrap", flexShrink: 0, width: 110 }}>{l.src}</span>
                        <span style={{ color: "var(--color-text-primary)" }}>{l.msg}</span>
                    </div>
                ))}
            </div>
        </Card>
    </div>);
}
