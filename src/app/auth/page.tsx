"use client";
import Link from "next/link";

export default function Auth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef]">
      <div className="bg-white shadow-lg rounded-[45] p-8 w-full max-w-md">
        <div className="flex flex-col gap-4">
          <Link href="/api/auth/google">
            <button className="w-full bg-[#1E66F5] flex items-center justify-center gap-2 py-3 rounded-[45] hover:bg-[#8caaee] transition duration-200">
              <img src="/images/google.svg" alt="Google" className="w-5 h-5" />
              <span>
                Log in with <span className="font-bold">Google</span>
              </span>
            </button>
          </Link>
          <Link href="/api/auth/github">
            <button className="w-full bg-[#181926] flex items-center justify-center gap-2 py-3 rounded-[45] hover:bg-[#51576d] transition duration-200">
              <img src="/images/github.svg" alt="GitHub" className="w-5 h-5" />
              <span>
                Log in with <span className="font-bold">GitHub</span>
              </span>
            </button>
          </Link>
          <Link href="/">
            <button className="w-full mt-4 py-2 text-[#6C6F85]">
              Stay signed out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}