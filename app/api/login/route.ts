import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  console.log("username", username, process.env.USERNAME);

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const displayName = process.env.DISPLAY_NAME || "Default Name";
    return NextResponse.json({ username, displayName }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
