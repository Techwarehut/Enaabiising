import Link from "next/link";

import Header from "@/components/Header";
import { ArrowLeft, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-6xl ">
      <Header />
      <section className="flex-1 flex items-center w-full max-w-6xl justify-center p-12 ">
        <div className="flex flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md gap-4 border-2 border-black">
          <Link href="/home">
            <div className="flex flex-row text-center gap-2 text-black">
              <ArrowLeft />
              Back to Main
            </div>
          </Link>

          <div className="flex relative">
            <img
              src="/assets/images/user.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-black">
              <a href="javascript:void(0)" className="text-gray-600">
                <Pencil size={14} />
              </a>
            </span>
          </div>
          <div>
            <h1 className="text-4xl flex items-center justify-center gap-2 font-bold">
              Bella Rowssie{" "}
              <a href="javascript:void(0)" className="text-gray-600">
                <Pencil size={24} />
              </a>
            </h1>

            <h5 className="text-center text-gray-500">
              bellarowssie123@gmail.com
            </h5>
          </div>

          <div className="w-full max-w-sm ">
            <Button variant="secondary" className="w-full p-6">
              CHANGE PASSWORD
            </Button>

            <p className="text-center text-gray-600 mt-4">
              Click here to
              <Link href="/">
                <Button variant="link" className="text-destructive underline">
                  Log out
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
