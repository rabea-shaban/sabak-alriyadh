import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench as Tool, Shield, Clock, TrendingUp, CheckCircle, Phone, MessageCircle, FileText, Wrench, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MaintenancePage = () => {
  const { toast } = useToast();
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Shield,
      title: 'وقاية من الأعطال',
      description: 'تجنب الأعطال المفاجئة والمكلفة من خلال الفحص الدوري المنتظم.'
    },
    {
      icon: TrendingUp,
      title: 'إطالة عمر النظام',
      description: 'الصيانة الدورية تضمن عمل نظام السباكة بكفاءة وتطيل عمره الافتراضي.'
    },
    {
      icon: Droplets,
      title: 'توفير في التكاليف',
      description: 'اكتشاف المشاكل الصغيرة وإصلاحها قبل أن تتفاقم يوفر عليك الكثير من المال.'
    },
    {
      icon: Clock,
      title: 'راحة بال دائمة',
      description: 'استمتع براحة البال مع العلم أن نظام السباكة في منزلك يعمل بشكل مثالي.'
    }
  ];

  const maintenanceChecklist = [
    'فحص جميع المواسير والتوصيلات بحثًا عن تسربات.',
    'تنظيف المصارف والبالوعات من الترسبات.',
    'فحص ضغط المياه وضبطه للمستوى المثالي.',
    'فحص سخانات المياه وتنظيفها من الرواسب.',
    'فحص الخلاطات والصنابير والتأكد من عدم وجود تسريب.',
    'فحص خزانات المياه وتنظيفها عند الحاجة.',
    'فحص عوامات الخزانات وصمامات الأمان.',
    'تقديم تقرير مفصل بحالة نظام السباكة.'
  ];

  const contractTypes = [
    {
      type: 'العقد الفضي',
      visits: 'زيارتان سنويًا',
      price: 'مناسب للمنازل الصغيرة',
      features: ['فحص أساسي', 'تنظيف المصارف', 'تقرير حالة']
    },
    {
      type: 'العقد الذهبي',
      visits: '4 زيارات سنويًا',
      price: 'مثالي للعائلات',
      features: ['فحص شامل', 'تنظيف السخانات', 'خصم 15% على الإصلاحات']
    },
    {
      type: 'العقد البلاتيني',
      visits: '6 زيارات سنويًا',
      price: 'للمنشآت والفلل الكبيرة',
      features: ['فحص شامل ومتقدم', 'خدمة طوارئ مجانية', 'خصم 25% على الإصلاحات']
    }
  ];

  return (
    <>
      <Helmet>
        <title>صيانة سباكة دورية بالرياض - عقود سنوية | سباكة الرياض</title>
        <meta name="description" content="عقود صيانة سباكة دورية للمنازل والمنشآت في الرياض. احمِ منزلك من الأعطال المفاجئة ووفر في التكاليف مع خدمة الصيانة الدورية من سباكة الرياض." />
        <meta name="keywords" content="صيانة سباكة الرياض, عقد صيانة سباكة, صيانة دورية, فحص سباكة, سباك للمنازل" />
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
                className="space-y-6"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Tool className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    صيانة دورية للسباكة
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  الوقاية خير من العلاج! احمِ منزلك من مشاكل السباكة المفاجئة والمكلفة 
                  مع عقود الصيانة الدورية الشاملة من سباكة الرياض.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                  >
                    <FileText className="ml-2 h-5 w-5" />
                    اطلب عقد صيانة
                  </Button>
                  <Button 
                    onClick={handleContactClick}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    استشارة عبر واتساب
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-10 lg:mt-0"
              >
                <img  
                  className="rounded-lg shadow-2xl w-full h-auto max-h-96 object-cover"
                  alt="فني يقوم بفحص دوري لنظام السباكة"
                 src="https://images.unsplash.com/photo-1576182146973-108758814168" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                فوائد الصيانة الدورية
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                استثمار بسيط في الصيانة الدورية يوفر لك الكثير من المال وراحة البال على المدى الطويل.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Checklist Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  ماذا تشمل خدمة الصيانة الدورية؟
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {maintenanceChecklist.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing/Contracts Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                باقات الصيانة الدورية
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                اختر الباقة التي تناسب احتياجاتك وميزانيتك.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {contractTypes.map((contract, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`border rounded-xl p-8 text-center flex flex-col ${index === 1 ? 'border-blue-600 border-2 shadow-xl scale-105' : 'border-gray-200'}`}
                >
                  {index === 1 && (
                    <div className="bg-blue-600 text-white text-sm font-bold py-1 px-4 rounded-full self-center mb-4 -mt-12">
                      الأكثر شيوعاً
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{contract.type}</h3>
                  <p className="text-gray-500 mb-4">{contract.price}</p>
                  <p className="font-bold text-blue-600 text-lg mb-6">{contract.visits}</p>
                  
                  <ul className="space-y-3 text-gray-600 mb-8 flex-grow text-right pr-4">
                    {contract.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button onClick={handleContactClick} className={`w-full mt-auto ${index === 1 ? 'btn-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                    اطلب الآن
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدمات أخرى قد تهمك
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/services/leak-detection" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow text-center md:text-right">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    كشف تسربات المياه
                  </h3>
                  <p className="text-gray-600">
                    كشف دقيق للتسربات بأحدث الأجهزة بدون تكسير.
                  </p>
                </div>
              </Link>

              <Link to="/services/pipe-repair" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow text-center md:text-right">
                  <Wrench className="h-12 w-12 text-blue-600 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    إصلاح المواسير
                  </h3>
                  <p className="text-gray-600">
                    إصلاح وتركيب جميع أنواع المواسير والتوصيلات.
                  </p>
                </div>
              </Link>
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
                هل أنت مستعد لراحة البال؟
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                اتصل بنا اليوم للحصول على استشارة مجانية حول عقود الصيانة الدورية وابدأ في حماية منزلك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleContactClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن: +966560877272
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  اطلب استشارة
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MaintenancePage;
