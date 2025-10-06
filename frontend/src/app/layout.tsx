import "./globals.css";
import Providers from "./providers";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Learning Management System",
  description: "LMS – Next.js frontend",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased`}>
        <Providers>
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mr-1" />
              LMS
            </Link>
            <nav className="flex items-center gap-2">
              <Link href="/" className="px-3 py-2 text-sm rounded-lg hover:bg-gray-100">Trang chủ</Link>
              <Link href="/login" className="px-3 py-2 text-sm rounded-lg hover:bg-gray-100">Đăng nhập</Link>
              <Link href="/register" className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700">Đăng ký</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t bg-white/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} LMS. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:text-gray-900" href="#">Điều khoản</a>
              <a className="hover:text-gray-900" href="#">Bảo mật</a>
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}


