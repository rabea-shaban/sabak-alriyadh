import { Link } from "react-router-dom";

const SitemapPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-right">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">خريطة الموقع</h1>

      <ul className="space-y-4 text-lg leading-relaxed">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600 hover:underline">
            من نحن
          </Link>
        </li>
        <li>
          <details open>
            <summary className="cursor-pointer font-semibold">الخدمات</summary>
            <ul className="pl-5 mt-2 list-disc space-y-2">
              <li>
                <Link to="/services/leak-detection" className="hover:underline">
                  كشف تسربات المياه
                </Link>
              </li>
              <li>
                <Link to="/services/pipe-repair" className="hover:underline">
                  إصلاح المواسير
                </Link>
              </li>
              <li>
                <Link
                  to="/services/heater-installation"
                  className="hover:underline"
                >
                  تركيب السخانات
                </Link>
              </li>
              <li>
                <Link to="/services/drain-cleaning" className="hover:underline">
                  تنظيف المجاري
                </Link>
              </li>
              <li>
                <Link
                  to="/services/faucet-installation"
                  className="hover:underline"
                >
                  تركيب الخلاطات
                </Link>
              </li>
              <li>
                <Link
                  to="/services/kitchen-bathroom"
                  className="hover:underline"
                >
                  سباكة المطابخ والحمامات
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="hover:underline">
                  صيانة دورية
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/best-services" className="text-blue-600 hover:underline">
            أفضل خدماتنا
          </Link>
        </li>
        <li>
          <Link to="/testimonials" className="text-blue-600 hover:underline">
            آراء العملاء
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-600 hover:underline">
            اتصل بنا
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SitemapPage;
