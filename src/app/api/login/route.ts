import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "JWT_SECRET not configured" }, { status: 500 });
  }

  if (username === "admin" && password === "carfixpdrexpert777") {
    const token = jwt.sign({ username }, secret, { expiresIn: "24h" });

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
