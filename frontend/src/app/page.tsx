"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-violet-50 to-pink-50">
      <div className="max-w-3xl w-full">
        <div className="mx-auto rounded-3xl border bg-white/80 backdrop-blur p-10 sm:p-12 shadow-xl text-center space-y-8">
          <div className="mx-auto inline-block rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500">
            <div className="rounded-full bg-white p-4">
              <Image src="/globe.svg" alt="LMS" width={160} height={160} priority />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-indigo-800 bg-clip-text text-transparent">
            Learning Management System
          </h1>
          <p className="text-slate-700 md:text-lg max-w-2xl mx-auto">
            Bắt đầu học tập dễ dàng với giao diện hiện đại, rõ ràng và mượt mà.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs">Khoá học đa dạng</span>
            <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs">Học mọi lúc</span>
            <span className="rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 px-3 py-1 text-xs">Hỗ trợ 24/7</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button as={Link} href="/register" size="lg" radius="full" variant="shadow" className="px-8 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">Đăng ký</Button>
            <Button as={Link} href="/login" variant="bordered" size="lg" radius="full" className="px-8 border-indigo-300 text-indigo-700 hover:border-indigo-500 hover:text-indigo-800">Đăng nhập</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
