
export default function Support() {
  return (
    <section
      className="container max-w-2xl mx-auto py-12 sm:py-20 px-2 sm:px-6 bg-gradient-to-br from-[#fffde7] via-[#ffeb3b] to-[#ff9800]/30 rounded-3xl shadow-2xl mt-8 mb-12 border-0"
      aria-labelledby="support-heading"
    >
      <h2
        id="support-heading"
        className="text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight text-[#ff9800] drop-shadow"
        tabIndex={-1}
      >
        고객지원
      </h2>
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-700">1:1 문의</h3>
        <form
          className="flex flex-col gap-5 bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7"
          aria-label="1:1 문의 폼"
        >
          <label htmlFor="support-name" className="sr-only">이름</label>
          <input
            id="support-name"
            className="w-full border-0 rounded-lg px-5 py-3 text-base bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow"
            placeholder="이름"
            required
            aria-label="이름"
          />
          <label htmlFor="support-email" className="sr-only">이메일</label>
          <input
            id="support-email"
            className="w-full border-0 rounded-lg px-5 py-3 text-base bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow"
            placeholder="이메일"
            type="email"
            required
            aria-label="이메일"
          />
          <label htmlFor="support-message" className="sr-only">문의 내용</label>
          <textarea
            id="support-message"
            className="w-full border-0 rounded-lg px-5 py-3 text-base bg-[#fffde7] text-[#ff9800] font-bold focus-visible:ring-2 focus-visible:ring-[#ff9800] shadow min-h-[120px]"
            placeholder="문의 내용"
            rows={4}
            required
            aria-label="문의 내용"
          />
          <button
            type="submit"
            className="bg-[#ff9800] text-white px-6 py-3 rounded-lg font-bold text-base shadow hover:bg-[#ffa726] focus-visible:ring-2 focus-visible:ring-[#ff9800] transition-colors"
            aria-label="문의하기"
          >
            문의하기
          </button>
        </form>
      </div>
      <div className="mb-12">
        <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7 flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-orange-700">유지보수 신청</h3>
          <p className="text-orange-700 text-base">
            유지보수 및 기술지원이 필요하신 경우<br />
            <a href="mailto:esmarthan@esmarthan.com" className="text-[#ff9800] underline font-semibold ml-1" aria-label="이메일 문의">esmarthan@esmarthan.com</a>
            <span className="mx-2">또는</span>
            <span className="font-bold">031-216-9492</span>로 연락해 주세요.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white/95 rounded-2xl shadow-lg border border-orange-100 p-7 flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-orange-700">원격지원 안내</h3>
          <p className="text-orange-700 text-base">
            원격지원이 필요하신 경우 담당자 안내에 따라<br />
            원격 프로그램(TeamViewer 등)을 실행해 주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
