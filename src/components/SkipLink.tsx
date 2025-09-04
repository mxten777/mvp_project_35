export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-white text-blue-600 px-4 py-2 rounded shadow"
    >
      메인 콘텐츠로 건너뛰기
    </a>
  );
}
