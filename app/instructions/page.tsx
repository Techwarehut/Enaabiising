import Header from "@/components/Header";
import NameInput from "@/components/NameInput";
import ProtectedRoute from "@/components/ProtectedRoute";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const alternatingContent = [
  {
    imgSrc: "/assets/images/WordBank_Instructions.png",
    title: "Get Started!",
    text: "Start by putting our verb in the chart. Select one from the Word Bank and use this to complete A, B and C Forms.",
    bgColor: "bg-[#FFE4C7]",
  },
  {
    imgSrc: "/assets/images/MakeVerb.png",
    title: "Make your selections",
    text: "We go from left to right, right to left, or from the centre out picking out the pieces to build up our verb. App will assist in narrowing down your choices and keep you focussed.",
    bgColor: "bg-[#D4FCFC]",
  },
  {
    imgSrc: "/assets/images/VerbFormed.png",
    title: "Conjugate Verb",
    text: "Formulate the verb to help us say what we want to say. At times you may have to select a blank to help the logic in the background. Once the verb is formed, it will move to it's respective place in the table below.",
    bgColor: "bg-[#FBFDB6]",
  },
  {
    imgSrc: "/assets/images/Repeat.png",
    title: "Repeat",
    text: "Complete A, B and C verb forms, export and then do the Negatives before switching to other verb types.",
    bgColor: "bg-[#C9FDCD]",
  },
];

const Instructions = () => {
  return (
    <ProtectedRoute>
      <main className="flex-1 flex-col items-center justify-center w-full max-w-6xl">
        <Header />
        <section className="flex flex-col h-full items-center justif-center w-full max-w-6xl p-4 md:p-12 ">
          <div className="flex flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md gap-4 border-2 border-black">
            <Link href="/session">
              <div className="flex flex-row text-center gap-2 text-black">
                <ArrowLeft />
                Back to Main
              </div>
            </Link>
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center">
                Conjugagtegate Instructions
              </h1>
              <p className="text-center text-gray-700 text-sm">
                In this section, we will go step by step in using the charts to
                conjugate our verbs. We want to speak our language, we want to
                communicate, we want to be understood; and that starts with
                knowing what we want to say so we can find the pieces to say
                that.
              </p>
            </div>
            <div className="flex-1 flex-cols">
              {alternatingContent.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-wrap items-center ${
                    index % 2 === 0
                      ? "flex-col md:flex-row "
                      : "flex-col md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 items-center justify-center p-8 ${
                      index % 2 === 0 ? " md:border-r-2 " : "md:border-l-2"
                    }`}
                  >
                    <div className="flex relative h-80 md:h-96 w-80 md:w-96 ">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        priority
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>

                  {/* <Separator
                  className="h-24 w-0.5 bg-gray-400 mx-4"
                  orientation="vertical"
                /> */}

                  <div className="flex-1 p-8">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${item.bgColor} text-black font-bold rounded-full border-2 border-black p-8 mb-12`}
                    >
                      <span className="text-4xl p-12">{index + 1}</span>
                    </div>

                    <h2 className="text-2xl font-bold">{item.title}</h2>

                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <NameInput showInstructions={false} />
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default Instructions;
