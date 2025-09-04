import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  return (
    <button
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="ml-4 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-transparent"
      onClick={() => setDark((d) => !d)}
      type="button"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
