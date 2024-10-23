import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";

export default function SessionPage() {
  const isModalOpen = false;

  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-6xl">
      <Header />
      <section className="flex flex-col h-full items-center justif-center w-full max-w-6xl p-4 md:p-12 mt-12 md:mt-2">
        <div className="flex flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md gap-4 border-2 border-black">
          <Link href="/home">
            <div className="flex flex-row text-center gap-2 text-black">
              <ArrowLeft />
              Back to Main
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center mb-2 max-w-md">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center">
                For a better speaking skill
              </h1>
              <p className="text-center text-gray-600 text-sm">
                Immerse yourself in the rich language of Ojibwe with our
                interactive platform and master verb conjugations.
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm ">
            <input
              type="name"
              className="w-full max-w-md px-4 mb-4 py-2 border-b-2 border-black focus:outline-none focus:border-black" // Increased border width
              placeholder="Name"
              required
            />
            <Link href="/sessionstart">
              <Button className="w-full p-6">START SESSION</Button>
            </Link>
            <p className="text-center text-gray-600 mt-4">
              or{" "}
              <a href="/instructions" className="text-blue-800 underline">
                View Instructions
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link href="/">
            <Button
              variant="link"
              className="text-black text-lg font-bold text-center "
            >
              Log out
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
