import React from "react";
import Link from "next/link";

import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import LogoutButton from "./LogoutButton";

interface Header2Props {
  onExport: () => void; // Function to export the table
}

const Header2: React.FC<Header2Props> = ({ onExport }) => {
  return (
    <header className="flex items-center justify-between p-4 gap-12">
      <div className="flex relative h-20 w-60">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          priority
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 200px"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Button
          onClick={onExport}
          className="font-bold text-lg"
          variant="ghost"
        >
          Export
        </Button>
        <AlertDialog>
          <AlertDialogTrigger className="font-bold text-lg">
            Log out
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Do you wanna exit?</AlertDialogTitle>
              <AlertDialogDescription>
                Remember, all your current data will be deleted and cannot be
                restored. You will have to start from the beginning next time.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                asChild
                // Directly call handleLogout
              >
                <LogoutButton variant="destructive" className="w-full" />
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  );
};

export default Header2;
