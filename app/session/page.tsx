import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SessionPage() {
  const isModalOpen = false;

  const handleModalToggle = () => {};

  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-6xl ">
      <Header />
      <section className="flex-1 flex-col items-center w-full max-w-6xl justify-center p-12 ">
        <div className="flex flex-col items-center justify-center bg-white p-12 w-full max-w-8xl rounded shadow-md gap-4 border border-black">
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
            <Button className="w-full p-6">START SESSION</Button>

            <p className="text-center text-gray-600 mt-4">
              or
              <Button variant="link" className="text-blue-500 underline">
                View Instructions
              </Button>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button variant="link" className="text-black font-bold text-center ">
            Log out
          </Button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fade show d-block" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content howto-modal">
              <div className="modal-body">
                <button type="button" className="close">
                  <span aria-hidden="true">
                    <Image
                      src="/assets/images/close-icon.png"
                      alt="Close"
                      width={24}
                      height={24}
                    />
                  </span>
                </button>
                <div className="section-title">
                  <h3>HOW TO USE</h3>
                  <h2>Conjugagtegate Instructions</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam
                  </p>
                </div>
                <HowToSteps />
                <div className="text-center">
                  <Link className="btn btn-getstarted" href="#0">
                    GET STARTED WITH SESSION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function HowToSteps() {
  return (
    <div className="timelinemain">
      {/* Add your steps here */}
      <Step
        number="1"
        title="Click Get Started!"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        imgSrc="/assets/images/left-img.png"
      />
      <Step
        number="2"
        title="Continue with Forms in the dropdown"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        imgSrc="/assets/images/right-img.png"
      />
      <Step
        number="3"
        title="Use Word Bank to drag & drop words"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        imgSrc="/assets/images/left-img.png"
      />
      <Step
        number="4"
        title="Done! Get Results & export it now"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        imgSrc="/assets/images/right-img.png"
      />
    </div>
  );
}

interface StepProps {
  number: string; // or number if you want to pass it as a number
  title: string;
  description: string;
  imgSrc: string;
}

function Step({ number, title, description, imgSrc }: StepProps) {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 img-div">
        <div className="left-img text-center">
          <Image src={imgSrc} alt="Step image" width={500} height={300} />
        </div>
      </div>
      <div className="col-md-6 text-div">
        <div className="howto-text">
          <span className="number">{number}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
