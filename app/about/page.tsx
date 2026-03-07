export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About Page
        </h1>
        <p className="text-gray-600 text-center leading-relaxed">
          Đây là màn hình mới được tạo bởi AI! 🎉
          <br /><br />
          Một trang đơn giản với styling đẹp mắt.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
