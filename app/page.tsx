"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-black">Welcome to Profile Dashboard</h1>
      <Link
        href="/login"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </Link>
    </div>
  );
}
