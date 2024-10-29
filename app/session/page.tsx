import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import Link from "next/link";
import NameInput from "@/components/NameInput";
import ProtectedRoute from "@/components/ProtectedRoute";
import LogoutButton from "@/components/LogoutButton";

export default function SessionPage() {
  const isModalOpen = false;

  return (
    <ProtectedRoute>
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
            <NameInput />
          </div>
          <div className="flex items-center justify-center mt-8">
            <LogoutButton />
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
