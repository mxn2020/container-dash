import { Image, Trash2 } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const images = [
    { id: "sha256:a1b2", repo: "nginx", tag: "1.25", size: "142 MB", created: "3 days ago", used: 2 },
    { id: "sha256:c3d4", repo: "node", tag: "20-slim", size: "258 MB", created: "1 week ago", used: 1 },
    { id: "sha256:e5f6", repo: "postgres", tag: "16", size: "378 MB", created: "2 weeks ago", used: 1 },
    { id: "sha256:g7h8", repo: "redis", tag: "7", size: "38 MB", created: "1 month ago", used: 1 },
    { id: "sha256:i9j0", repo: "python", tag: "3.12", size: "896 MB", created: "2 months ago", used: 0 }
];

export default function ImagesPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Image size={24} style={{ color: "var(--color-accent-primary)" }} /> Images</h1>
            <Button variant="primary" size="sm">Pull Image</Button>
        </div>
        <Card padding="none">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        {["Repository", "Tag", "Image ID", "Size", "Created", "Containers", ""].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {images.map(img => (
                        <tr key={img.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "10px 16px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>{img.repo}</td>
                            <td style={{ padding: "10px 16px" }}><Badge variant="secondary">{img.tag}</Badge></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ color: "var(--color-text-secondary)", fontSize: "12px" }}>{img.id.substring(7, 19)}</span></td>
                            <td style={{ padding: "10px 16px", fontFamily: "var(--font-mono)" }}>{img.size}</td>
                            <td style={{ padding: "10px 16px", color: "var(--color-text-secondary)" }}>{img.created}</td>
                            <td style={{ padding: "10px 16px" }}><span style={{ color: img.used > 0 ? "var(--color-success)" : "var(--color-text-tertiary)", fontWeight: 600 }}>{img.used}</span></td>
                            <td style={{ padding: "10px 16px" }}><Button variant="ghost" size="sm" icon={<Trash2 size={12} />}>Remove</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    </div>);
}
