import Header from "@/components/Header";
import { Separator } from "@radix-ui/react-separator";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const alternatingContent = [
  {
    imgSrc: "/assets/images/h-img.png",
    title: "Click Get Started!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    bgColor: "bg-[#FFE4C7]",
  },
  {
    imgSrc: "/assets/images/h-img.png",
    title: "Continue with Forms",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    bgColor: "bg-[#D4FCFC]",
  },
  {
    imgSrc: "/assets/images/h-img.png",
    title: "Use Word Bank",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    bgColor: "bg-[#FBFDB6]",
  },
  {
    imgSrc: "/assets/images/h-img.png",
    title: "Get Results & Export",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    bgColor: "bg-[#C9FDCD]",
  },
];

const Instructions = () => {
  return (
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
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
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                </div>

                {/* <Separator
                  className="h-24 w-0.5 bg-gray-400 mx-4"
                  orientation="vertical"
                /> */}

                <div className="flex-1 p-8">
                  <div
                    className={`flex items-center justify-center w-12 h-12 ${item.bgColor} text-black font-bold rounded-full border-2 border-black mb-12`}
                  >
                    {index + 1}
                  </div>

                  <h2 className="text-2xl font-bold">{item.title}</h2>

                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Instructions;
