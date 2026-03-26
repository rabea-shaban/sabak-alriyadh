import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Wrench, Thermometer, Zap, Settings, Home, Wrench as Tool, Phone, MessageCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ServicesPage = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const services = [
    {
      icon: Droplets,
      title: 'كشف تسربات المياه',
      description: 'كشف دقيق للتسربات بأحدث الأجهزة الإلكترونية بدون تكسير.',
      link: '/services/leak-detection'
    },
    {
      icon: Wrench,
      title: 'إصلاح المواسير',
      description: 'إصلاح وتركيب جميع أنواع المواسير والتوصيلات التالفة.',
      link: '/services/pipe-repair'
    },
    {
      icon: Thermometer,
      title: 'تركيب سخانات',
      description: 'تركيب وصيانة السخانات المركزية والفورية بجميع أنواعها.',
      link: '/services/heater-installation'
    },
    {
      icon: Zap,
      title: 'تنظيف المجاري',
      description: 'تسليك وتنظيف المجاري المسدودة بأحدث المعدات والتقنيات.',
      link: '/services/drain-cleaning'
    },
    {
      icon: Settings,
      title: 'تركيب خلاطات',
      description: 'تركيب وتجديد جميع أنواع خلاطات المياه للمطابخ والحمامات.',
      link: '/services/faucet-installation'
    },
    {
      icon: Home,
      title: 'سباكة المطابخ والحمامات',
      description: 'تأسيس وتجديد شبكات السباكة للمطابخ والحمامات بالكامل.',
      link: '/services/kitchen-bathroom'
    },
    {
      icon: Tool,
      title: 'صيانة دورية',
      description: 'عقود صيانة دورية للمنازل والمنشآت لضمان سلامة نظام السباكة.',
      link: '/services/maintenance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>خدمات السباكة في الرياض - شركة سباك الرياض </title>
        <meta name="description" content="نقدم جميع خدمات السباكة في الرياض: كشف تسربات، إصلاح مواسير، تركيب سخانات، تنظيف مجاري، والمزيد. خدمة احترافية مضمونة على مدار 24 ساعة." />
        <meta name="keywords" content="خدمات سباكة الرياض, سباك بالرياض, شركة سباكة, جميع خدمات السباكة, سباكة منازل" />
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
                خدماتنا الاحترافية
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                نقدم حلول سباكة متكاملة وموثوقة لجميع احتياجات منزلك أو منشأتك. فريقنا جاهز لخدمتك على مدار الساعة بأعلى جودة وأفضل سعر.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="service-card bg-gray-50 p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors py-3 text-base"
                    >
                      اعرف المزيد
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img  
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  alt="فريق سباكين محترفين في الرياض"
                 src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  لماذا تختار <span className="text-blue-600">سباكة الرياض</span>؟
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نحن لسنا مجرد شركة سباكة، بل شريكك الموثوق لحل جميع مشاكل السباكة في منزلك. نلتزم بتقديم خدمة تتجاوز توقعاتك.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full p-1 ml-3 mt-1 flex-shrink-0">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">خبرة واحترافية</h4>
                      <p className="text-gray-600">فريق من الفنيين المهرة بخبرة تتجاوز 10 سنوات في السوق السعودي.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full p-1 ml-3 mt-1 flex-shrink-0">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">جودة وضمان</h4>
                      <p className="text-gray-600">نستخدم أفضل المواد ونقدم ضمانًا حقيقيًا على جميع خدماتنا.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full p-1 ml-3 mt-1 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">سرعة واستجابة</h4>
                      <p className="text-gray-600">خدمة طوارئ 24/7 ونصل إليك في أسرع وقت ممكن في جميع أنحاء الرياض.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
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
                هل لديك مشكلة في السباكة؟
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                لا تتردد! تواصل معنا الآن واحصل على استشارة مجانية وفحص فوري لمشكلتك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleContactClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا الآن
                </Button>
                <Button 
                  onClick={handleContactClick}
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

export default ServicesPage;