"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
const res = await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password }),
});

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "Невірний логін або пароль");
      }
    } catch {
      setError("Помилка мережі");
    }
  };

  return (
    <div className="max-w-md mx-auto my-24 p-10 bg-[#222327] rounded-3xl shadow-lg border border-[#BE7D00]">
      <h2 className="text-center text-4xl font-bold mb-10 text-[#BE7D00] tracking-wide">
        Вхід в кабінет
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-[#E5E4E4] font-semibold text-base"
          >
            Логін
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            className="w-full bg-[#2C2D31] text-[#E5E4E4] rounded-xl px-5 py-3 border border-[#44464a] focus:border-[#BE7D00] outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-[#E5E4E4] font-semibold text-base"
          >
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full bg-[#2C2D31] text-[#E5E4E4] rounded-xl px-5 py-3 border border-[#44464a] focus:border-[#BE7D00] outline-none transition"
          />
        </div>

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#BE7D00] text-[#222327] font-extrabold rounded-3xl py-3 shadow-[0_0_10px_#BE7D00] hover:bg-[#a66d00] transition"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
