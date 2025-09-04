
const POSTS = [
  { title: "스마트시티 트렌드 2025", summary: "최신 스마트시티 기술 동향과 전망.", date: "2025-09-01", category: "뉴스" },
  { title: "IoT 기반 주차관제 사례", summary: "실제 구축 사례와 운영 노하우.", date: "2025-08-20", category: "사례" },
  { title: "CCTV 통합 모니터링 팁", summary: "보안과 운영 효율을 높이는 방법.", date: "2025-08-10", category: "기술" },
];
const CATEGORIES = ["전체", "뉴스", "사례", "기술"];

export default function Blog() {
  // TODO: 실제 검색/필터링 로직 구현 예정
  return (
    <section
      className="container max-w-3xl mx-auto py-12 sm:py-20 px-2 sm:px-6 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800]/30 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
      aria-labelledby="blog-heading"
    >
      <h2
        id="blog-heading"
        className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight text-[#ff9800] drop-shadow"
        tabIndex={-1}
      >
        블로그 & 뉴스
      </h2>
      <form
        className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-12 mt-2 bg-white/90 rounded-2xl shadow p-5 border border-orange-100"
        aria-label="블로그 검색 및 카테고리 필터"
        role="search"
        tabIndex={0}
      >
        <label htmlFor="blog-search" className="sr-only">검색어 입력</label>
        <input
          id="blog-search"
          className="border-0 rounded-lg px-5 py-3 w-44 sm:w-64 text-base bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow"
          placeholder="검색어 입력"
          aria-label="검색어 입력"
        />
        <label htmlFor="blog-category" className="sr-only">카테고리</label>
        <select
          id="blog-category"
          className="border-0 rounded-lg px-5 py-3 text-base bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow"
          aria-label="카테고리 선택"
        >
          {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </form>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        role="list"
        aria-label="블로그/뉴스 목록"
      >
        {POSTS.map((post, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 p-7 rounded-3xl bg-white/95 shadow-lg border border-orange-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[180px] focus-within:ring-2 focus-within:ring-[#ff9800] cursor-pointer"
            tabIndex={0}
            aria-label={`${post.title} 블로그 카드`}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-[#ffeb3b] text-[#e65100] border border-orange-200`}>{post.category}</span>
              <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
            </div>
            <div className="font-extrabold text-orange-700 text-lg truncate group-hover:underline">{post.title}</div>
            <div className="text-sm text-orange-700/80 mb-1 min-h-[36px] leading-relaxed">{post.summary}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
