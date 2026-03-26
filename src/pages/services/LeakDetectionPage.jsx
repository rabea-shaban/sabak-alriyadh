import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Search, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  AlertTriangle,
  Wrench,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const LeakDetectionPage = () => {
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
      icon: Search,
      title: 'كشف دقيق بدون تكسير',
      description: 'نستخدم أحدث أجهزة الكشف الإلكترونية للعثور على التسربات بدقة عالية'
    },
    {
      icon: Clock,
      title: 'خدمة سريعة',
      description: 'نصل إليكم خلال 30 دقيقة ونحدد مكان التسرب في أقل من ساعة'
    },
    {
      icon: Shield,
      title: 'ضمان شامل',
      description: 'نقدم ضمان على جميع أعمال الكشف والإصلاح لمدة سنة كاملة'
    },
    {
      icon: Wrench,
      title: 'إصلاح فوري',
      description: 'بعد كشف التسرب نقوم بإصلاحه فوراً بأفضل المواد والتقنيات'
    }
  ];

  const causes = [
    'تآكل المواسير القديمة',
    'ضغط المياه العالي',
    'تغيرات درجات الحرارة',
    'سوء التركيب الأولي',
    'انسداد في الأنابيب',
    'تلف الوصلات والمفاصل'
  ];

  const signs = [
    'ارتفاع فاتورة المياه بشكل مفاجئ',
    'ظهور بقع رطوبة على الجدران',
    'صوت جريان المياه المستمر',
    'انخفاض ضغط المياه',
    'رائحة عفن أو رطوبة',
    'تشقق في الجدران أو الأرضيات'
  ];

  const process = [
    {
      step: '1',
      title: 'الفحص الأولي',
      description: 'نقوم بفحص شامل للمنطقة المشتبه بها وتحديد نوع التسرب'
    },
    {
      step: '2',
      title: 'استخدام الأجهزة المتطورة',
      description: 'نستخدم أجهزة الكشف الإلكترونية والصوتية لتحديد مكان التسرب بدقة'
    },
    {
      step: '3',
      title: 'تحديد المشكلة',
      description: 'نحدد سبب التسرب ونوضح للعميل الحل المناسب والتكلفة'
    },
    {
      step: '4',
      title: 'الإصلاح والاختبار',
      description: 'نقوم بإصلاح التسرب واختبار النظام للتأكد من حل المشكلة نهائياً'
    }
  ];

  return (
    <>
      <Helmet>
        <title>كشف تسربات المياه بالرياض بدون تكسير - سباكة الرياض</title>
        <meta name="description" content="خدمة كشف تسربات المياه بالرياض بأحدث الأجهزة بدون تكسير. فحص دقيق وإصلاح فوري مع ضمان شامل. اتصل الآن: +966560877272" />
        <meta name="keywords" content="كشف تسربات المياه الرياض, كشف تسرب بدون تكسير, سباك الرياض, إصلاح تسربات, فحص مواسير المياه" />
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
                  <Droplets className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    كشف تسربات المياه
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  خدمة احترافية لكشف تسربات المياه بأحدث الأجهزة الإلكترونية بدون تكسير. 
                  نحدد مكان التسرب بدقة عالية ونقوم بإصلاحه فوراً مع ضمان شامل.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-base md:text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    اطلب كشف فوري
                  </Button>
                  <Button 
                    onClick={handleContactClick}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-base md:text-lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساب
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
                  alt="فني يستخدم جهاز كشف تسربات المياه المتطور"
                 src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89" />
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
                مميزات خدمة كشف التسربات
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم أفضل خدمة كشف تسربات في الرياض بأحدث التقنيات والمعدات المتطورة
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

        {/* Article Content */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    ما هي تسربات المياه وكيف تحدث؟
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    تسربات المياه من أكثر المشاكل شيوعاً في المنازل والمباني، وتحدث عندما تتسرب المياه من الأنابيب 
                    أو التوصيلات إلى أماكن غير مخصصة لها. هذه المشكلة قد تبدو بسيطة في البداية، لكنها يمكن أن تسبب 
                    أضراراً جسيمة إذا لم يتم التعامل معها بسرعة واحترافية.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نفهم أهمية الكشف المبكر عن التسربات ونقدم خدمات متخصصة باستخدام أحدث 
                    التقنيات للعثور على التسربات بدقة عالية وبدون الحاجة إلى تكسير الجدران أو الأرضيات.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    الأسباب الشائعة لتسربات المياه
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {causes.map((cause, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    علامات وجود تسرب في منزلك
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    هناك عدة علامات تدل على وجود تسرب في المياه، ومن المهم ملاحظتها مبكراً لتجنب الأضرار الكبيرة:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {signs.map((sign, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    طريقة عملنا في كشف التسربات
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية ومدروسة في كشف التسربات لضمان الحصول على أفضل النتائج:
                  </p>
                  <div className="space-y-6">
                    {process.map((step, index) => (
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
                    لماذا تختار شركة سباكة الرياض؟
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نحن الخيار الأول لكشف تسربات المياه في الرياض للأسباب التالية:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خبرة أكثر من 10 سنوات في مجال كشف التسربات</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أحدث الأجهزة والتقنيات المتطورة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">فريق فنيين مدربين ومعتمدين</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خدمة سريعة ومضمونة على مدار الساعة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أسعار منافسة وشفافة بدون رسوم خفية</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">ضمان شامل على جميع الأعمال</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    معاينة مجانية وتقدير فوري
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    نقدم معاينة مجانية لجميع حالات كشف التسربات، ونقوم بتقديم تقدير شامل للتكلفة قبل البدء في العمل. 
                    فريقنا يصل إليكم خلال 30 دقيقة في جميع أنحاء الرياض.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-white">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/services/pipe-repair" className="group">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center md:text-right">
                  <Wrench className="h-12 w-12 text-blue-600 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    إصلاح المواسير
                  </h3>
                  <p className="text-gray-600">
                    إصلاح وتركيب جميع أنواع المواسير والتوصيلات
                  </p>
                </div>
              </Link>

              <Link to="/services/drain-cleaning" className="group">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center md:text-right">
                  <Home className="h-12 w-12 text-blue-600 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    تنظيف المجاري
                  </h3>
                  <p className="text-gray-600">
                    تسليك وتنظيف المجاري بأحدث المعدات
                  </p>
                </div>
              </Link>

              <Link to="/services/maintenance" className="group">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center md:text-right">
                  <Shield className="h-12 w-12 text-blue-600 mb-4 mx-auto md:mx-0" />
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
        <section className="py-16 md:py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                هل تشك في وجود تسرب مياه؟
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                لا تنتظر حتى تتفاقم المشكلة. اتصل بنا الآن للحصول على كشف دقيق وسريع
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

export default LeakDetectionPage;
