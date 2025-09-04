
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>회사소개 | 스마트한</title>
        <meta name="description" content="스마트한의 연혁, 인증, 파트너, 오시는 길 등 기업 정보 안내" />
      </Helmet>
      <section
        className="container max-w-4xl mx-auto py-12 sm:py-20 px-2 sm:px-6 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800]/30 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight text-[#ff9800] drop-shadow"
          tabIndex={-1}
        >
          회사소개
        </h2>
        {/* 연혁 */}
        <section className="mb-10" aria-labelledby="about-history">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="about-history" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">연혁</h3>
            <ul className="list-disc pl-6 text-orange-900 space-y-1 text-base">
              <li>2025 스마트시티 통합 플랫폼 출시</li>
              <li>2023 IoT 기반 주차 시스템 전국 100개소 도입</li>
              <li>2021 AI 영상분석 솔루션 개발</li>
              <li>2018 스마트한 설립</li>
            </ul>
          </div>
        </section>
        {/* 인증 */}
        <section className="mb-10" aria-labelledby="about-cert">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="about-cert" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">인증 및 수상</h3>
            <ul className="list-disc pl-6 text-orange-900 space-y-1 text-base">
              <li>스마트시티 우수기업 인증 (2024)</li>
              <li>AI융합 혁신상 (2022)</li>
              <li>ISO 9001 품질경영 인증</li>
            </ul>
          </div>
        </section>
        {/* 파트너 */}
        <section className="mb-10" aria-labelledby="about-partner">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="about-partner" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">주요 파트너</h3>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <span className="bg-[#ffeb3b] text-[#e65100] border border-orange-200 px-5 py-2 rounded-full text-base font-semibold shadow-sm">삼성전자</span>
              <span className="bg-[#ffeb3b] text-[#e65100] border border-orange-200 px-5 py-2 rounded-full text-base font-semibold shadow-sm">LG CNS</span>
              <span className="bg-[#ffeb3b] text-[#e65100] border border-orange-200 px-5 py-2 rounded-full text-base font-semibold shadow-sm">네이버클라우드</span>
              <span className="bg-[#ffeb3b] text-[#e65100] border border-orange-200 px-5 py-2 rounded-full text-base font-semibold shadow-sm">KT</span>
            </div>
          </div>
        </section>
        {/* 오시는 길 */}
        <section aria-labelledby="about-location">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="about-location" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">오시는 길</h3>
            <p className="text-orange-900 mb-3 text-base font-semibold">경기도 수원시 영통구 광교로 156, 스마트한타워 8층</p>
            <iframe
              title="스마트한 위치"
              src="https://www.openstreetmap.org/export/embed.html?bbox=127.057%2C37.293%2C127.067%2C37.303&amp;layer=mapnik"
              className="w-full h-48 sm:h-64 border-0 rounded-xl shadow"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="회사 위치 지도"
            ></iframe>
          </div>
        </section>
      </section>
    </>
  );
}
