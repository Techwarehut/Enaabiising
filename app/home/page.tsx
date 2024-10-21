// app/home.tsx or pages/home.tsx

import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="max-w-6xl">
      <Header />

      <section className="flex flex-col max-w-8xl items-center justify-centers m-8">
        <div className="flex flex-col items-center justify-center mb-2 max-w-md">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-center">
              Learn <span style={{ color: "#3B57E5" }}>Ojibwe</span> and Improve
              Your Skill
            </h1>
            <p className="text-center">
              Whether you're a beginner or looking to refine your skills, our
              comprehensive resources and engaging exercises will help you
              master verb conjugations.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4">
          <div className="flex flex-col max-w-4xl w-full">
            <Card className="flex flex-row p-8 mb-8 bg-[#E9AEFE] items-center justify-center shadow-lg gap-2 border-2 border-black shadow-black max-w-lg">
              <div>
                <h2 className="text-2xl font-bold">Conjugagtegate</h2>
                <p className="text-gray-600 text-sm">
                  Your go-to app for effortlessly mastering verb conjugations in
                  Ojibwe!
                </p>
              </div>
              <Link href="/session">
                <Button variant="secondary">GET STARTED</Button>
              </Link>
            </Card>

            <Card className="flex-1 p-12 mb-8 bg-[#F1F2F6] shadow-lg shadow-black border-2 border-black max-w-lg">
              <CardTitle className="text-center">MORE COMING</CardTitle>
            </Card>
          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src="/assets/images/h-img.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
