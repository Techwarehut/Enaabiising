"use client";
import Link from "next/link";

import Header from "@/components/Header";
import { ArrowLeft, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useAuth();
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    // Perform any logout logic here
    logout();

    router.replace("/"); // Redirect to home page after logout
  };
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

            <div className="flex ">
              <div className="flex relative h-40 w-40 ">
                <Image
                  src="/assets/images/user.jpg"
                  alt="Logo"
                  priority
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 160px"
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>

              {/*  <span className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-black">
              <a href="javascript:void(0)" className="text-gray-600">
                <Pencil size={14} />
              </a>
            </span> */}
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl flex items-center justify-center gap-2 font-bold">
                {user?.displayName}
                {/* <a href="javascript:void(0)" className="text-gray-600">
                <Pencil size={24} />
              </a> */}
              </h1>

              <h5 className="text-center text-gray-500">{user?.username}</h5>
            </div>

            <div className="w-full max-w-sm ">
              <Link href={"/"}>
                <Button
                  onClick={handleLogout}
                  variant="secondary"
                  className="w-full p-6"
                >
                  LOG OUT
                </Button>
              </Link>

              {/* <p className="text-center text-gray-600 mt-4">
              Click here to{" "}
              <a href="/" className="text-destructive underline">
                Log out
              </a>
            </p> */}
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
