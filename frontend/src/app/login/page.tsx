"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.message || "Đăng nhập thất bại");
      } else {
        setMessage(data?.message || "Đăng nhập thành công.");
      }
    } catch (err) {
      setMessage("Có lỗi xảy ra.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-md mx-auto rounded-2xl border bg-white/90 backdrop-blur shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-900">Đăng nhập</h1>
        <p className="text-sm text-gray-600 mt-1 mb-6">Chào mừng bạn trở lại. Hãy đăng nhập để tiếp tục.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 pr-14"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 px-3 text-xs text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              Ghi nhớ tôi
            </label>
            <Link href="#" className="text-sm text-blue-600 hover:underline">Quên mật khẩu?</Link>
          </div>
          {message && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-2">{message}</div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 rounded-lg shadow"
          >
            {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>
        <div className="my-6 h-px bg-gray-200" />
        <p className="text-sm text-gray-600 mt-4">
          Chưa có tài khoản? <Link href="/register" className="text-blue-600 hover:underline">Đăng ký</Link>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <Link href="/" className="text-gray-700 hover:underline">← Về trang chủ</Link>
        </p>
      </div>
    </div>
  );
}


