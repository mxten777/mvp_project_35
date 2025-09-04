import ServiceCard, { ServiceIcons } from "../components/ServiceCard";

export default function Solutions() {
  return (
    <section
      className="container max-w-5xl mx-auto py-12 sm:py-20 px-2 sm:px-8 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800] rounded-3xl shadow-2xl mt-8 mb-16 border-0"
      aria-labelledby="solutions-heading"
    >
      <h2
        id="solutions-heading"
  className="text-4xl sm:text-5xl font-extrabold mb-14 text-center tracking-tight text-[#ff9800] drop-shadow text-red-500"
        tabIndex={-1}
      >
        스마트한 주요 솔루션
      </h2>
      <div
  className="flex flex-col gap-20 sm:gap-28 mb-28"
        role="list"
        aria-label="스마트한 솔루션 카드"
      >
  <div className="bg-white-95 rounded-3xl shadow-xl ring-2 ring-orange-200 border-0 flex-1 min-w-[220px] flex flex-col items-center p-10 sm:p-12 transition-all duration-200" style={{ border: 'none !important' }}>
          <ServiceCard
            icon={ServiceIcons.parking}
            title="통합 주차 보안 시스템"
            description="ANPR, 정산, 차단기, 민원 대시보드 등 IoT 기반 주차 관제 솔루션"
          >
            <a
              href="/solutions/parking"
              className="mt-8 inline-block px-10 py-3 rounded-full bg-[#ff9800] text-white font-extrabold shadow-xl hover:bg-[#ffa726] transition-all text-lg tracking-wide no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none"
              style={{ boxShadow: '0 4px 16px 0 #ff980055' }}
            >
              상세보기
            </a>
          </ServiceCard>
        </div>
  <div className="bg-white/95 rounded-3xl shadow-xl ring-2 ring-orange-200/40 !border-0 flex-1 min-w-[220px] flex flex-col items-center p-10 sm:p-12 transition-all duration-200" style={{ border: 'none !important' }}>
          <ServiceCard
            icon={ServiceIcons.iot}
            title="IoT 모니터링 시스템"
            description="센서, 알림, 리포트 등 실시간 원격 감시와 통계 분석 제공"
          >
            <a
              href="/solutions/iot"
              className="mt-8 inline-block px-10 py-3 rounded-full bg-[#ff9800] text-white font-extrabold shadow-xl hover:bg-[#ffa726] transition-all text-lg tracking-wide no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none"
              style={{ boxShadow: '0 4px 16px 0 #ff980055' }}
            >
              상세보기
            </a>
          </ServiceCard>
        </div>
  <div className="bg-white/95 rounded-3xl shadow-xl ring-2 ring-orange-200/40 !border-0 flex-1 min-w-[220px] flex flex-col items-center p-10 sm:p-12 transition-all duration-200" style={{ border: 'none !important' }}>
          <ServiceCard
            icon={ServiceIcons.cctv}
            title="영상 통합 시스템"
            description="CCTV, VMS, 관제 등 영상 보안 및 통합 모니터링 솔루션"
          >
            <a
              href="/solutions/cctv"
              className="mt-8 inline-block px-10 py-3 rounded-full bg-[#ff9800] text-white font-extrabold shadow-xl hover:bg-[#ffa726] transition-all text-lg tracking-wide no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none"
              style={{ boxShadow: '0 4px 16px 0 #ff980055' }}
            >
              상세보기
            </a>
          </ServiceCard>
        </div>
      </div>

    </section>
  );
}
