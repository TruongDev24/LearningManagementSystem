"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.message || "Đăng ký thất bại");
      } else {
        setMessage(data?.message || "Đăng ký thành công.");
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
        <h1 className="text-3xl font-semibold text-gray-900">Đăng ký</h1>
        <p className="text-sm text-gray-600 mt-1 mb-6">Tạo tài khoản để bắt đầu học tập cùng chúng tôi.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              placeholder="Nguyễn Văn A"
            />
          </div>
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </div>
          {message && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-2">{message}</div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 rounded-lg shadow"
          >
            {isSubmitting ? "Đang xử lý..." : "Tạo tài khoản"}
          </button>
        </form>
        <div className="my-6 h-px bg-gray-200" />
        <p className="text-sm text-gray-600 mt-4">
          Đã có tài khoản? <Link href="/login" className="text-blue-600 hover:underline">Đăng nhập</Link>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <Link href="/" className="text-gray-700 hover:underline">← Về trang chủ</Link>
        </p>
      </div>
    </div>
  );
}


