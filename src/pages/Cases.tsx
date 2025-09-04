
const CASES = [
  { title: "S-oil 주유소", region: "수원", industry: "주유소", solution: "주차관제", desc: "대형 주유소의 효율적 주차관제 시스템 구축" },
  { title: "아르누보호텔", region: "강남", industry: "호텔", solution: "주차관제", desc: "호텔 고객을 위한 스마트 주차 솔루션 적용" },
  { title: "제주공항 ROT", region: "제주", industry: "공항", solution: "IoT", desc: "공항 내 IoT 기반 통합 관제 시스템" },
  { title: "성복스퀘어", region: "용인", industry: "상가", solution: "CCTV", desc: "상가 보안 강화를 위한 CCTV 설치 및 운영" },
];

const FILTERS = {
  industry: ["전체", "주유소", "호텔", "공항", "상가"],
  region: ["전체", "수원", "강남", "제주", "용인"],
  solution: ["전체", "주차관제", "IoT", "CCTV"],
};

export default function Cases() {
  // TODO: 실제 필터링 로직 구현 예정
  return (
    <section
      className="container max-w-5xl mx-auto py-10 sm:py-16 px-2 sm:px-6 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800] rounded-3xl shadow-2xl mt-8 mb-12 border-0"
      aria-labelledby="cases-heading"
    >
      <h2
        id="cases-heading"
        className="text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight text-[#ff9800] drop-shadow"
        tabIndex={-1}
      >
        구축사례
      </h2>
      <form
        className="flex flex-wrap gap-3 sm:gap-6 justify-center mb-12 mt-4 bg-white/90 rounded-2xl shadow p-5 border border-orange-100"
        aria-label="사례 필터"
        role="search"
        tabIndex={0}
      >
        {Object.entries(FILTERS).map(([key, options]) => (
          <span key={key} className="inline-block">
            <label className="sr-only" htmlFor={`filter-${key}`}>{key}</label>
            <select
              id={`filter-${key}`}
              className="border-0 rounded-lg px-4 py-2 text-sm bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow"
              aria-label={`${key} 필터`}
            >
              {options.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </span>
        ))}
      </form>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        role="list"
        aria-label="구축사례 목록"
      >
        {CASES.map((c, idx) => (
          <div
            key={c.title}
            className="group flex flex-col gap-5 p-9 rounded-3xl bg-white/95 shadow-lg border border-orange-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 min-h-[180px] focus-within:ring-2 focus-within:ring-[#ff9800] cursor-pointer"
            tabIndex={0}
            aria-label={`${c.title} 사례 카드`}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff9800]/10 text-[#ff9800] text-2xl font-bold shadow-sm">
                {c.industry === "주유소" && <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><rect x="3" y="7" width="14" height="8" rx="2" fill="#ff9800"/><rect x="7" y="3" width="6" height="4" rx="1" fill="#ffb300"/></svg>}
                {c.industry === "호텔" && <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><rect x="4" y="8" width="12" height="8" rx="2" fill="#ff9800"/><rect x="7" y="4" width="6" height="4" rx="1" fill="#ffb300"/></svg>}
                {c.industry === "공항" && <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#ff9800"/><rect x="9" y="4" width="2" height="8" fill="#ffb300"/></svg>}
                {c.industry === "상가" && <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><rect x="4" y="8" width="12" height="8" rx="2" fill="#ff9800"/><rect x="8" y="4" width="4" height="4" rx="1" fill="#ffb300"/></svg>}
              </span>
              <div className="font-extrabold text-orange-700 text-xl truncate group-hover:underline">{c.title}</div>
            </div>
            <div className="text-sm text-orange-700/90 mb-3 min-h-[36px] leading-relaxed">{c.desc}</div>
            <div className="flex flex-wrap gap-3 text-sm text-orange-700/80">
              <span className="bg-orange-100 border border-orange-300 rounded-full px-4 py-1 font-semibold shadow-sm">{c.region}</span>
              <span className="bg-orange-100 border border-orange-300 rounded-full px-4 py-1 font-semibold shadow-sm">{c.industry}</span>
              <span className="bg-orange-100 border border-orange-300 rounded-full px-4 py-1 font-semibold shadow-sm">{c.solution}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
