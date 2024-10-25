"use client"; // Ensure this is a client component

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NameInputProps {
  showInstructions?: boolean; // Optional prop to control visibility
}

const NameInput: React.FC<NameInputProps> = ({ showInstructions = true }) => {
  const [name, setName] = useState("");

  return (
    <div className="w-full max-w-sm ">
      <input
        type="text"
        className="w-full max-w-md px-4 mb-4 py-2 border-b-2 border-black focus:outline-none focus:border-black rounded-none"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link href={`/sessionstart?name=${encodeURIComponent(name)}`}>
        <Button className="w-full p-6">START SESSION</Button>
      </Link>
      {showInstructions && (
        <p className="text-center text-gray-600 mt-4">
          or{" "}
          <a href="/instructions" className="text-blue-800 underline">
            View Instructions
          </a>
        </p>
      )}
    </div>
  );
};

export default NameInput;
