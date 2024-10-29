"use client";

import { useAuth } from "@/context/authContext"; // Import the Auth context
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure
import Link from "next/link";

// Define the valid variant types based on your Button component
type ButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

interface LogoutButtonProps {
  variant?: ButtonVariant; // Use the defined type for variant
  className?: string; // Optional className prop
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  variant = "link",
  className = "",
}) => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default link behavior
    logout(); // Call the logout function
    router.replace("/"); // Redirect to the home page or login page
  };

  return (
    <Link href="/" onClick={handleLogout}>
      <Button
        variant={variant}
        className={`text-black text-lg font-bold text-center ${className}`} // Combine className with defaults
      >
        Log out
      </Button>
    </Link>
  );
};

export default LogoutButton;
