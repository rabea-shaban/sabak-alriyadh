import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Droplets, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Wrench,
  Thermometer,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FaucetInstallationPage = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Settings,
      title: 'جميع أنواع الخلاطات',
      description: 'تركيب خلاطات المطبخ، الحمام، الدش، والحديقة بجميع الأنواع'
    },
    {
      icon: Droplets,
      title: 'توفير في المياه',
      description: 'خلاطات حديثة موفرة للمياه مع تحكم دقيق في التدفق'
    },
    {
      icon: Shield,
      title: 'ضمان طويل المدى',
      description: 'ضمان على التركيب والخلاطات لمدة سنتين كاملتين'
    },
    {
      icon: Clock,
      title: 'تركيب سريع',
      description: 'تركيب احترافي في نفس اليوم مع اختبار شامل للأداء'
    }
  ];

  const faucetTypes = [
    {
      name: 'خلاطات المطبخ',
      description: 'خلاطات عملية ومتينة مع رشاش قابل للسحب',
      features: ['رشاش متحرك', 'تحكم في درجة الحرارة', 'مقاومة للصدأ', 'سهولة التنظيف']
    },
    {
      name: 'خلاطات الحمام',
      description: 'تصاميم أنيقة تناسب جميع أنواع الديكور',
      features: ['تصميم عصري', 'توفير في المياه', 'سهولة الاستخدام', 'متانة عالية']
    },
    {
      name: 'خلاطات الدش',
      description: 'خلاطات دش متطورة مع تحكم في الضغط والحرارة',
      features: ['تحكم في الضغط', 'ثرموستات', 'رشاش متعدد الأنماط', 'أمان عالي']
    },
    {
      name: 'خلاطات الحديقة',
      description: 'خلاطات خارجية مقاومة للعوامل الجوية',
      features: ['مقاومة الطقس', 'تحكم في التدفق', 'سهولة التشغيل', 'عمر افتراضي طويل']
    }
  ];

  const installationSteps = [
    {
      step: '1',
      title: 'المعاينة والقياس',
      description: 'فحص الموقع وقياس التوصيلات الموجودة لاختيار الخلاط المناسب'
    },
    {
      step: '2',
      title: 'إزالة الخلاط القديم',
      description: 'إزالة الخلاط القديم بعناية مع الحفاظ على التوصيلات'
    },
    {
      step: '3',
      title: 'التركيب والتوصيل',
      description: 'تركيب الخلاط الجديد وتوصيل جميع الأنابيب بإحكام'
    },
    {
      step: '4',
      title: 'الاختبار والضبط',
      description: 'اختبار شامل للتأكد من عدم وجود تسربات وضبط التدفق'
    }
  ];

  const benefits = [
    'توفير في استهلاك المياه',
    'تحكم أفضل في درجة الحرارة',
    'تصميم عصري وأنيق',
    'سهولة في الاستخدام والصيانة',
    'مقاومة للتآكل والصدأ',
    'عمر افتراضي طويل'
  ];

  return (
    <>
      <Helmet>
        <title>تركيب خلاطات المياه بالرياض - جميع الأنواع | سباكة الرياض</title>
        <meta name="description" content="خدمة تركيب خلاطات المياه بالرياض لجميع الأنواع: مطبخ، حمام، دش، حديقة. تركيب احترافي مع ضمان سنتين. اتصل الآن: +966 50 123 4567" />
        <meta name="keywords" content="تركيب خلاطات الرياض, خلاط مطبخ, خلاط حمام, خلاط دش, تركيب صنابير, سباك خلاطات" />
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
                  <Settings className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    تركيب خلاطات المياه
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  خدمة متخصصة في تركيب جميع أنواع خلاطات المياه للمطابخ والحمامات والحدائق. 
                  نوفر أحدث التصاميم العصرية مع تركيب احترافي وضمان شامل.
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
                  alt="فني يقوم بتركيب خلاط مياه حديث في المطبخ"
                 src="https://images.unsplash.com/photo-1587993730319-7d4b15931268" />
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
                مميزات خدمة تركيب الخلاطات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة تركيب شاملة لجميع أنواع خلاطات المياه بأعلى معايير الجودة
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

        {/* Faucet Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع الخلاطات المتوفرة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نوفر جميع أنواع خلاطات المياه لتناسب احتياجاتكم وتفضيلاتكم
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faucetTypes.map((type, index) => (
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
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">المميزات:</h4>
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
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
                    خدمة تركيب خلاطات المياه الاحترافية في الرياض
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    خلاطات المياه من العناصر الأساسية في كل منزل، فهي لا تؤثر فقط على وظائف المطبخ والحمام، 
                    بل تلعب دوراً مهماً في الديكور العام وتوفير المياه. اختيار الخلاط المناسب وتركيبه بطريقة 
                    صحيحة يضمن الأداء الأمثل والمتانة طويلة المدى.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نقدم خدمة شاملة لتركيب جميع أنواع خلاطات المياه. فريقنا المتخصص 
                    يساعدكم في اختيار النوع والتصميم المناسب، ويقوم بالتركيب وفقاً لأعلى معايير الجودة والأمان.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    فوائد تركيب خلاطات حديثة
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تركيب خلاطات مياه حديثة يوفر العديد من الفوائد:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خطوات التركيب الاحترافي
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية في تركيب الخلاطات لضمان الأداء الأمثل:
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
                    نصائح لاختيار الخلاط المناسب
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    عند اختيار خلاط المياه، يجب مراعاة عدة عوامل مهمة:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">نوع الاستخدام:</strong>
                        <span className="text-gray-700"> مطبخ، حمام، دش، أم حديقة</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">التصميم:</strong>
                        <span className="text-gray-700"> يجب أن يتناسب مع ديكور المكان</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">الجودة:</strong>
                        <span className="text-gray-700"> اختيار ماركات موثوقة ومضمونة</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">توفير المياه:</strong>
                        <span className="text-gray-700"> خلاطات موفرة للمياه والطاقة</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    صيانة الخلاطات والعناية بها
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    للحفاظ على خلاطات المياه وإطالة عمرها الافتراضي:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تنظيف دوري بمواد لطيفة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">فحص الوصلات بانتظام</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">استبدال الفلاتر عند الحاجة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تجنب استخدام مواد كيميائية قوية</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    ضمان شامل وخدمة ما بعد التركيب
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    نقدم ضمان شامل لمدة سنتين على جميع أعمال التركيب والخلاطات. كما نوفر خدمة 
                    صيانة دورية وإرشادات للعناية بالخلاطات لضمان أدائها الأمثل.
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
              <Link to="/services/kitchen-bathroom" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    سباكة المطابخ والحمامات
                  </h3>
                  <p className="text-gray-600">
                    تركيب وصيانة شاملة لسباكة المطابخ والحمامات
                  </p>
                </div>
              </Link>

              <Link to="/services/heater-installation" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Thermometer className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    تركيب سخانات
                  </h3>
                  <p className="text-gray-600">
                    تركيب وصيانة السخانات المركزية والفورية
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
                هل تحتاج تركيب خلاطات جديدة؟
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                احصل على استشارة مجانية واختر الخلاطات المناسبة مع تركيب احترافي مضمون
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

export default FaucetInstallationPage;