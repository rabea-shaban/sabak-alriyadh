import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Thermometer, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Settings,
  Droplets,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HeaterInstallationPage = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Thermometer,
      title: 'جميع أنواع السخانات',
      description: 'تركيب السخانات المركزية، الفورية، الكهربائية، والغاز'
    },
    {
      icon: Zap,
      title: 'تركيب احترافي',
      description: 'تركيب آمن ومطابق للمعايير العالمية مع اختبار شامل'
    },
    {
      icon: Shield,
      title: 'ضمان شامل',
      description: 'ضمان على التركيب والسخان لمدة 3 سنوات'
    },
    {
      icon: Clock,
      title: 'خدمة سريعة',
      description: 'تركيب في نفس اليوم مع صيانة دورية مجانية'
    }
  ];

  const heaterTypes = [
    {
      name: 'السخانات المركزية',
      description: 'مناسبة للمنازل الكبيرة، توفر مياه ساخنة لجميع أنحاء المنزل',
      capacity: '50-200 لتر',
      benefits: ['توفير في الطاقة', 'مياه ساخنة مستمرة', 'عمر افتراضي طويل']
    },
    {
      name: 'السخانات الفورية',
      description: 'تسخين فوري للمياه عند الحاجة، مثالية للاستخدام المحدود',
      capacity: '6-24 كيلو واط',
      benefits: ['توفير في المساحة', 'تسخين فوري', 'استهلاك أقل للطاقة']
    },
    {
      name: 'السخانات الكهربائية',
      description: 'آمنة وسهلة التحكم، مناسبة لجميع أحجام المنازل',
      capacity: '30-150 لتر',
      benefits: ['أمان عالي', 'تحكم دقيق', 'صيانة قليلة']
    },
    {
      name: 'سخانات الغاز',
      description: 'اقتصادية في التشغيل، تسخين سريع وفعال',
      capacity: '40-200 لتر',
      benefits: ['توفير في التكلفة', 'تسخين سريع', 'كفاءة عالية']
    }
  ];

  const installationSteps = [
    {
      step: '1',
      title: 'المعاينة والتقييم',
      description: 'فحص الموقع وتحديد نوع السخان المناسب والمتطلبات'
    },
    {
      step: '2',
      title: 'التحضير والتجهيز',
      description: 'تجهيز التوصيلات الكهربائية والمائية اللازمة'
    },
    {
      step: '3',
      title: 'التركيب والتوصيل',
      description: 'تركيب السخان وتوصيل جميع الأنابيب والكابلات'
    },
    {
      step: '4',
      title: 'الاختبار والتشغيل',
      description: 'اختبار شامل للنظام وتدريب العميل على الاستخدام'
    }
  ];

  return (
    <>
      <Helmet>
        <title>تركيب سخانات المياه بالرياض - جميع الأنواع | سباكة الرياض</title>
        <meta name="description" content="خدمة تركيب سخانات المياه بالرياض لجميع الأنواع: مركزية، فورية، كهربائية، غاز. تركيب احترافي مع ضمان 3 سنوات. اتصل الآن: +966 50 123 4567" />
        <meta name="keywords" content="تركيب سخانات الرياض, سخان مياه مركزي, سخان فوري, تركيب سخان كهربائي, سخان غاز" />
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
                  <Thermometer className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    تركيب سخانات المياه
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  خدمة متخصصة في تركيب جميع أنواع سخانات المياه: المركزية، الفورية، الكهربائية، 
                  والغاز. تركيب احترافي مطابق للمعايير العالمية مع ضمان شامل وصيانة دورية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    احجز تركيب الآن
                  </Button>
                  <Button 
                    onClick={handleContactClick}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    استشارة مجانية
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
                  alt="فني يقوم بتركيب سخان مياه مركزي حديث"
                 src="https://images.unsplash.com/photo-1654694019457-eb36c0201d30" />
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
                مميزات خدمة تركيب السخانات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة تركيب شاملة لجميع أنواع سخانات المياه بأعلى معايير الأمان والجودة
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

        {/* Heater Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع السخانات المتوفرة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نوفر جميع أنواع سخانات المياه لتناسب احتياجاتكم وميزانيتكم
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {heaterTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      السعة: {type.capacity}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">المميزات:</h4>
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                    خدمة تركيب سخانات المياه الاحترافية في الرياض
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    يعتبر سخان المياه من الأجهزة الأساسية في كل منزل، حيث يوفر المياه الساخنة اللازمة للاستحمام، 
                    غسيل الأطباق، والعديد من الاستخدامات اليومية. اختيار النوع المناسب من السخانات وتركيبه بطريقة 
                    صحيحة أمر بالغ الأهمية لضمان الأداء الأمثل والأمان.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نقدم خدمة شاملة لتركيب جميع أنواع سخانات المياه. فريقنا المتخصص 
                    يساعدكم في اختيار النوع المناسب حسب احتياجاتكم وحجم منزلكم، ويقوم بالتركيب وفقاً لأعلى 
                    معايير الأمان والجودة.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    كيفية اختيار السخان المناسب
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    اختيار السخان المناسب يعتمد على عدة عوامل مهمة:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">حجم الأسرة:</strong>
                        <span className="text-gray-700"> كلما زاد عدد أفراد الأسرة، كلما احتجتم لسخان بسعة أكبر</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">نمط الاستخدام:</strong>
                        <span className="text-gray-700"> هل تحتاجون مياه ساخنة مستمرة أم في أوقات محددة؟</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">المساحة المتاحة:</strong>
                        <span className="text-gray-700"> السخانات المركزية تحتاج مساحة أكبر من الفورية</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">مصدر الطاقة:</strong>
                        <span className="text-gray-700"> كهرباء أم غاز حسب المتوفر في منزلكم</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خطوات التركيب الاحترافي
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية في تركيب السخانات لضمان الأمان والكفاءة:
                  </p>
                  <div className="space-y-6">
                    {installationSteps.map((step, index) => (
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
                    نصائح للحفاظ على السخان
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    للحفاظ على كفاءة السخان وإطالة عمره الافتراضي، ننصح بما يلي:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">صيانة دورية كل 6 أشهر</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تنظيف الخزان من الترسبات</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">فحص صمام الأمان بانتظام</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">ضبط درجة الحرارة المناسبة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    ضمان شامل وصيانة مجانية
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    نقدم ضمان شامل لمدة 3 سنوات على جميع أعمال التركيب، بالإضافة إلى صيانة دورية مجانية 
                    خلال السنة الأولى. فريقنا متاح على مدار الساعة لأي استفسارات أو مشاكل طارئة.
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
                هل تحتاج تركيب سخان جديد؟
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                احصل على استشارة مجانية واختر السخان المناسب لمنزلك مع تركيب احترافي مضمون
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleContactClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن: 966+ 50 123 4567
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  استشارة مجانية
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeaterInstallationPage;