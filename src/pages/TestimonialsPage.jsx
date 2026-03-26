import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Calendar,
  Quote,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "أحمد محمد العلي",
      location: "حي النرجس",
      date: "2024-01-15",
      rating: 5,
      service: "كشف تسربات المياه",
      comment:
        "خدمة ممتازة وسريعة جداً. تم كشف التسرب في الحمام خلال ساعة واحدة بدون أي تكسير. الفنيين محترفين ومهذبين والسعر معقول جداً. أنصح بهم بشدة.",
      avatar: "👨",
    },
    {
      name: "فاطمة بنت عبدالله",
      location: "حي الملقا",
      date: "2024-01-10",
      rating: 5,
      service: "تركيب سخان مركزي",
      comment:
        "تم تركيب السخان المركزي بإتقان عالي. الفريق وصل في الموعد المحدد وأنجز العمل بسرعة ونظافة. السخان يعمل بكفاءة ممتازة والضمان شامل.",
      avatar: "👩",
    },
    {
      name: "خالد بن سعد",
      location: "حي الياسمين",
      date: "2024-01-08",
      rating: 5,
      service: "إصلاح مواسير المطبخ",
      comment:
        "كان لدي مشكلة في مواسير المطبخ وتم حلها بشكل نهائي. الفنيين شرحوا لي المشكلة بوضوح وقدموا نصائح للصيانة. خدمة احترافية بكل معنى الكلمة.",
      avatar: "👨‍💼",
    },
    {
      name: "نورا بنت محمد",
      location: "حي الورود",
      date: "2024-01-05",
      rating: 5,
      service: "تنظيف مجاري",
      comment:
        "مشكلة انسداد المجاري كانت مزعجة جداً، لكن تم حلها خلال ساعتين فقط. استخدموا أحدث المعدات وتركوا المكان نظيف تماماً. شكراً لكم.",
      avatar: "👩‍💻",
    },
    {
      name: "عبدالرحمن الشمري",
      location: "حي الملز",
      date: "2024-01-03",
      rating: 5,
      service: "تركيب خلاطات حديثة",
      comment:
        "تم تركيب خلاطات جديدة في الحمامات والمطبخ. العمل منجز بدقة عالية والخلاطات تعمل بشكل ممتاز. الأسعار منافسة والخدمة سريعة.",
      avatar: "👨‍🔧",
    },
    {
      name: "سارة بنت أحمد",
      location: "حي العليا",
      date: "2024-01-01",
      rating: 5,
      service: "صيانة دورية شاملة",
      comment:
        "خدمة الصيانة الدورية ممتازة. تم فحص جميع التوصيلات والمواسير وإصلاح المشاكل الصغيرة قبل أن تتفاقم. أشعر بالأمان الآن.",
      avatar: "👩‍⚕️",
    },
    {
      name: "محمد بن عبدالعزيز",
      location: "حي الصحافة",
      date: "2023-12-28",
      rating: 5,
      service: "إعادة تأهيل حمام كامل",
      comment:
        "تم إعادة تأهيل الحمام بالكامل من السباكة إلى التشطيبات. العمل احترافي والنتيجة فاقت توقعاتي. الفريق ملتزم بالمواعيد ومنظم جداً.",
      avatar: "👨‍💼",
    },
    {
      name: "هند بنت سالم",
      location: "حي الربوة",
      date: "2023-12-25",
      rating: 5,
      service: "إصلاح تسرب عاجل",
      comment:
        "اتصلت بهم في حالة طوارئ بسبب تسرب كبير في منتصف الليل. وصلوا خلال 20 دقيقة وحلوا المشكلة فوراً. خدمة طوارئ حقيقية.",
      avatar: "👩‍🏫",
    },
    {
      name: "عبدالله الدوسري",
      location: "حي الشفا",
      date: "2023-12-22",
      rating: 5,
      service: "تركيب نظام ري حديقة",
      comment:
        "تم تركيب نظام ري للحديقة بشكل احترافي. النظام يعمل بكفاءة عالية ووفر لي الكثير من الوقت والجهد. شكراً للفريق المتميز.",
      avatar: "👨‍🌾",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  const stats = [
    { number: "500+", label: "تقييم 5 نجوم" },
    { number: "98%", label: "رضا العملاء" },
    { number: "1000+", label: "عميل سعيد" },
    { number: "24/7", label: "دعم مستمر" },
  ];

  return (
    <>
      <Helmet>
        <title>آراء العملاء عن سباكة الرياض | تقييمات حقيقية ورضا مضمون</title>

        <meta
          name="description"
          content="تعرف على تقييمات وآراء عملائنا عن خدمات سباكة الرياض. تجارب حقيقية من عملاء استفادوا من خدمات كشف التسربات والصيانة والتركيبات. رضاك هدفنا."
        />

        <meta
          name="keywords"
          content="آراء العملاء, تقييمات سباك الرياض, تجارب سباكة, مراجعات سباكين, تقييم خدمات سباكة, سباك موثوق, تجارب كشف تسربات المياه"
        />
      </Helmet>

      <div className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                آراء عملائنا
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                نفخر بثقة عملائنا وتقييماتهم الإيجابية. اقرأوا تجارب العملاء
                الحقيقية مع خدماتنا المتميزة
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                شهادات العملاء
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                تجارب حقيقية من عملائنا الكرام في جميع أنحاء الرياض
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl ml-3">{testimonial.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <div className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full inline-block self-start mb-3">
                    {testimonial.service}
                  </div>

                  <div className="relative flex-grow">
                    <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -right-2" />
                    <p className="text-gray-700 leading-relaxed pr-4">
                      {testimonial.comment}
                    </p>
                  </div>

                  <div className="flex items-center mt-4 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 ml-1" />
                    <span>
                      {new Date(testimonial.date).toLocaleDateString("ar-SA")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                انضم إلى عملائنا الراضين
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                احصل على نفس الخدمة المتميزة التي حصل عليها آلاف العملاء قبلك.
                نحن هنا لنقدم لك الأفضل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCallClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg rounded-lg transition-colors"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  احجز خدمتك الآن
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg rounded-lg transition-colors"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  اطلب معاينة مجانية
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialsPage;
