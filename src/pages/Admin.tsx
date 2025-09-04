
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin | 스마트한</title>
        <meta name="description" content="콘텐츠, 배너, 사용자권한 등 관리자 기능" />
      </Helmet>
      <section
        className="container max-w-4xl mx-auto py-12 sm:py-20 px-2 sm:px-6 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800]/30 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
        aria-labelledby="admin-heading"
      >
        <h2
          id="admin-heading"
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight text-[#ff9800] drop-shadow"
          tabIndex={-1}
        >
          관리자(Admin)
        </h2>
        {/* 콘텐츠 관리 */}
        <section className="mb-10" aria-labelledby="admin-content">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="admin-content" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">콘텐츠 관리</h3>
            <div className="flex gap-3 mb-4">
              <Button size="sm" className="bg-[#ff9800] text-white font-bold hover:bg-[#ffa726] focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors" aria-label="새 글 작성">새 글 작성</Button>
              <Button size="sm" variant="secondary" className="border-orange-200 text-orange-700 font-bold hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors" aria-label="삭제">삭제</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[500px] w-full border text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#fffde7] text-orange-700">
                    <th className="p-3 border">제목</th>
                    <th className="p-3 border">작성자</th>
                    <th className="p-3 border">등록일</th>
                    <th className="p-3 border">상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabIndex={0} aria-label="스마트시티 소개 행" className="hover:bg-orange-50">
                    <td className="p-3 border">스마트시티 소개</td>
                    <td className="p-3 border">admin</td>
                    <td className="p-3 border">2025-09-01</td>
                    <td className="p-3 border">게시중</td>
                  </tr>
                  <tr tabIndex={0} aria-label="IoT 시스템 안내 행" className="hover:bg-orange-50">
                    <td className="p-3 border">IoT 시스템 안내</td>
                    <td className="p-3 border">manager</td>
                    <td className="p-3 border">2025-08-20</td>
                    <td className="p-3 border">임시저장</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* 배너/팝업 관리 */}
        <section className="mb-10" aria-labelledby="admin-banner">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="admin-banner" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">배너/팝업 관리</h3>
            <div className="flex gap-3 mb-4">
              <Button size="sm" className="bg-[#ff9800] text-white font-bold hover:bg-[#ffa726] focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors" aria-label="배너 추가">배너 추가</Button>
              <Button size="sm" variant="secondary" className="border-orange-200 text-orange-700 font-bold hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors" aria-label="삭제">삭제</Button>
            </div>
            <ul className="list-disc pl-6 text-orange-900 space-y-1 text-base">
              <li>메인 상단 배너 (노출중)</li>
              <li>이벤트 팝업 (비노출)</li>
            </ul>
          </div>
        </section>
        {/* 사용자 권한 관리 */}
        <section aria-labelledby="admin-user">
          <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7">
            <h3 id="admin-user" className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">사용자 권한 관리</h3>
            <div className="overflow-x-auto">
              <table className="min-w-[400px] w-full border text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#fffde7] text-orange-700">
                    <th className="p-3 border">이름</th>
                    <th className="p-3 border">권한</th>
                    <th className="p-3 border">상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabIndex={0} aria-label="admin 사용자 행" className="hover:bg-orange-50">
                    <td className="p-3 border">admin</td>
                    <td className="p-3 border">최고관리자</td>
                    <td className="p-3 border">활성</td>
                  </tr>
                  <tr tabIndex={0} aria-label="manager 사용자 행" className="hover:bg-orange-50">
                    <td className="p-3 border">manager</td>
                    <td className="p-3 border">일반관리자</td>
                    <td className="p-3 border">비활성</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
