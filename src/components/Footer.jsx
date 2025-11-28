export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Devseed. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">فيسبوك</a>
            <a href="#" className="text-gray-400 hover:text-white">تويتر</a>
            <a href="#" className="text-gray-400 hover:text-white">لينكد إن</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
