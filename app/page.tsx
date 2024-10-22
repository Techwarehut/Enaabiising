import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full p-4 md:p-12">
      <div className="flex flex-col items-center justify-center bg-white p-12 w-full rounded shadow-md  border-2 border-black">
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
          <form className="flex-col space-y-4">
            <div>
              <input
                type="email"
                className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none focus:border-black" // Increased border width
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none focus:border-black" // No blue outline, border remains black
                placeholder="Password"
                required
              />
            </div>

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
