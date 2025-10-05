import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      {/* Hero 區塊 */}
      <section className="text-center py-20" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4">Hello AOS</h1>
        <p className="text-lg text-gray-600 mb-6">這是滑入動畫</p>
      </section>

      {/* 第二個區塊 */}
      <section className="text-center py-20 bg-gray-100" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold">第二個區塊</h2>
      </section>
    </div>
  );
}
