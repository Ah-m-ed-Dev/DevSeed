import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Devseed
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                الرئيسية
              </Link>
              <Link href="/about" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                من نحن
              </Link>
              <Link href="/services" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                خدماتنا
              </Link>
              <Link href="/contact" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                اتصل بنا
              </Link>
              <Link href="/dashboard" className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                لوحة التحكم
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
