import React from 'react';

const services = [
  { title: "تطوير الويب المخصص", description: "بناء تطبيقات ويب قوية ومبتكرة باستخدام أحدث التقنيات مثل Next.js و React." },
  { title: "تطبيقات الهاتف المحمول", description: "تصميم وتطوير تطبيقات أصلية (Native) وهجينة (Hybrid) لنظامي iOS و Android." },
  { title: "استشارات تقنية", description: "تقديم استشارات متخصصة لمساعدتك في اختيار أفضل الحلول التقنية لمشروعك." },
  { title: "تصميم واجهة المستخدم/تجربة المستخدم (UI/UX)", description: "تصميم واجهات جذابة وسهلة الاستخدام تضمن أفضل تجربة للمستخدم." },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        خدماتنا
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
