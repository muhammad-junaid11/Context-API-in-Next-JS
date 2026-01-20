"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name);
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
       <input
  type="text"
  placeholder="Your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="
    w-full
    p-2
    border-2       
    border-black      
    rounded
    text-lg            
    font-semibold       
    placeholder-gray-500 
    bg-white        
    text-black
  "
/>
<button
  type="submit"
  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
>
  Login
</button>
      </form>
    </div>
  );
}
