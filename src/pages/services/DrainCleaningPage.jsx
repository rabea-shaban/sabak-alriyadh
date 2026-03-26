import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Wind, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  AlertTriangle,
  Droplets,
  Wrench,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DrainCleaningPage = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Wind,
      title: 'تسليك بأحدث المعدات',
      description: 'نستخدم أحدث معدات التسليك عالية الضغط والكاميرات المتطورة'
    },
    {
      icon: Zap,
      title: 'حل سريع وفعال',
      description: 'نحل مشاكل الانسداد خلال ساعات قليلة بدون تكسير'
    },
    {
      icon: Shield,
      title: 'تنظيف شامل',
      description: 'تنظيف كامل للمجاري وإزالة جميع الترسبات والروائح'
    },
    {
      icon: Clock,
      title: 'خدمة طوارئ',
      description: 'متاحون على مدار الساعة لحالات الانسداد الطارئة'
    }
  ];

  const blockageCauses = [
    'تراكم الشعر والصابون',
    'بقايا الطعام والدهون',
    'المناديل والمواد الغريبة',
    'تراكم الترسبات الكلسية',
    'جذور الأشجار في الأنابيب الخارجية',
    'تلف أو انحناء في الأنابيب'
  ];

  const warningSigns = [
    'بطء تصريف المياه',
    'ظهور روائح كريهة',
    'فيضان المياه من المصارف',
    'أصوات غريبة من الأنابيب',
    'ظهور المياه في أماكن غير مناسبة',
    'تجمع المياه حول المصارف'
  ];

  const cleaningProcess = [
    {
      step: '1',
      title: 'الفحص والتشخيص',
      description: 'فحص شامل للمجاري باستخدام الكاميرات لتحديد نوع ومكان الانسداد'
    },
    {
      step: '2',
      title: 'اختيار الطريقة المناسبة',
      description: 'تحديد أفضل طريقة للتسليك حسب نوع الانسداد ومادة الأنابيب'
    },
    {
      step: '3',
      title: 'التسليك والتنظيف',
      description: 'تنفيذ عملية التسليك باستخدام المعدات المناسبة وتنظيف شامل'
    },
    {
      step: '4',
      title: 'الاختبار والوقاية',
      description: 'اختبار التصريف وتقديم نصائح للوقاية من الانسداد المستقبلي'
    }
  ];

  const serviceAreas = [
    'مجاري المطابخ',
    'مجاري الحمامات',
    'مجاري الغسالات',
    'المجاري الرئيسية',
    'مجاري الأسطح',
    'خزانات الصرف'
  ];

  return (
    <>
      <Helmet>
        <title>تنظيف وتسليك المجاري بالرياض - خدمة سريعة ومضمونة | سباكة الرياض</title>
        <meta name="description" content="خدمة تنظيف وتسليك المجاري بالرياض بأحدث المعدات. حل سريع لجميع مشاكل الانسداد بدون تكسير. خدمة طوارئ 24/7. اتصل الآن: +966 50 123 4567" />
        <meta name="keywords" content="تسليك مجاري الرياض, تنظيف مجاري, حل انسداد المجاري, تسليك بالوعة, تنظيف صرف صحي" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Zap className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    تنظيف وتسليك المجاري
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  خدمة متخصصة في تسليك وتنظيف جميع أنواع المجاري والمصارف. نحل مشاكل الانسداد 
                  بأحدث المعدات عالية الضغط بدون تكسير مع ضمان شامل على الخدمة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    تسليك فوري
                  </Button>
                  <Button 
                    onClick={handleContactClick}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    طوارئ واتساب
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img  
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  alt="فني يستخدم معدات تسليك المجاري المتطورة"
                 src="https://images.unsplash.com/photo-1612618736568-d0d3888817c0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مميزات خدمة تنظيف المجاري
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم أفضل خدمة تسليك وتنظيف المجاري في الرياض بأحدث التقنيات والمعدات
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
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

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مناطق الخدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة تسليك وتنظيف شاملة لجميع أنواع المجاري والمصارف
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {area}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خدمة تنظيف وتسليك المجاري الاحترافية في الرياض
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    انسداد المجاري من أكثر المشاكل إزعاجاً في المنازل والمباني، حيث يمكن أن يسبب روائح كريهة، 
                    فيضان المياه، ومشاكل صحية خطيرة إذا لم يتم التعامل معه بسرعة واحترافية. هذه المشكلة تتطلب 
                    خبرة متخصصة ومعدات متطورة لحلها بشكل نهائي.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نقدم خدمة متخصصة في تسليك وتنظيف جميع أنواع المجاري والمصارف. 
                    فريقنا المتخصص يستخدم أحدث المعدات عالية الضغط والكاميرات المتطورة لتشخيص المشكلة وحلها 
                    بأسرع وقت ممكن.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    الأسباب الشائعة لانسداد المجاري
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    فهم أسباب انسداد المجاري يساعد في الوقاية والعلاج المناسب:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blockageCauses.map((cause, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    علامات تدل على انسداد المجاري
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    هناك عدة علامات تحذيرية تدل على وجود مشكلة في المجاري:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {warningSigns.map((sign, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    طريقة عملنا في تسليك المجاري
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية ومدروسة في تسليك المجاري لضمان حل نهائي للمشكلة:
                  </p>
                  <div className="space-y-6">
                    {cleaningProcess.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 space-x-reverse">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    المعدات والتقنيات المستخدمة
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نستخدم أحدث المعدات والتقنيات في تسليك المجاري:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">معدات الضغط العالي لإزالة الانسدادات الصعبة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">كاميرات متطورة لفحص الأنابيب من الداخل</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">مواد تنظيف آمنة وصديقة للبيئة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أدوات تسليك متخصصة لجميع أحجام الأنابيب</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    نصائح للوقاية من انسداد المجاري
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    الوقاية خير من العلاج، إليكم أهم النصائح لتجنب انسداد المجاري:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تجنب إلقاء بقايا الطعام في المصارف</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">استخدام مصافي لمنع دخول الشعر والأوساخ</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تنظيف دوري للمصارف بالماء الساخن</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تجنب إلقاء المواد الكيميائية القوية</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    خدمة طوارئ على مدار الساعة
                  </h3>
                  <p className="text-red-800 leading-relaxed">
                    نتفهم أن مشاكل انسداد المجاري قد تحدث في أي وقت وتحتاج حل عاجل. لذلك نقدم خدمة 
                    طوارئ على مدار الساعة. فريقنا جاهز للوصول إليكم خلال 30 دقيقة في جميع أنحاء الرياض.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدمات أخرى قد تهمك
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/services/leak-detection" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    كشف تسربات المياه
                  </h3>
                  <p className="text-gray-600">
                    كشف دقيق للتسربات بأحدث الأجهزة بدون تكسير
                  </p>
                </div>
              </Link>

              <Link to="/services/pipe-repair" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    إصلاح المواسير
                  </h3>
                  <p className="text-gray-600">
                    إصلاح وتركيب جميع أنواع المواسير والتوصيلات
                  </p>
                </div>
              </Link>

              <Link to="/services/maintenance" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Settings className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    صيانة دورية
                  </h3>
                  <p className="text-gray-600">
                    صيانة شاملة ودورية لجميع أنظمة السباكة
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                هل تواجه مشكلة انسداد في المجاري؟
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                لا تدع المشكلة تتفاقم. اتصل بنا الآن للحصول على تسليك سريع ومضمون
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleContactClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  طوارئ: 966+ 50 123 4567
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب فوري
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DrainCleaningPage;