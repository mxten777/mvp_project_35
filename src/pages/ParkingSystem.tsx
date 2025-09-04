import React from "react";
import { Helmet } from "react-helmet-async";

export default function ParkingSystem() {
  return (
    <>
      <Helmet>
        <title>통합주차보안시스템 | 스마트한</title>
        <meta name="description" content="IoT 기반 통합주차보안시스템 - 실시간 자료처리, 통계분석, 민원 Zero" />
      </Helmet>
  <section className="max-w-3xl mx-auto py-10 px-4">
  {/* 상단: 서비스명, 아이콘, 요약 */}
        {/* 서비스 상세 설명 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">서비스 상세 설명</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>IoT 기반 실시간 자료처리로 주차장 운영 효율 극대화</li>
            <li>통합관리 시스템으로 민원 발생 최소화 및 신속 대응</li>
            <li>모바일/PC에서 언제 어디서나 원격 모니터링 가능</li>
            <li>CCTV 연동으로 보안 강화 및 사고 예방</li>
            <li>다양한 인증서 및 인허가로 신뢰성 확보</li>
          </ul>
        </div>
        {/* FAQ 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">자주 묻는 질문(FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 시스템 도입 시 설치 기간은 얼마나 걸리나요?</div>
              <div className="text-gray-700">A. 현장 상황에 따라 다르지만, 평균 2~4주 내 설치 및 운영이 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 기존 CCTV와 연동이 가능한가요?</div>
              <div className="text-gray-700">A. 네, 대부분의 CCTV 시스템과 연동하여 통합 관리가 가능합니다.</div>
            </div>
            <div className="bg-[#fffde7] rounded-lg p-4 shadow">
              <div className="font-semibold text-[#ff9800] mb-1">Q. 모바일에서도 관리가 가능한가요?</div>
              <div className="text-gray-700">A. 네, 스마트폰/태블릿/PC 등 다양한 기기에서 실시간 모니터링 및 제어가 가능합니다.</div>
            </div>
          </div>
        </div>
        {/* 이미지 갤러리 섹션 */}
        <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용 현장 갤러리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="https://esmarthan.com/images/park01.jpg" alt="주차장 현장1" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/park02.jpg" alt="주차장 현장2" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
            <img src="https://esmarthan.com/images/park03.jpg" alt="주차장 현장3" className="rounded-lg shadow object-cover w-full h-32 sm:h-40" />
          </div>
        </div>
  <div className="flex flex-col items-center mb-10">
          <img src="/images/icon_p.png" alt="주차시스템 아이콘" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl font-extrabold text-[#ff9800] mb-2">통합주차보안시스템</h1>
          <p className="text-lg text-gray-700 text-center max-w-xl">IoT 기술을 기반으로 입/출차, 실시간 자료처리, 통계분석, 민원 Zero를 실현하는 스마트한 통합관리 시스템입니다.</p>
        </div>
        {/* 중단: 주요 기능/특징 */}
  <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">주요 기능</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🚗</span>
              <span className="font-semibold">입/출차 통합관리</span>
              <span className="text-sm text-gray-500 mt-1">차량 출입 자동 인식 및 통합 제어</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📊</span>
              <span className="font-semibold">실시간 통계/분석</span>
              <span className="text-sm text-gray-500 mt-1">주차 현황, 이용 패턴 등 데이터 시각화</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">🔒</span>
              <span className="font-semibold">보안 및 민원 Zero</span>
              <span className="text-sm text-gray-500 mt-1">민원 최소화, CCTV 연동, 안전 강화</span>
            </li>
            <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition duration-200">
              <span className="text-2xl mb-2">📱</span>
              <span className="font-semibold">모바일/원격 관리</span>
              <span className="text-sm text-gray-500 mt-1">스마트폰/PC에서 실시간 모니터링</span>
            </li>
          </ul>
        </div>
        {/* 적용사례 섹션 */}
  <div className="mb-12 pb-8 border-b border-orange-100">
          <h2 className="text-xl font-bold text-[#ff9800] mb-4">적용사례</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">광교 스마트주차장</span>
              <span className="text-sm text-gray-500 mb-1">2023년 구축 / IoT 기반 입출차, CCTV 연동</span>
              <span className="text-xs text-gray-400">경기도 수원시 영통구 대학4로 17</span>
            </div>
            <div className="bg-[#fffde7] rounded-xl shadow p-5 flex flex-col items-start hover:shadow-lg transition duration-200">
              <span className="font-semibold text-lg mb-2">스마트빌딩 주차관리</span>
              <span className="text-sm text-gray-500 mb-1">2024년 구축 / 실시간 통계, 모바일 관리</span>
              <span className="text-xs text-gray-400">서울 강남구 테헤란로 123</span>
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
