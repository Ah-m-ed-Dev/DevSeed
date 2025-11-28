import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة تحكم Devseed</h1>
      <p className="text-lg text-gray-600">
        مرحباً بك في لوحة التحكم. يمكنك من هنا إدارة محتوى موقعك التعريفي.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">إدارة المحتوى</h2>
          <p className="text-gray-500">تحديث نصوص وصور الصفحات.</p>
          <a href="/dashboard/content" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            انتقل إلى الإدارة &rarr;
          </a>
        </div>
        {/* Add more cards for other features */}
      </div>
    </div>
  );
}
