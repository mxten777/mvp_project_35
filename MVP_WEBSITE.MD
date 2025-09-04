# 반응형 웹사이트 개발 가이드

## 프로젝트 개요

이 가이드는 React와 Tailwind CSS를 사용한 모던 웹사이트 개발 과정을 설명합니다. 프로젝트는 반응형 디자인, 깔끔한 UI/UX, 그리고 효율적인 코드 구조를 중점으로 합니다.

## 기술 스택

- **프론트엔드 프레임워크**: React + TypeScript
- **빌드 도구**: Vite
- **CSS 프레임워크**: Tailwind CSS
- **아이콘**: Lucide React
- **라우팅**: React Router DOM
- **패키지 매니저**: pnpm

## 환경 설정

### 1. 기본 환경 설정

```bash
# Node.js와 pnpm이 설치되어 있어야 합니다

# 새 프로젝트 생성
pnpm create vite my-website --template react-ts

# 프로젝트 폴더로 이동
cd my-website

# 필요한 패키지 설치
pnpm install react-router-dom lucide-react class-variance-authority react-helmet-async
pnpm install -D tailwindcss postcss autoprefixer
```

### 2. Tailwind CSS 설정

```bash
# Tailwind CSS 초기화
npx tailwindcss init -p
```

`tailwind.config.js` 파일을 다음과 같이 수정합니다:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-95': 'rgba(255, 255, 255, 0.95)',
      },
      colors: {
        orange: {
          200: 'rgba(255, 183, 77, 0.4)',
        }
      }
    },
  },
  plugins: [],
};
```

`postcss.config.cjs` 파일을 생성합니다:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. 프로젝트 구조 설정

```bash
# 필요한 폴더 구조 생성
mkdir -p src/components src/pages src/lib src/assets
```

## 주요 파일 구성

### 1. `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* 강화된 테두리 제거 */
  div, a, button, input, section, article, nav, aside, main, header, footer {
    border: none !important;
    outline: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    box-shadow: none !important;
  }

  /* 특별히 카드 컴포넌트에 적용되는 추가 스타일 */
  .rounded-3xl, [class*="rounded"] {
    border: 0 !important;
    outline: 0 !important;
  }

  /* 포커스 상태에서 강제 테두리 방지 */
  *:focus {
    outline: none !important;
    border-color: transparent !important;
  }
}

/* 백그라운드 클래스 추가 */
.bg-white-95 {
  background-color: rgba(255, 255, 255, 0.95) !important;
}
```

### 2. `src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './border-fix.css'
import './backup-styles.css'
import './responsive-fix.css'
import './responsive-nav.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 3. `src/App.tsx`

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              {/* 추가 라우트는 여기에 */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
```

### 4. `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 주요 컴포넌트 구현

### 1. Header 컴포넌트 (`src/components/Header.tsx`)

```tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { 
    to: "/solutions", 
    label: "솔루션", 
    icon: (
      <svg width="22" height="22" fill="none">
        <rect x="4" y="8" width="14" height="8" rx="2" fill="#ff9800"/>
      </svg>
    )
  },
  { 
    to: "/cases", 
    label: "사례", 
    icon: (
      <svg width="22" height="22" fill="none">
        <circle cx="11" cy="11" r="10" fill="#ff9800"/>
      </svg>
    ) 
  },
  { 
    to: "/blog", 
    label: "블로그", 
    icon: (
      <svg width="22" height="22" fill="none">
        <rect x="4" y="6" width="14" height="10" rx="2" fill="#ff9800"/>
      </svg>
    ) 
  },
  { 
    to: "/support", 
    label: "고객지원", 
    icon: (
      <svg width="22" height="22" fill="none">
        <rect x="6" y="6" width="10" height="10" rx="5" fill="#ff9800"/>
      </svg>
    ) 
  },
  { 
    to: "/about", 
    label: "소개", 
    icon: (
      <svg width="22" height="22" fill="none">
        <rect x="6" y="6" width="10" height="10" rx="2" fill="#ff9800"/>
      </svg>
    ) 
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 외부 클릭 시 닫힘
  useEffect(() => {
    if (!open) return;
    
    function handleClick(e: MouseEvent) {
      if (
        (menuRef.current && menuRef.current.contains(e.target as Node)) ||
        (buttonRef.current && buttonRef.current.contains(e.target as Node))
      ) {
        return; // 메뉴 또는 버튼 클릭 시 무시
      }
      setOpen(false);
    }
    
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // 모바일 메뉴 열려있을 때 스크롤 방지
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="bg-gradient-to-r from-[#ffeb3b] via-[#fffde7] to-[#ff9800] shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between relative">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 font-extrabold text-2xl sm:text-3xl text-[#ff9800] tracking-tight z-30">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#ff9800" />
              <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">S</text>
            </svg>
            <span className="whitespace-nowrap">브랜드명</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-1 md:gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="px-3 py-2 rounded-lg text-[#ff9800] hover:bg-[#ffe0b2] hover:text-[#e65100] transition-colors duration-150 text-sm md:text-base font-bold flex items-center gap-1"
                  >
                    {item.icon && <span className="hidden md:inline-block">{item.icon}</span>}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 햄버거 버튼 (모바일) */}
          <button
            ref={buttonRef}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800] bg-white/90 border border-orange-100 shadow-sm transition-colors duration-200 z-30"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" fill="none" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 네비게이션 메뉴 */}
        <div 
          ref={menuRef}
          className={`sm:hidden fixed inset-0 bg-black/20 z-20 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className={`bg-white h-auto max-h-[90vh] overflow-y-auto w-[80%] max-w-[320px] fixed top-[60px] right-0 shadow-xl rounded-bl-2xl transition-transform duration-300 transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
            <nav className="p-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.to} className="w-full">
                    <Link
                      to={item.to}
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-[#ff9800] hover:bg-[#ffe0b2] hover:text-[#e65100] transition-colors duration-150 text-base font-bold"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
```

### 2. 서비스 카드 컴포넌트 (`src/components/ServiceCard.tsx`)

```tsx
import { LucideParkingCircle, LucideCpu, LucideCamera } from "lucide-react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCard({ icon, title, description, className, children }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center p-4 m-0 border-0 outline-none w-full h-full rounded-lg transition-all duration-300 hover:bg-orange-50",
        className
      )} 
      style={{ border: 'none !important', outline: 'none !important', boxShadow: 'none !important' }}
    >
      <div className="mb-4 text-[#ff9800] border-0 outline-none p-3 bg-orange-50 rounded-full flex items-center justify-center w-16 h-16">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-[#222] border-0 outline-none">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base font-medium border-0 outline-none max-w-[280px] mx-auto">{description}</p>
      {children && <div className="mt-auto pt-4 border-0 outline-none">{children}</div>}
    </div>
  );
}

export const ServiceIcons = {
  parking: <LucideParkingCircle size={36} strokeWidth={1.5} className="text-orange-500" />,
  iot: <LucideCpu size={36} strokeWidth={1.5} className="text-orange-500" />,
  cctv: <LucideCamera size={36} strokeWidth={1.5} className="text-orange-500" />,
};
```

### 3. 버튼 컴포넌트 (`src/components/Button.tsx`)

```tsx
import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
```

### 4. 모달 컴포넌트 (`src/components/Modal.tsx`)

```tsx
import React, { useEffect } from 'react';
import { cn } from '../lib/utils';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ open, onClose, children, className }: ModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className={cn("bg-white rounded-lg shadow-xl p-6 max-w-md w-full max-h-[90vh] overflow-auto", className)}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          <span className="sr-only">닫기</span>
        </button>
        {children}
      </div>
    </div>
  );
}
```

## 페이지 구현

### 1. 홈 페이지 (`src/pages/Home.tsx`)

```tsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard, { ServiceIcons } from "../components/ServiceCard";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>홈 | 브랜드명</title>
        <meta name="description" content="브랜드명의 홈페이지입니다." />
      </Helmet>

      <section className="relative bg-gradient-to-b from-[#fffde7] to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff9800] mb-4">
              혁신적인 솔루션으로<br />비즈니스를 성장시키세요
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              최신 기술과 전문 지식으로 기업의 디지털 전환을 지원하고 경쟁력을 높이는 솔루션을 제공합니다.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 my-10 max-w-6xl mx-auto"
            role="list"
            aria-label="주요 서비스"
          >
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-orange-100 border-0 outline-none p-4 flex flex-col items-center min-h-[280px] transition-all duration-200 hover:shadow-md hover:-translate-y-1" style={{ border: 'none !important', outline: 'none !important' }}>
              <ServiceCard
                icon={ServiceIcons.parking}
                title="통합 관리 시스템"
                description="IoT 기반 입·출차, 민원 제로, 통합 관리 지원"
              >
                <a
                  href="/solutions/service1"
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-[#ff9800] text-white font-bold shadow-sm hover:bg-[#ffa726] transition-all text-sm sm:text-base no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none border-0"
                  style={{ boxShadow: '0 2px 6px 0 #ff980044', border: 'none !important' }}
                >
                  상세보기
                </a>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-orange-100 border-0 outline-none p-4 flex flex-col items-center min-h-[280px] transition-all duration-200 hover:shadow-md hover:-translate-y-1" style={{ border: 'none !important', outline: 'none !important' }}>
              <ServiceCard
                icon={ServiceIcons.iot}
                title="IoT 모니터링 시스템"
                description="실시간 원격 감시, 통계 분석, 최적 모니터링 제공"
              >
                <a
                  href="/solutions/service2"
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-[#ff9800] text-white font-bold shadow-sm hover:bg-[#ffa726] transition-all text-sm sm:text-base no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none border-0"
                  style={{ boxShadow: '0 2px 6px 0 #ff980044', border: 'none !important' }}
                >
                  상세보기
                </a>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-orange-100 border-0 outline-none p-4 flex flex-col items-center min-h-[280px] transition-all duration-200 hover:shadow-md hover:-translate-y-1" style={{ border: 'none !important', outline: 'none !important' }}>
              <ServiceCard
                icon={ServiceIcons.cctv}
                title="보안 시스템"
                description="CCTV 및 IoT 영상 통합, 영상 보안 시스템 제공"
              >
                <a
                  href="/solutions/service3"
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-[#ff9800] text-white font-bold shadow-sm hover:bg-[#ffa726] transition-all text-sm sm:text-base no-underline focus:ring-2 focus:ring-[#ff9800] focus:outline-none border-0"
                  style={{ boxShadow: '0 2px 6px 0 #ff980044', border: 'none !important' }}
                >
                  상세보기
                </a>
              </ServiceCard>
            </div>
          </div>

          <div className="flex flex-col items-center my-8 sm:my-10">
            <Button
              className="px-6 py-2 text-base font-medium rounded-full border border-[#ff9800] bg-white text-[#ff9800] shadow-sm hover:bg-[#ff9800] hover:text-white focus-visible:ring-2 focus-visible:ring-[#ff9800] focus-visible:outline-none transition-all duration-200 flex items-center gap-2"
              aria-label="상담 문의하기"
              onClick={() => setModalOpen(true)}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fffde7"/><path d="M8 12h8M12 8v8" stroke="#ff9800" strokeWidth="2" strokeLinecap="round"/></svg>
              상담 문의하기
            </Button>
          </div>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <h2 className="text-xl font-bold mb-4 text-[#ff9800]">상담 문의하기</h2>
            <form className="flex flex-col gap-4">
              <input className="border rounded px-3 py-2" type="text" placeholder="이름" required />
              <input className="border rounded px-3 py-2" type="tel" placeholder="연락처" required />
              <textarea className="border rounded px-3 py-2" placeholder="문의 내용" rows={4} required />
              <button type="submit" className="bg-[#ff9800] text-white font-semibold rounded py-2 mt-2 hover:bg-[#ffb74d] transition">문의 보내기</button>
            </form>
          </Modal>
        </div>
      </section>
    </>
  );
}
```

## 추가 CSS 파일

### 1. `src/border-fix.css`

```css
/* Edge 브라우저에서 border 숨기기 위한 추가 CSS */
@supports (-ms-ime-align:auto) {
  div, a, button, input, section, article, nav, aside, main, header, footer {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
}

/* 모든 카드형 컴포넌트에 border 제거 */
[class*="card"], [class*="Card"], .rounded-xl, .rounded-2xl, .rounded-3xl {
  border: 0 !important;
  outline: 0 !important;
}

/* 접근성을 위한 포커스 스타일 */
.focus-visible:focus {
  outline: 2px solid rgba(255, 152, 0, 0.5) !important;
  outline-offset: 2px !important;
}
```

### 2. `src/backup-styles.css`

```css
/* Tailwind CSS가 로드되지 않을 경우를 대비한 백업 스타일 */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #ff9800;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #f57c00;
}
```

### 3. `src/responsive-fix.css`

```css
/* 모바일 우선 반응형 스타일 */

/* 모바일에서 작은 패딩과 마진 */
@media screen and (max-width: 640px) {
  .container {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
  h1, h2, h3 {
    word-break: keep-all;
  }
  
  /* 모바일에서 카드 균형 잡기 */
  .bg-white-95 {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
  }
}

/* 반응형 컨테이너 조정 */
.container {
  width: 100%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 그리드 시스템 강화 */
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
}

@media (min-width: 640px) {
  .grid.sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid.md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* 서비스 카드 균형 맞추기 */
.service-card-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 아이콘 스타일 향상 */
svg {
  display: inline-block !important;
  vertical-align: middle !important;
}
```

### 4. `src/responsive-nav.css`

```css
/* 네비게이션 스타일 강화 */
@media (max-width: 640px) {
  /* 모바일 메뉴 스타일 */
  .mobile-menu-overlay {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  .mobile-menu-container {
    animation: slideIn 0.3s ease-in-out;
  }

  /* 햄버거 버튼 클릭시 인디케이터 */
  .menu-btn-active {
    background-color: rgba(255, 248, 225, 0.95) !important;
    color: #e65100 !important;
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  /* 태블릿 뷰 스타일 */
  .desktop-nav li a {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

/* 애니메이션 정의 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

## 프로젝트 실행 및 빌드

```bash
# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과물 미리보기
pnpm preview
```

## 알려진 문제점 및 해결 방법

### 1. Tailwind CSS 버전 호환성 문제

**문제**: Tailwind CSS v4 사용 시 PostCSS 플러그인 별도 패키지 필요

**해결방법**: 
- Tailwind CSS v3 사용하기
- 또는 `@tailwindcss/postcss` 패키지 설치하기

### 2. 다중 PostCSS 설정 파일 충돌

**문제**: `postcss.config.js`와 `postcss.config.cjs` 두 파일이 공존하면 충돌 발생

**해결방법**:
- 하나의 설정 파일만 유지하기
- CJS 모듈 시스템을 사용한다면 `.cjs` 확장자 파일 사용하기

### 3. 브라우저별 테두리 스타일 문제

**문제**: 특정 브라우저(특히 Edge)에서 border 스타일이 예상과 다르게 표시됨

**해결방법**:
- `border-fix.css` 파일에 브라우저별 대응 CSS 추가
- `!important` 규칙 사용하여 강제 적용

## 성능 최적화 팁

1. **이미지 최적화**:
   - WebP 포맷 사용
   - 적절한 크기로 리사이징
   - 지연 로딩(lazy loading) 적용

2. **코드 분할**:
   - React Router의 지연 로딩 활용
   - 큰 컴포넌트는 동적 임포트 사용

3. **번들 크기 축소**:
   - 사용하지 않는 CSS 제거(PurgeCSS)
   - 트리 쉐이킹 활용

4. **캐싱 전략**:
   - 정적 자원에 캐시 헤더 추가
   - 빌드 시 해시를 파일명에 포함

## 배포 가이드

### 정적 호스팅(Netlify, Vercel, GitHub Pages)

1. 프로젝트 빌드
   ```bash
   pnpm build
   ```

2. `dist` 폴더의 내용을 호스팅 서비스에 배포

### Docker 배포

1. Dockerfile 생성
   ```dockerfile
   FROM node:18-alpine AS build
   WORKDIR /app
   RUN npm install -g pnpm
   COPY package.json pnpm-lock.yaml ./
   RUN pnpm install --frozen-lockfile
   COPY . .
   RUN pnpm build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Docker 빌드 및 실행
   ```bash
   docker build -t my-website .
   docker run -p 8080:80 my-website
   ```

## 결론

이 가이드는 React와 Tailwind CSS를 사용하여 모던하고 반응형인 웹사이트를 구축하는 방법을 안내합니다. 컴포넌트 기반 접근 방식과 모바일 우선 디자인을 채택하여 다양한 디바이스에서 일관된 사용자 경험을 제공할 수 있습니다. 또한 발생할 수 있는 일반적인 문제들과 그 해결책을 제시하여 개발 과정에서의 어려움을 최소화했습니다.

최신 웹 기술을 활용하여 성능 최적화와 유지보수성을 고려한 구조를 가진 웹사이트를 빠르게 구축할 수 있습니다.
