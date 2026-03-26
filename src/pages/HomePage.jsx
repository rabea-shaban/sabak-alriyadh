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
  Users,
  Award,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  const services = [
    {
      icon: Droplets,
      title: "كشف تسربات المياه",
      description: "كشف دقيق للتسربات بأحدث الأجهزة بدون تكسير",
      link: "/services/leak-detection",
    },
    {
      icon: Wrench,
      title: "إصلاح المواسير",
      description: "إصلاح وتركيب جميع أنواع المواسير والتوصيلات",
      link: "/services/pipe-repair",
    },
    {
      icon: Thermometer,
      title: "تركيب سخانات",
      description: "تركيب وصيانة السخانات المركزية والفورية",
      link: "/services/heater-installation",
    },
    {
      icon: Zap,
      title: "تنظيف المجاري",
      description: "تسليك وتنظيف المجاري بأحدث المعدات",
      link: "/services/drain-cleaning",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "نقدم ضمان شامل على جميع أعمالنا",
    },
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "متاحون على مدار الساعة لحالات الطوارئ",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فنيون مدربون وذوو خبرة عالية",
    },
    {
      icon: Award,
      title: "أسعار منافسة",
      description: "أفضل الأسعار في السوق مع جودة عالية",
    },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      location: "حي النرجس",
      rating: 5,
      comment: "خدمة ممتازة وسريعة، تم حل مشكلة التسرب في نفس اليوم",
    },
    {
      name: "فاطمة العلي",
      location: "حي الملقا",
      rating: 5,
      comment: "فريق محترف جداً وأسعار معقولة، أنصح بهم بشدة",
    },
    {
      name: "خالد السعد",
      location: "حي الياسمين",
      rating: 5,
      comment: "تركيب السخان تم بإتقان عالي والفنيين مهذبين ومحترفين",
    },
  ];

  return (
    <>
      <Helmet>
        <title>سباك بالرياض | سباكة الرياض</title>

        <meta
          name="description"
          content="سباك محترف في الرياض يقدم خدمات سباكة متكاملة: كشف تسربات المياه، إصلاح مواسير، تركيب سخانات، وصيانة دورية. خدمة طوارئ 24 ساعة بأسعار مناسبة. اتصل بنا الآن: +966560877272"
        />

        <meta
          name="keywords"
          content="سباك الرياض, سباك 24 ساعة, كشف تسربات المياه, إصلاح مواسير بالرياض, تركيب سخانات بالرياض, سباكة منازل, شركة سباكة بالرياض, فني سباكة, رقم سباك موثوق"
        />
      </Helmet>

      <div className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center lg:text-right"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  أفضل خدمات
                  <span className="block text-yellow-300">
                    السباكة في الرياض
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  نحن شركة رائدة في مجال السباكة والصيانة، نقدم حلول شاملة
                  وموثوقة لجميع احتياجاتكم. خدمة سريعة ومضمونة على مدار الساعة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={handleCallClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    احجز زيارة مجانية
                  </Button>
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساب مباشر
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <img
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  alt="فني سباكة محترف يعمل على إصلاح الأنابيب"
                  src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-bold">+1000 عميل راضي</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا المتميزة
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات السباكة والصيانة بأعلى معايير الجودة
                والاحترافية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="service-card bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-blue-600 mb-4 inline-block">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    اقرأ المزيد ←
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا نحن الأفضل؟
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                نتميز بالخبرة والاحترافية والالتزام بتقديم أفضل الخدمات لعملائنا
                الكرام
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                آراء عملائنا
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                نفخر بثقة عملائنا وتقييماتهم الإيجابية لخدماتنا المتميزة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span className="text-sm">{testimonial.location}</span>
                      </div>
                    </div>
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
                هل تحتاج خدمة سباكة عاجلة؟
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                لا تتردد في التواصل معنا الآن. فريقنا جاهز لخدمتكم على مدار
                الساعة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCallClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن: +966 56 087 7272
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
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

export default HomePage;
