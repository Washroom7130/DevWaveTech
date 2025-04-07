"use client";
import { useState, useTransition } from "react";

export function useFormHandler(submitAction: (formData: FormData) => Promise<any>) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await submitAction(formData);
      setMessage(res.message || res.error || "Unknown response");
    });
  };

  return { message, isPending, handleSubmit };
}
