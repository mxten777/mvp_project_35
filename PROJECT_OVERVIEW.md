# 스마트한 웹 프로젝트 구조 및 개선 이력 (2025.09)

## 프로젝트 개요
- **기술스택:** Vite + React + TypeScript + Tailwind CSS + shadcn/ui
- **주요 라이브러리:** react-router-dom, react-helmet-async, class-variance-authority, lucide-react 등
- **폴더 구조:**
  - `src/components/` : 공통 UI 컴포넌트 (Header, Footer, Button, ServiceCard 등)
  - `src/pages/` : 각 주요 페이지 (Home, Solutions, Cases, Blog, Support, About, Admin)
  - `src/lib/` : 유틸리티 함수

## 주요 페이지 및 기능
- **Home:** 반응형/접근성 적용, 서비스 카드, CTA 버튼
- **Solutions:** 반응형/접근성 적용, 서비스별 상세 설명
- **Cases:** 반응형/접근성 적용, 필터 UI, 사례 카드
- **Blog:** 반응형/접근성 적용, 검색/카테고리, 뉴스 카드
- **Support:** 반응형/접근성 적용, 1:1 문의 폼, 유지보수/원격지원 안내
- **About:** 반응형/접근성 적용, 연혁/인증/파트너/오시는 길(지도)
- **Admin:** 반응형/접근성 적용, 콘텐츠/배너/사용자권한 관리 샘플 UI
- **공통:** Header, Footer, SkipLink, DarkModeToggle, SEO(Helmet)

## 접근성/반응형 개선 내역
- heading 구조, aria-label, role, tabIndex, sr-only label 등 적용
- 모든 주요 UI(카드, 폼, 테이블, 버튼 등) 반응형 Tailwind 스타일 적용
- 포커스/키보드 내비게이션, 스크린리더 대응

## 추후 개선/구현 예정 사항
- 실제 데이터 연동(API, mock, etc.)
- 폼 유효성 및 전송 처리(고객지원, 관리자 등)
- 관리자 인증/권한 관리, 파일 업로드 등 고급 기능
- 모바일/접근성 추가 고도화(테스트, 실사용자 피드백 반영)
- 배포 자동화 및 SEO/성능 최적화
- 디자인 시스템/컴포넌트 문서화

---

> **이 문서는 프로젝트 구조, 주요 기능, 개선 이력, 추후 개선 방향을 한눈에 파악할 수 있도록 작성되었습니다.**
> 실제 구현/운영 시에는 각 항목별로 세부 구현 및 테스트가 필요합니다.
