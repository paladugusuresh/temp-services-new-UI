// components/Breadcrumbs.tsx
import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "24px", fontSize: "0.875rem" }}>
      <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={item.href} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {i > 0 && <span style={{ color: "#9ca3af" }}>/</span>}
            {i === items.length - 1 ? (
              <span style={{ color: "#6b7280" }}>{item.name}</span>
            ) : (
              <Link href={item.href} style={{ color: "#2563eb", textDecoration: "none" }}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
