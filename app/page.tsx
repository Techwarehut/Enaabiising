import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center w-full max-w-6xl">
      <section className="flex flex-col h-full items-center justif-center w-full max-w-6xl p-4 md:p-12 mt-24 md:mt-12">
        <div className="flex  flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md gap-4 border-2 border-black">
          {/* <div className="flex-col text-center mb-8"> */}
          {/* <div className="flex absolute top-28 md:top-20 -right-6 md:right-28 self-end -m-12 -p-12 h-48 md:h-80 w-48 md:w-80">
            <Image
              src="/assets/images/bulb.png"
              alt="kids learning on a laptop"
              priority
              fill
              style={{ objectFit: "cover" }}
            />
          </div> */}
          <div className="flex relative h-28 md:h-36 w-72 md:w-96">
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
            {/*  <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 underline">
                Create new
              </a>
            </p> */}
          </div>
          <div className="flex-col w-full  text-center items-center justify-center">
            <form className="flex-col space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none rounded-none focus:border-black" // Increased border width
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full max-w-md px-4 py-2 border-b-2 border-black focus:outline-none rounded-none focus:border-black" // No blue outline, border remains black
                  placeholder="Password"
                  required
                />
              </div>

              <Link href="/home">
                <Button size="lg" className="w-full max-w-md p-6 mt-6">
                  SIGNIN
                </Button>
              </Link>

              {/* <p className="text-center text-gray-600">
                Forgot your password?{" "}
                <a href="#" className="text-blue-800 underline">
                  Reset it now
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
