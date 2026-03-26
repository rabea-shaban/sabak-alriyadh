import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Droplets,
  Wrench,
  Thermometer,
  Zap,
  Shield,
  Clock,
  Star,
  Phone,
  MessageCircle,
  CheckCircle,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BestServicesPage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  const services = [
    {
      icon: Droplets,
      title: "كشف تسربات المياه بأجهزة إلكترونية",
      description:
        "نستخدم أحدث التقنيات لكشف التسربات المخفية بدقة متناهية دون الحاجة لأي تكسير، مما يوفر عليك الوقت والمال.",
      link: "/services/leak-detection",
    },
    {
      icon: Wrench,
      title: "إصلاح وصيانة شبكات الصرف الصحي",
      description:
        "حلول متكاملة لجميع مشاكل الصرف الصحي، من الإصلاحات البسيطة إلى تجديد الشبكات بالكامل، مع ضمان عدم تكرار المشكلة.",
      link: "/services/pipe-repair",
    },
    {
      icon: Thermometer,
      title: "تركيب وصيانة السخانات المركزية والفورية",
      description:
        "نضمن لك مياه ساخنة طوال العام من خلال تركيب وصيانة جميع أنواع السخانات بأيدي فنيين متخصصين.",
      link: "/services/heater-installation",
    },
    {
      icon: Zap,
      title: "تسليك المجاري بالضغط العالي",
      description:
        "نستخدم أحدث مكائن الضغط العالي والمواد الكيميائية الآمنة لتسليك أصعب الانسدادات في المطابخ والحمامات.",
      link: "/services/drain-cleaning",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "تشخيص دقيق",
      description: "فحص شامل وتحديد مصدر المشكلة بدقة قبل البدء بأي عمل.",
    },
    {
      icon: Shield,
      title: "ضمان ذهبي",
      description: "نقدم ضمانًا على جميع خدماتنا وقطع الغيار المستخدمة.",
    },
    {
      icon: Clock,
      title: "استجابة فورية",
      description:
        "فريق طوارئ جاهز لخدمتك على مدار الساعة في جميع أنحاء الرياض.",
    },
    {
      icon: Award,
      title: "فنيون معتمدون",
      description: "فريق من أمهر الفنيين الحاصلين على أعلى شهادات الخبرة.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          أفضل خدمات السباكة في الرياض | سباك معتمد لحلول التسربات والصيانة
        </title>

        <meta
          name="description"
          content="نقدم أفضل خدمات السباكة بالرياض: كشف تسربات المياه، تركيب السخانات، صيانة دورية، وإصلاح المجاري. سباكين محترفين واتصال سريع على مدار الساعة. اتصل بنا الآن: +966560877272."
        />

        <meta
          name="keywords"
          content="سباك الرياض, خدمات سباكة احترافية, كشف تسربات المياه, تركيب سخانات, صيانة مجاري, سباك معتمد بالرياض, شركة سباكة بالرياض, أفضل سباك في الرياض"
        />
      </Helmet>

      <div className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                أفضل خدمات السباكة في{" "}
                <span className="text-yellow-300">الرياض</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                نقدم لكم خلاصة خبرتنا في حلول سباكة مبتكرة ومضمونة، مصممة خصيصًا
                لتلبية احتياجاتكم وتوفير الراحة والأمان لمنزلكم.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex justify-center items-center"
              >
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-white"
                    alt="Happy client 1"
                    src="https://images.unsplash.com/photo-1649767590910-367f54f3d0e3"
                  />
                  <img
                    className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-white"
                    alt="Happy client 2"
                    src="https://images.unsplash.com/photo-1599856413870-40540dd55110"
                  />
                  <img
                    className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-white"
                    alt="Happy client 3"
                    src="https://images.unsplash.com/photo-1579047917338-a6a69144fe63"
                  />
                </div>
                <div className="mr-4 flex flex-col items-start">
                  <div className="flex">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-sm text-blue-200">بناءً على +500 تقييم</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Top Services Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا الأكثر طلبًا
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                هذه هي الخدمات التي يثق بها عملاؤنا ويعتمدون عليها لحل مشاكلهم
                بشكل جذري.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center"
                >
                  <div className="text-blue-600 mb-4 sm:mb-0 sm:ml-6 flex-shrink-0">
                    <service.icon className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center sm:text-right">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-center sm:text-right">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="font-semibold text-blue-600 hover:text-blue-800 transition-colors block text-center sm:text-right"
                    >
                      اكتشف المزيد ←
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Are The Best Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  لماذا نحن خيارك الأفضل لخدمات السباكة في الرياض؟
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  نحن لا نصلح المشاكل فقط، بل نقدم راحة البال. التزامنا بالجودة،
                  الدقة، ورضا العميل هو ما يميزنا عن الآخرين.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mt-10 lg:mt-0"
              >
                <img
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  alt="سباك محترف يستخدم أحدث الأدوات"
                  src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لا تدع مشاكل السباكة تعكر صفو يومك
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              اتصل بنا الآن واحصل على فحص مجاني واستشارة من أفضل خبراء السباكة
              في الرياض.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCallClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                اتصل بنا: +966 56 087 7272
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل عبر واتساب
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BestServicesPage;
