import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container max-w-lg mx-auto py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800]/30 rounded-3xl shadow-2xl mt-16 mb-20 border-0">
      <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-10 flex flex-col items-center">
        <div className="mb-6">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#ffeb3b" />
            <text x="36" y="48" textAnchor="middle" fontSize="36" fill="#ff9800" fontWeight="bold">404</text>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-3 text-[#ff9800]">페이지를 찾을 수 없습니다</h2>
        <p className="text-orange-900 mb-6 text-base">요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p>
        <Link to="/" className="bg-[#ff9800] text-white px-6 py-3 rounded-lg font-bold text-base shadow hover:bg-[#ffa726] focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors">홈으로 이동</Link>
      </div>
    </section>
  );
}

export default NotFound;
