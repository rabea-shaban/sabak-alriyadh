import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Droplets, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Settings,
  Wrench,
  Thermometer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const KitchenBathroomPage = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Home,
      title: 'تصميم وتنفيذ شامل',
      description: 'تصميم وتنفيذ سباكة المطابخ والحمامات من الألف إلى الياء'
    },
    {
      icon: Droplets,
      title: 'أحدث التقنيات',
      description: 'استخدام أحدث تقنيات السباكة والمواد عالية الجودة'
    },
    {
      icon: Shield,
      title: 'ضمان شامل',
      description: 'ضمان على جميع الأعمال والمواد لمدة 3 سنوات'
    },
    {
      icon: Clock,
      title: 'تنفيذ سريع',
      description: 'إنجاز المشاريع في الوقت المحدد مع أعلى معايير الجودة'
    }
  ];

  const kitchenServices = [
    'تركيب مواسير المياه الباردة والساخنة',
    'تركيب خلاطات المطبخ المتطورة',
    'توصيل غسالة الأطباق',
    'تركيب فلاتر المياه',
    'تركيب مصارف المطبخ',
    'تركيب خط الغاز للطباخ'
  ];

  const bathroomServices = [
    'تركيب مواسير المياه والصرف',
    'تركيب خلاطات الحمام والدش',
    'تركيب المراحيض والبيديه',
    'تركيب أحواض الغسيل',
    'تركيب كابينة الدش',
    'تركيب سخانات المياه'
  ];

  const projectSteps = [
    {
      step: '1',
      title: 'التصميم والتخطيط',
      description: 'وضع تصميم مفصل للسباكة حسب احتياجاتكم ومساحة المكان'
    },
    {
      step: '2',
      title: 'اختيار المواد',
      description: 'اختيار أفضل المواد والتجهيزات حسب الميزانية والتفضيلات'
    },
    {
      step: '3',
      title: 'التنفيذ والتركيب',
      description: 'تنفيذ المشروع بدقة واحترافية مع مراقبة الجودة'
    },
    {
      step: '4',
      title: 'الاختبار والتسليم',
      description: 'اختبار شامل لجميع التوصيلات وتسليم المشروع مع الضمان'
    }
  ];

  const designTips = [
    {
      title: 'المطبخ العملي',
      tips: ['موقع مناسب للحوض', 'سهولة الوصول للخلاطات', 'مساحة كافية للتنظيف', 'تصريف جيد للمياه']
    },
    {
      title: 'الحمام المريح',
      tips: ['توزيع مناسب للتجهيزات', 'إضاءة جيدة', 'تهوية مناسبة', 'سهولة الصيانة']
    }
  ];

  return (
    <>
      <Helmet>
        <title>سباكة المطابخ والحمامات بالرياض - تصميم وتنفيذ شامل | سباكة الرياض</title>
        <meta name="description" content="خدمة سباكة المطابخ والحمامات بالرياض. تصميم وتنفيذ شامل بأحدث التقنيات مع ضمان 3 سنوات. اتصل الآن: +966 50 123 4567" />
        <meta name="keywords" content="سباكة مطبخ الرياض, سباكة حمام, تركيب مطبخ, تجديد حمام, سباك مطابخ وحمامات" />
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
                  <Home className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    سباكة المطابخ والحمامات
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  خدمة شاملة لتصميم وتنفيذ سباكة المطابخ والحمامات. نحول أحلامكم إلى واقع 
                  بأحدث التقنيات وأفضل المواد مع ضمان طويل المدى.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    احجز استشارة مجانية
                  </Button>
                  <Button 
                    onClick={handleContactClick}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
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
                className="relative"
              >
                <img  
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  alt="مطبخ وحمام حديث مع سباكة احترافية"
                 src="https://images.unsplash.com/photo-1586753701871-07e025659129" />
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
                مميزات خدمة سباكة المطابخ والحمامات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة شاملة ومتكاملة لجميع احتياجات السباكة في المطابخ والحمامات
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا المتخصصة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نغطي جميع احتياجات السباكة في المطابخ والحمامات بأعلى معايير الجودة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Kitchen Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center ml-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">خدمات سباكة المطابخ</h3>
                </div>
                <div className="space-y-3">
                  {kitchenServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bathroom Services */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center ml-4">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">خدمات سباكة الحمامات</h3>
                </div>
                <div className="space-y-3">
                  {bathroomServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                    خدمة سباكة المطابخ والحمامات الشاملة في الرياض
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    المطبخ والحمام من أهم الأماكن في أي منزل، حيث يتم استخدامهما بشكل يومي ومكثف. 
                    لذلك تحتاج سباكة هذين المكانين إلى تخطيط دقيق وتنفيذ احترافي لضمان الراحة والوظائف 
                    المثلى. سباكة المطابخ والحمامات ليست مجرد توصيل أنابيب، بل هي فن يجمع بين الوظيفة 
                    والجمال والكفاءة.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نقدم خدمة شاملة لتصميم وتنفيذ سباكة المطابخ والحمامات. 
                    فريقنا المتخصص يعمل معكم من مرحلة التصميم حتى التسليم النهائي، مع مراعاة احتياجاتكم 
                    الخاصة وميزانيتكم وتفضيلاتكم في التصميم.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خطوات تنفيذ المشروع
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية ومدروسة في تنفيذ مشاريع سباكة المطابخ والحمامات:
                  </p>
                  <div className="space-y-6">
                    {projectSteps.map((step, index) => (
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
                    نصائح التصميم الذكي
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    التصميم الذكي للسباكة يوفر الراحة والكفاءة في الاستخدام:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {designTips.map((tip, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{tip.title}</h3>
                        <div className="space-y-2">
                          {tip.tips.map((item, i) => (
                            <div key={i} className="flex items-center space-x-2 space-x-reverse">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-600 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    المواد والتجهيزات المستخدمة
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نستخدم أفضل المواد والتجهيزات لضمان الجودة والمتانة:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">مواسير عالية الجودة مقاومة للتآكل</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خلاطات من ماركات عالمية موثوقة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">عوازل مائية متطورة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تجهيزات صحية عالية الجودة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أنظمة تصريف متطورة</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    الاتجاهات الحديثة في سباكة المطابخ والحمامات
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نواكب أحدث الاتجاهات في عالم السباكة والتصميم:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خلاطات ذكية مع تحكم إلكتروني</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أنظمة توفير المياه والطاقة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">تصاميم مينيماليست وعصرية</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أنظمة فلترة متطورة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    مشروع متكامل مع ضمان شامل
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    نقدم مشروع متكامل من التصميم إلى التسليم مع ضمان شامل لمدة 3 سنوات على جميع 
                    الأعمال والمواد. فريقنا يتابع معكم حتى بعد التسليم لضمان رضاكم التام.
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
              <Link to="/services/faucet-installation" className="group">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Settings className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    تركيب خلاطات
                  </h3>
                  <p className="text-gray-600">
                    تركيب جميع أنواع خلاطات المياه للمطابخ والحمامات
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
                هل تخططون لتجديد المطبخ أو الحمام؟
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                احصلوا على استشارة مجانية وتصميم مخصص لمشروعكم مع تنفيذ احترافي مضمون
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

export default KitchenBathroomPage;