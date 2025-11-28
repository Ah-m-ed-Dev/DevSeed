import React from 'react';

export default function ContentManagementPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إدارة المحتوى</h1>
      <p className="text-lg text-gray-600 mb-8">
        هنا يمكنك تعديل النصوص والصور الرئيسية لصفحات موقع Devseed.
      </p>

      <div className="space-y-8">
        {/* Placeholder for Home Page Content Editor */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-xl font-semibold mb-4">الصفحة الرئيسية (Home)</h2>
          <p className="text-gray-500">
            (سيتم هنا إضافة حقول لتعديل العنوان الرئيسي، الوصف، وزر الدعوة للعمل).
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            حفظ التغييرات
          </button>
        </div>

        {/* Placeholder for About Page Content Editor */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-xl font-semibold mb-4">صفحة من نحن (About)</h2>
          <p className="text-gray-500">
            (سيتم هنا إضافة حقول لتعديل قصة الشركة، الرؤية، والقيم).
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            حفظ التغييرات
          </button>
        </div>
      </div>
      
      <p className="mt-10 text-sm text-red-500">
        **ملاحظة:** هذه مجرد واجهات (Placeholders). يتطلب الأمر إعداد جدول في Supabase (مثل جدول `content`) لربط هذه الحقول بقاعدة البيانات.
      </p>
    </div>
  );
}
