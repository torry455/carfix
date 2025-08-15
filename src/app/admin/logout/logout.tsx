"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div>
      <header style={{ background: "#333", color: "#fff", padding: "1rem", display: "flex", justifyContent: "space-between" }}>
        <h2>Адмін Панель</h2>
        <button onClick={logout}>Вийти</button>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
