import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ParkingSystem from "./pages/ParkingSystem";
import IoTSystem from "./pages/IoTSystem";
import CCTVSystem from "./pages/CCTVSystem";
import Support from "./pages/Support";
import Admin from "./pages/Admin";
import { useEffect } from "react";

function App() {
  // Edge 브라우저 및 고대비 모드에서 테두리 관련 이슈 해결을 위한 전역 스타일 적용
  useEffect(() => {
    // 스타일 요소 생성 및 추가
    const style = document.createElement('style');
    style.textContent = `
      /* 전역 테두리 제거 스타일 */
      * { 
        border-color: transparent !important;
      }
      
      /* Edge 브라우저 관련 특수 스타일 */
      @supports (-ms-ime-align:auto) {
        div, a, button, input, section, article {
          border: 0 !important;
          outline: 0 !important;
        }
      }
      
      /* 접근성 고대비 모드 감지 및 스타일 조정 */
      @media (forced-colors: active) {
        * {
          forced-color-adjust: none !important;
          border: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1} className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parking" element={<ParkingSystem />} />
            <Route path="/iot" element={<IoTSystem />} />
            <Route path="/cctv" element={<CCTVSystem />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:type" element={<SolutionDetail />} />
            <Route path="/cases/*" element={<Cases />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
