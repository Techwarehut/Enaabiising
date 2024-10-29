// src/components/ProtectedRoute.tsx
"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/"); // Redirect to the login page or another route
    }
  }, [user, router]);

  return <>{user ? children : null}</>; // Render children only if user is authenticated
};

export default ProtectedRoute;
