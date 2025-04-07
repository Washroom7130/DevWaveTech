"use client";
import React from "react";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "./loadingOverlay";

type ProtectedContentProps = {
  allowedRoles: string[];
  children: React.ReactNode;
};

export default function ProtectedContent({ allowedRoles, children }: ProtectedContentProps) {
  const { authorized, loading } = useAuthorization(allowedRoles);

  if (loading) {
    return <LoadingOverlay/>;
  }
  if (!authorized) {
    // Redirect is already handled in the hook
    return null;
  }

  return <>{children}</>;
}
