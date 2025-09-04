import React from "react";
import { Helmet } from "react-helmet-async";

export default function IoTSystem() {
        {/* 서비스 상세 설명 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">서비스 상세 설명</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>실시간 원격 모니터링으로 현장 상황을 즉시 파악</li>
            <li>신재생에너지(태양광, 풍력 등) 통합 관리로 에너지 효율 극대화</li>
            <li>센서/장비 데이터 기반 통계 및 분석 리포트 제공</li>
            <li>웹/모바일 연동으로 언제 어디서나 관리 가능</li>
            <li>다양한 인증서 및 인허가로 신뢰성 확보</li>
          </ul>
        </div>
        {/* FAQ 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">자주 묻는 질문(FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. IoT 시스템은 어떤 현장에 적용할 수 있나요?</div>
              <div className="text-gray-700">A. 스마트팜, 신재생에너지 발전소, 공장, 빌딩 등 다양한 현장에 맞춤 적용이 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 모바일에서도 관리가 가능한가요?</div>
              <div className="text-gray-700">A. 네, 스마트폰/태블릿/PC 등 다양한 기기에서 실시간 모니터링 및 제어가 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 데이터 분석 리포트는 어떻게 제공되나요?</div>
              <div className="text-gray-700">A. 웹/앱에서 실시간 통계와 분석 리포트를 확인할 수 있습니다.</div>
            </div>
          </div>
        </div>
        {/* 이미지 갤러리 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용 현장 갤러리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="https://esmarthan.com/images/iot01.jpg" alt="IoT 현장1" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/iot02.jpg" alt="IoT 현장2" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/iot03.jpg" alt="IoT 현장3" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
          </div>
        </div>
  return (
    <>
      <Helmet>
        <title>IoT모니터링 시스템 | 스마트한</title>
        <meta name="description" content="실시간 자료처리, 무선 원격관측, 신재생에너지 등 IoT 기반 모니터링 시스템" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-10 px-4">
        {/* 상단: 서비스명, 아이콘, 요약 */}
        <div className="flex flex-col items-center mb-10">
          <img src="/images/icon_e.png" alt="IoT시스템 아이콘" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl font-extrabold text-[#ff9800] mb-2">IoT모니터링 시스템</h1>
          <p className="text-lg text-gray-700 text-center max-w-xl">실시간 자료처리와 무선 원격관측, 신재생에너지 모니터링 등 다양한 IoT 기반 시스템을 제공합니다.</p>
        </div>
        {/* 주요 기능 카드 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">주요 기능</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📡</span>
              <span className="font-semibold">실시간 원격 모니터링</span>
              <span className="text-sm text-gray-500 mt-1">센서/장비 상태 실시간 확인</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🔋</span>
              <span className="font-semibold">신재생에너지 관리</span>
              <span className="text-sm text-gray-500 mt-1">태양광/풍력 등 에너지 모니터링</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📈</span>
              <span className="font-semibold">통계/분석 리포트</span>
              <span className="text-sm text-gray-500 mt-1">데이터 기반 통계/분석 제공</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🌐</span>
              <span className="font-semibold">웹/모바일 연동</span>
              <span className="text-sm text-gray-500 mt-1">웹/앱에서 실시간 관리</span>
            </li>
          </ul>
        </div>
        {/* 적용사례 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용사례</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">신재생에너지 모니터링</span>
              <span className="text-sm text-gray-500 mb-1">2023년 구축 / 태양광 발전소 실시간 관측</span>
              <span className="text-xs text-gray-400">충남 아산시 신창면</span>
            </div>
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">스마트팜 IoT 관리</span>
              <span className="text-sm text-gray-500 mb-1">2024년 구축 / 온습도 센서, 원격 제어</span>
              <span className="text-xs text-gray-400">전북 익산시 함열읍</span>
            </div>
          </div>
        </div>
        {/* 인증서 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">인허가 및 인증서</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <img src="https://esmarthan.com/images/li01.png" alt="사업자등록증" className="w-32 h-24 object-contain rounded shadow hover:scale-105 transition duration-200" />
            <img src="https://esmarthan.com/images/li02.png" alt="벤처기업확인서" className="w-32 h-24 object-contain rounded shadow hover:scale-105 transition duration-200" />
            <img src="https://esmarthan.com/images/li03.png" alt="기업부설연구소 인정서" className="w-32 h-24 object-contain rounded shadow hover:scale-105 transition duration-200" />
            <img src="https://esmarthan.com/images/li04.png" alt="정보통신공사업등록증" className="w-32 h-24 object-contain rounded shadow hover:scale-105 transition duration-200" />
          </div>
        </div>
        {/* 연락처/오시는길 섹션 */}
        <div className="bg-white rounded-xl shadow p-6 text-center mt-8 mb-8">
          <h2 className="text-lg font-bold text-[#ff9800] mb-2">문의 및 오시는길</h2>
          <div className="text-sm text-gray-700 mb-1">경기도 수원시 영통구 대학4로 17(에이스 광교타워1) 419호</div>
          <div className="text-sm text-gray-700 mb-1">대표전화: <a href="tel:031-216-9492" className="text-[#ff9800] font-semibold">031-216-9492</a></div>
          <div className="text-sm text-gray-700 mb-1">이메일: <a href="mailto:esmarthan@esmarthan.com" className="text-[#ff9800] font-semibold">esmarthan@esmarthan.com</a></div>
          <div className="mt-2">
            <a href="http://map.daum.net/?map_type=TYPE_MAP&urlX=510360&urlY=1055845&urlLevel=3" target="_blank" rel="noopener" className="underline text-[#ff9800]">오시는길 지도보기</a>
          </div>
        </div>
      </section>
    </>
  );
}
