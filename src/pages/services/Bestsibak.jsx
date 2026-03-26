import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  AlertTriangle,
  Droplets,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Bestsibak = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          أفضل شركة سباكة بالرياض - خصم حتى 30% على جميع الخدمات | سباكة الرياض
        </title>
        <meta
          name="description"
          content="استفد من خصم يصل إلى 30% على جميع خدمات السباكة في الرياض: كشف تسربات، إصلاح مواسير، تركيب سخانات، صيانة دورية والمزيد. اتصل الآن لخدمة فورية."
        />
        <meta
          name="keywords"
          content="شركة سباكة الرياض, خصم سباكة, كشف تسربات المياه, إصلاح مواسير, تركيب سخانات, تنظيف مجاري, صيانة دورية, سباك محترف, سباك 24 ساعة"
        />
      </Helmet>

      <div className="pt-16">
        <section className="hero-gradient text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              أفضل شركة سباكة بالرياض – خصم حتى{" "}
              <span className="text-yellow-300">30%</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              خدمات سباكة شاملة في جميع أنحاء الرياض تشمل كشف التسربات، إصلاح
              المواسير، صيانة السخانات، تنظيف المجاري، الصيانة الدورية، تركيب
              الأحواض والخلاطات والمزيد. استفد من خصم لفترة محدودة.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
              >
                <Phone className="ml-2 h-5 w-5" /> احجز الآن
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
              >
                <MessageCircle className="ml-2 h-5 w-5" /> واتساب مباشر
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg text-gray-800 space-y-8"
            >
              <h2 className="text-3xl font-bold text-center">
                خدماتنا المتوفرة
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>كشف تسربات المياه:</strong> باستخدام أحدث الأجهزة بدون
                  تكسير.
                </li>
                <li>
                  <strong>إصلاح المواسير:</strong> صيانة لجميع الأنواع مثل PVC
                  والنحاس والحديد.
                </li>
                <li>
                  <strong>تركيب وصيانة السخانات:</strong> سخانات مركزية وفورية
                  بأمان كامل.
                </li>
                <li>
                  <strong>تنظيف المجاري:</strong> إزالة الانسدادات ومشاكل
                  التصريف بأمان.
                </li>
                <li>
                  <strong>تركيب الأحواض والخلاطات:</strong> بخبرة وجودة عالية
                  للحمامات والمطابخ.
                </li>
                <li>
                  <strong>صيانة دورية:</strong> فحص شامل لأنظمة السباكة وتفادي
                  الأعطال قبل وقوعها.
                </li>
                <li>
                  <strong>خدمة الطوارئ 24/7:</strong> نلبي طلبك في أي وقت طوال
                  الأسبوع.
                </li>
              </ul>

              <h2 className="text-2xl font-bold">لماذا نحن؟</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>خصومات تصل إلى 30% لفترة محدودة</li>
                <li>سباكين مرخصين ومعتمدين</li>
                <li>خدمة سريعة في جميع أحياء الرياض</li>
                <li>ضمان سنتين على جميع الأعمال</li>
                <li>أسعار واضحة بدون مفاجآت</li>
              </ul>

              <div className="text-center">
                <Button
                  onClick={handleContactClick}
                  className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-10 py-4 text-lg"
                >
                  احصل على العرض الآن
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bestsibak;
