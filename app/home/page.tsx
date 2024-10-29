// app/home.tsx or pages/home.tsx

import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="flex-1 flex-col items-center justify-center w-full max-w-6xl">
        <Header />
        <section className="flex flex-col h-full items-center justif-center w-full max-w-6xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center max-w-md">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center">
                Learn <span style={{ color: "#3B57E5" }}>Ojibwe</span> and
                Improve Your Skill
              </h1>
              <p className="text-center">
                Whether you're a beginner or looking to refine your skills, our
                comprehensive resources and engaging exercises will help you
                master verb conjugations.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-4 m-12 ">
            <div className="flex flex-col  mx-4">
              <Card className="flex flex-row px-4 md:px-8 py-4 md:py-8 mb-8 bg-[#E9AEFE] items-center justify-center shadow-3xl gap-2 border-2 border-black shadow-black max-w-lg">
                <div>
                  <h2 className="text-2xl font-bold">Conjugagtegate</h2>
                  <p className="text-gray-600 text-sm">
                    Your go-to app for effortlessly mastering verb conjugations
                    in Ojibwe!
                  </p>
                </div>
                <Link href="/session">
                  <Button variant="secondary">GET STARTED</Button>
                </Link>
              </Card>

              <Card className="flex-1 p-12 mb-8 bg-[#F1F2F6] shadow-3xl shadow-black border-2 border-black max-w-lg">
                <CardTitle className="text-center">MORE COMING</CardTitle>
              </Card>
            </div>

            <div className="flex justify-center w-full md:w-auto">
              <div className="flex relative h-80 md:h-96 w-80 md:w-96 m-4">
                <Image
                  src="/assets/images/h-img.png"
                  alt="kids learning on a laptop"
                  priority
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
