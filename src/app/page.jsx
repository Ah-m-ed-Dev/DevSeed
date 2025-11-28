import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        مرحباً بك في Devseed
      </h1>
      <p className="text-xl text-gray-600">
        هذه هي الصفحة الرئيسية لموقعك التعريفي الجديد.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        سيتم تطوير هذا المحتوى في المرحلة الخامسة.
      </p>
    </div>
  );
}
