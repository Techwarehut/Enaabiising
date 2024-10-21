import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex items-center w-full max-w-6xl justify-center p-12 mx-8">
      <div className="flex flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md  border border-black">
        <div className="flex-col text-center mb-8">
          <Image
            src="/assets/images/logo.png" // Path starts with a slash
            alt="Logo"
            width={450} // Set your desired width
            height={150} // Set your desired height
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Sign In</h1>
          {/*  <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 underline">
                Create new
              </a>
            </p> */}
        </div>
        <div className="flex-col text-center items-center justify-center">
          <form className="space-y-4">
            <input
              type="email"
              className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none focus:border-black" // Increased border width
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none focus:border-black" // No blue outline, border remains black
              placeholder="Password"
              required
            />

            <Link href="/home">
              <Button size="lg" className="w-full max-w-md p-6 mt-6">
                SIGNIN
              </Button>
            </Link>

            <p className="text-center text-gray-600">
              Forgot your password?{" "}
              <a href="#" className="text-blue-500 underline">
                Reset it now
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
