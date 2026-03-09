export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Liên Hệ 📬
            </h1>
            <p className="text-xl text-purple-200">
              Hãy kết nối với chúng tôi để thảo luận về dự án của bạn!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Tin nhắn
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Viết tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
              >
                Gửi Tin Nhắn 🚀
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-200">contact@helloworld.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">Điện thoại</h3>
              <p className="text-purple-200">+84 123 456 789</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Địa chỉ</h3>
              <p className="text-purple-200">Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-block text-purple-200 hover:text-white transition-colors"
            >
              ← Quay lại trang chủ
            </a>
          </div>
        </div>
      </div>
