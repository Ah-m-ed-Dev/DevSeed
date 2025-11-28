"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
      } else {
        setLoading(false);
      }
    }
    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold">جاري التحقق من المصادقة...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">لوحة التحكم</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard" className="hover:text-gray-300">الرئيسية</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard/content" className="hover:text-gray-300">إدارة المحتوى</a>
            </li>
            <li className="mb-2">
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push('/auth/login');
                }}
                className="text-red-400 hover:text-red-300"
              >
                تسجيل الخروج
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
