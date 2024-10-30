import { NextResponse } from "next/server";

interface User {
  username: string;
  password: string;
  displayName: string;
}

const users: User[] = JSON.parse(process.env.USERS || "[]");

export async function POST(req: Request) {
  const { username, password }: { username: string; password: string } =
    await req.json();

  console.log("username", username);

  // Find the user by username
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    return NextResponse.json(
      { username: user.username, displayName: user.displayName },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
