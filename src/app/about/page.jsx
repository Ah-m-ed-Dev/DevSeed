import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        من نحن - Devseed
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        نحن في Devseed نؤمن بأن التكنولوجيا هي المحرك الرئيسي للنمو والابتكار. مهمتنا هي تحويل الأفكار إلى حلول رقمية قوية ومستدامة.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">رؤيتنا</h2>
          <p className="text-gray-700">
            أن نكون الشريك التقني المفضل للشركات التي تسعى للتميز الرقمي في المنطقة.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">مهمتنا</h2>
          <p className="text-gray-700">
            تقديم حلول برمجية مبتكرة وعالية الجودة تتجاوز توقعات عملائنا وتساعدهم على تحقيق أهدافهم.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">قيمنا</h2>
          <p className="text-gray-700">
            النزاهة، الابتكار، الجودة، والالتزام تجاه العميل.
          </p>
        </div>
      </div>
    </div>
  );
}
