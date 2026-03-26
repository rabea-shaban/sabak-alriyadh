import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Clock,
  Shield,
  Target,
  Heart,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { number: "10+", label: "سنوات خبرة" },
    { number: "1000+", label: "عميل راضي" },
    { number: "24/7", label: "خدمة مستمرة" },
    { number: "100%", label: "ضمان الجودة" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  const values = [
    {
      icon: Target,
      title: "الدقة والإتقان",
      description: "نلتزم بأعلى معايير الدقة في تنفيذ جميع أعمال السباكة",
    },
    {
      icon: Heart,
      title: "خدمة العملاء",
      description: "رضا العملاء هو أولويتنا القصوى في كل ما نقوم به",
    },
    {
      icon: Shield,
      title: "الثقة والأمان",
      description: "نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة",
    },
    {
      icon: Award,
      title: "الجودة العالية",
      description: "نستخدم أفضل المواد والمعدات لضمان جودة العمل",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          من نحن - شركة سباكة بالرياض | خبرة موثوقة في كشف وصيانة التسربات
        </title>

        <meta
          name="description"
          content="شركة سباكة بالرياض بخبرة طويلة في كشف تسربات المياه، صيانة المواسير، تركيب السخانات، وجميع خدمات السباكة. نلتزم بالجودة والسرعة، اتصل الآن: +966560877272"
        />

        <meta
          name="keywords"
          content="شركة سباكة بالرياض, سباك محترف بالرياض, كشف تسربات المياه, صيانة سباكة, تركيب سخانات, فني سباكة, خدمات سباكة المنازل, سباك منازل الرياض, أفضل شركة سباكة, سباك شمال الرياض, سباك شرق الرياض"
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
                شريكك الموثوق لسباكة منزلك
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                نحن أكثر من مجرد شركة خدمات، نحن فريق من الخبراء ملتزمون بضمان
                راحة بالك وسلامة منزلك. تعرف على قصة نجاحنا وقيمنا التي تدفعنا
                للأمام.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  قصة <span className="text-blue-600">سباكة الرياض</span>: رحلة
                  من الثقة والخبرة
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  منذ انطلاقتنا قبل أكثر من عقد من الزمان، وضعنا نصب أعيننا
                  هدفًا واحدًا: تقديم خدمات سباكة لا مثيل لها في الرياض. بدأت
                  رحلتنا بفريق صغير من الفنيين الشغوفين، واليوم، نفخر بأننا
                  أصبحنا من الشركات الرائدة في هذا المجال، نخدم آلاف العملاء
                  الراضين في جميع أنحاء العاصمة.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نحن نؤمن بأن السباكة ليست مجرد إصلاح أنابيب، بل هي فن يتطلب
                  دقة، خبرة، والتزامًا بأعلى معايير الجودة. لذلك، نستثمر
                  باستمرار في تدريب فريقنا وتزويده بأحدث التقنيات والأدوات
                  العالمية لضمان حلول سريعة، فعالة، ومستدامة.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 ml-3" />
                    <span className="text-gray-700">فريق فني مؤهل ومعتمد.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 ml-3" />
                    <span className="text-gray-700">
                      استخدام أحدث أجهزة كشف التسربات بدون تكسير.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 ml-3" />
                    <span className="text-gray-700">
                      ضمان شامل على جميع خدماتنا وقطع الغيار.
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-10 lg:mt-0"
              >
                <img
                  className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
                  alt="فريق عمل شركة سباكة الرياض المحترف"
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أرقامنا تتحدث عنا
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                إنجازاتنا وأرقامنا تعكس التزامنا بتقديم أفضل الخدمات لعملائنا
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                قيمنا ومبادئنا
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                نؤمن بمجموعة من القيم والمبادئ التي توجه عملنا وتضمن تقديم أفضل
                الخدمات
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  رسالتنا ورؤيتنا
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">
                      رسالتنا
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      تقديم حلول سباكة مبتكرة وموثوقة تتجاوز توقعات عملائنا، مع
                      الالتزام الكامل بالشفافية، الجودة، وسرعة الاستجابة، لنكون
                      الشريك الأول الذي يثقون به لراحة منازلهم.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">
                      رؤيتنا
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      أن نكون الشركة الرائدة والأكثر ابتكارًا في قطاع خدمات
                      السباكة والصيانة المنزلية في المملكة العربية السعودية، مع
                      التوسع المستمر في خدماتنا لتغطية جميع احتياجات عملائنا
                      المستقبلية.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-10 lg:mt-0"
              >
                <img
                  className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
                  alt="رؤية ومهمة شركة سباكة الرياض"
                  src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1974&auto=format&fit=crop"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                جاهزون لخدمتك الآن
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                دعنا نكون جزءًا من الحل. تواصل معنا اليوم ودع فريق الخبراء لدينا
                يهتم بجميع مشاكل السباكة لديك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCallClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-base md:text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا: +966560877272
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 text-base md:text-lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  راسلنا على واتساب
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
