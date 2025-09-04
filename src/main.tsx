import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './border-fix.css' // 테두리 이슈 해결을 위한 추가 스타일시트 (유효한 CSS 문법)
import './backup-styles.css' // Tailwind 클래스가 작동하지 않을 경우를 대비한 백업 스타일
import './responsive-fix.css' // 반응형 디자인 문제 해결을 위한 추가 스타일
import './responsive-nav.css' // 네비게이션 반응형 개선을 위한 스타일
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
