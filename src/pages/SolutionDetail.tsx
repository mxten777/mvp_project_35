import { useParams } from "react-router-dom";

const detailData: Record<string, { title: string; content: string }> = {
  parking: {
    title: "통합 주차 보안 시스템 상세",
    content: `\n- 차량번호 인식(ANPR), 무인정산, 차단기 제어\n- 민원 대시보드, 실시간 입출차 모니터링\n- 통합 관리 프로그램 및 CS센터 지원\n- 고도화된 보안 및 실시간 알림, 통계 리포트 제공\n- 다양한 주차장 환경에 맞춘 맞춤형 솔루션 구축\n`,
  },
  iot: {
    title: "IoT 모니터링 시스템 상세",
    content: `\n- 각종 센서(환경, 에너지, 설비 등) 실시간 데이터 수집\n- 알림, 통계 리포트, 웹/모바일 최적화\n- 설비/에너지 효율화 및 원격 제어\n- 대시보드 기반 실시간 모니터링\n- 다양한 IoT 기기 연동 및 확장성\n`,
  },
  cctv: {
    title: "영상 통합 시스템 상세",
    content: `\n- CCTV, VMS, IoT 영상 통합 모니터링\n- 관제센터, 보안 시스템 연동\n- 실시간 영상 분석 및 이벤트 알림\n- 다양한 영상 소스 통합 관리\n- 보안 강화 및 데이터 저장/백업\n`,
  },
};

export default function SolutionDetail() {
  const { type } = useParams<{ type: string }>();
  const detail = type ? detailData[type] : undefined;

  if (!detail) {
    return <div className="p-10 text-center text-xl">존재하지 않는 상세페이지입니다.</div>;
  }

  return (
    <section className="max-w-xl mx-auto my-16 px-2">
      <div className="bg-gradient-to-br from-[#fffde7] via-[#fffbe7] to-[#ffe0b2] rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#ff9800] mb-7 text-center drop-shadow-sm">{detail.title}</h1>
        <ul className="w-full text-gray-800 text-base sm:text-lg leading-relaxed space-y-3 mb-8">
          {detail.content.trim().split('\n').filter(Boolean).map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-[#ff9800] text-lg">•</span>
              <span>{line.replace(/^- /, "")}</span>
            </li>
          ))}
        </ul>
        <a
          href="/solutions"
          className="inline-block px-8 py-2 rounded-full bg-[#ff9800] text-white font-bold shadow-md hover:bg-[#ffa726] transition-colors text-base tracking-wide no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none"
          style={{ boxShadow: '0 2px 8px 0 #ff980055' }}
        >
          목록으로
        </a>
      </div>
    </section>
  );
}
