"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Login() {
  const { login, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset the error state before login attempt
    try {
      await login(username, password);
      // Redirect or update UI after successful login
      router.push("/home");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
    }
  };

  return (
    <main className="flex flex-col h-full md:h-auto items-center justify-center w-full max-w-6xl">
      <section className="flex flex-col h-full items-center justify-center w-full max-w-6xl p-4  ">
        <div className="flex flex-col items-center justify-center bg-white p-4 m-8 w-full max-w-8xl rounded shadow-md border-2 border-black">
          <div className="flex flex-row relative justify-end self-end h-20 md:h-36 w-20 md:w-36 md:-m-4">
            <Image
              src="/assets/images/Bulb.png"
              alt="Logo"
              priority
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 200px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex relative h-24 md:h-32 w-72 md:w-96 ">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              priority
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 200px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex-col w-full text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Sign In</h1>
          </div>
          <div className="flex-col w-full text-center items-center justify-center">
            <form className="flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text" // Changed to text for username
                  className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none rounded-none focus:border-black"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none rounded-none focus:border-black"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full max-w-md p-6 mt-6"
              >
                SIGN IN
              </Button>

              {error && <p className="text-destructive">{error}</p>}
            </form>
          </div>
          <div className="flex flex-row relative justify-end self-start h-20 md:h-48 w-20 md:w-48 mt-8 md:-m-4">
            <Image
              src="/assets/images/Book.png"
              alt="Logo"
              priority
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 200px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
