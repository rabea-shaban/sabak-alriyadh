import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">سباكة الرياض</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن شركة رائدة في مجال خدمات السباكة بالرياض، نقدم حلول شاملة
              وموثوقة لجميع احتياجاتكم في السباكة والصيانة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-blue-400">
              روابط سريعة
            </span>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                من نحن
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                الخدمات
              </Link>
              <Link
                to="/best-services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                أفضل الخدمات
              </Link>
              <Link
                to="/testimonials"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                آراء العملاء
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                اتصل بنا
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-blue-400">خدماتنا</span>
            <div className="space-y-2">
              <Link
                to="/services/leak-detection"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                كشف تسربات المياه
              </Link>
              <Link
                to="/services/pipe-repair"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                إصلاح المواسير
              </Link>
              <Link
                to="/services/heater-installation"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                تركيب سخانات
              </Link>
              <Link
                to="/services/drain-cleaning"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                تنظيف المجاري
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-blue-400">
              معلومات التواصل
            </span>
            <div className="space-y-3">
              <a
                href="tel:+966560877272"
                className="flex items-center space-x-3 space-x-reverse group"
              >
                <Phone className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                <span
                  className="text-gray-300 group-hover:text-white transition-colors"
                  dir="ltr"
                >
                  +966 56 087 7272
                </span>
              </a>
              <a
                href="mailto:info@riyadhplumbing.com"
                className="flex items-center space-x-3 space-x-reverse group"
              >
                <Mail className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  info@riyadhplumbing.com
                </span>
              </a>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  الرياض، المملكة العربية السعودية
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">24/7 خدمة على مدار الساعة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-400">
            © {new Date().getFullYear()} سباكة الرياض. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-sm">
            تم برمجة وتصميم الموقع بواسطة{" "}
            <span className="font-semibold text-white">Eng. Rabea Shaban</span>{" "}
            — للتواصل:{" "}
            <a href="tel:01156807072" className="text-blue-400 hover:underline">
              01156807072
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
