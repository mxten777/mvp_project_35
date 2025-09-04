import React from "react";
import { Helmet } from "react-helmet-async";

export default function CCTVSystem() {
        {/* 서비스 상세 설명 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">서비스 상세 설명</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>다수 CCTV를 통합 관리하여 보안 효율 극대화</li>
            <li>실시간 영상 모니터링 및 침입/이상 감지 기능</li>
            <li>클라우드/로컬 영상 저장, 통계 분석 리포트 제공</li>
            <li>모바일/PC에서 언제 어디서나 원격 확인 가능</li>
            <li>다양한 인증서 및 인허가로 신뢰성 확보</li>
          </ul>
        </div>
        {/* FAQ 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">자주 묻는 질문(FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 기존 CCTV와 연동이 가능한가요?</div>
              <div className="text-gray-700">A. 네, 대부분의 CCTV 시스템과 연동하여 통합 관리가 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 모바일에서도 실시간 영상 확인이 가능한가요?</div>
              <div className="text-gray-700">A. 네, 스마트폰/태블릿/PC 등 다양한 기기에서 실시간 영상 모니터링이 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 영상 저장 및 분석은 어떻게 제공되나요?</div>
              <div className="text-gray-700">A. 클라우드 또는 로컬 저장소에 영상이 저장되며, 통계 분석 리포트도 제공합니다.</div>
            </div>
          </div>
        </div>
        {/* 이미지 갤러리 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용 현장 갤러리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="https://esmarthan.com/images/cctv01.jpg" alt="CCTV 현장1" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/cctv02.jpg" alt="CCTV 현장2" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/cctv03.jpg" alt="CCTV 현장3" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
          </div>
        </div>
  return (
    <>
      <Helmet>
        <title>영상시스템 (CCTV 통합) | 스마트한</title>
        <meta name="description" content="CCTV 통합, 영상 보안, 실시간 모니터링 등 영상시스템 서비스" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-10 px-4">
        {/* 상단: 서비스명, 아이콘, 요약 */}
        <div className="flex flex-col items-center mb-10">
          <img src="/images/icon_c.png" alt="CCTV시스템 아이콘" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl font-extrabold text-[#ff9800] mb-2">영상시스템 (CCTV 통합)</h1>
          <p className="text-lg text-gray-700 text-center max-w-xl">CCTV 통합, 영상 보안, 실시간 모니터링 등 다양한 영상시스템 서비스를 제공합니다.</p>
        </div>
        {/* 주요 기능 카드 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">주요 기능</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🎥</span>
              <span className="font-semibold">CCTV 통합관리</span>
              <span className="text-sm text-gray-500 mt-1">다수 CCTV 실시간 통합 모니터링</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🔒</span>
              <span className="font-semibold">영상 보안 강화</span>
              <span className="text-sm text-gray-500 mt-1">침입/이상 감지, 영상 저장/분석</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📱</span>
              <span className="font-semibold">모바일/원격 모니터링</span>
              <span className="text-sm text-gray-500 mt-1">스마트폰/PC에서 실시간 영상 확인</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📦</span>
              <span className="font-semibold">영상 저장/분석</span>
              <span className="text-sm text-gray-500 mt-1">클라우드/로컬 저장, 통계 분석</span>
            </li>
          </ul>
        </div>
        {/* 적용사례 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용사례</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">스마트빌딩 CCTV 통합</span>
              <span className="text-sm text-gray-500 mb-1">2023년 구축 / 50대 이상 CCTV 실시간 통합관리</span>
              <span className="text-xs text-gray-400">서울 강남구 테헤란로 123</span>
            </div>
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">공장 영상보안 시스템</span>
              <span className="text-sm text-gray-500 mb-1">2024년 구축 / 침입감지, 영상 저장/분석</span>
              <span className="text-xs text-gray-400">경기 화성시 남양읍</span>
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
