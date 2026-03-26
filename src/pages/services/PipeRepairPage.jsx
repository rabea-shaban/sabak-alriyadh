import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  AlertTriangle,
  Droplets,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PipeRepairPage = () => {
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
      title: 'إصلاح جميع الأنواع',
      description: 'نتعامل مع جميع أنواع المواسير: PVC، النحاس، الحديد، والبولي إيثيلين'
    },
    {
      icon: Clock,
      title: 'خدمة سريعة',
      description: 'نصل إليكم خلال 30 دقيقة ونبدأ الإصلاح فوراً'
    },
    {
      icon: Shield,
      title: 'ضمان طويل المدى',
      description: 'نقدم ضمان على جميع أعمال الإصلاح لمدة سنتين'
    },
    {
      icon: Wrench,
      title: 'أدوات متطورة',
      description: 'نستخدم أحدث الأدوات والمعدات لضمان جودة الإصلاح'
    }
  ];

  const pipeTypes = [
    {
      name: 'مواسير PVC',
      description: 'الأكثر شيوعاً في المنازل الحديثة، سهلة الإصلاح والاستبدال'
    },
    {
      name: 'مواسير النحاس',
      description: 'مقاومة للتآكل وطويلة العمر، تحتاج خبرة خاصة في الإصلاح'
    },
    {
      name: 'مواسير الحديد',
      description: 'شائعة في المباني القديمة، قد تحتاج استبدال كامل'
    },
    {
      name: 'مواسير البولي إيثيلين',
      description: 'مرنة ومقاومة للصدأ، مناسبة للمياه الباردة والساخنة'
    }
  ];

  const commonProblems = [
    'تسرب في الوصلات والمفاصل',
    'انفجار الأنابيب بسبب الضغط',
    'تآكل المواسير القديمة',
    'انسداد جزئي أو كامل',
    'تلف بسبب الحفر أو البناء',
    'تجمد المياه في الشتاء'
  ];

  const repairProcess = [
    {
      step: '1',
      title: 'تشخيص المشكلة',
      description: 'فحص شامل لتحديد نوع التلف ومدى انتشاره'
    },
    {
      step: '2',
      title: 'إيقاف المياه',
      description: 'قطع المياه عن المنطقة المتضررة لمنع المزيد من الأضرار'
    },
    {
      step: '3',
      title: 'الإصلاح أو الاستبدال',
      description: 'تنفيذ الإصلاح المناسب أو استبدال الجزء التالف'
    },
    {
      step: '4',
      title: 'الاختبار والضمان',
      description: 'اختبار النظام والتأكد من عدم وجود تسربات مع تقديم الضمان'
    }
  ];

  return (
    <>
      <Helmet>
        <title>إصلاح المواسير بالرياض - خدمة سباكة احترافية | سباكة الرياض</title>
        <meta name="description" content="خدمة إصلاح المواسير بالرياض لجميع الأنواع: PVC، النحاس، الحديد. إصلاح سريع ومضمون مع ضمان سنتين. اتصل الآن: +966 50 123 4567" />
        <meta name="keywords" content="إصلاح مواسير الرياض, سباك مواسير, إصلاح أنابيب المياه, تركيب مواسير جديدة, صيانة مواسير" />
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
                  <Wrench className="h-12 w-12 text-yellow-300" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    إصلاح المواسير
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  خدمة متخصصة في إصلاح وتركيب جميع أنواع المواسير والأنابيب. نتعامل مع جميع 
                  أنواع التلف والأعطال بأحدث التقنيات وأفضل المواد مع ضمان طويل المدى.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    اطلب إصلاح فوري
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
                  alt="فني سباكة يقوم بإصلاح المواسير باستخدام أدوات متطورة"
                 src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89" />
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
                مميزات خدمة إصلاح المواسير
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة شاملة لإصلاح جميع أنواع المواسير بأعلى معايير الجودة والاحترافية
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

        {/* Article Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خدمة إصلاح المواسير الاحترافية في الرياض
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    تعتبر المواسير والأنابيب العمود الفقري لنظام السباكة في أي منزل أو مبنى. عندما تتعرض هذه 
                    المواسير للتلف أو الأعطال، فإن ذلك يمكن أن يسبب مشاكل كبيرة تؤثر على الحياة اليومية وقد 
                    تؤدي إلى أضرار مالية جسيمة إذا لم يتم التعامل معها بسرعة واحترافية.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في شركة سباكة الرياض، نقدم خدمة متخصصة في إصلاح جميع أنواع المواسير والأنابيب. فريقنا 
                    المتخصص يتمتع بخبرة واسعة في التعامل مع جميع أنواع المواد والأحجام، ونستخدم أحدث التقنيات 
                    والأدوات لضمان إصلاح دائم وموثوق.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    أنواع المواسير التي نتعامل معها
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نحن متخصصون في إصلاح جميع أنواع المواسير المستخدمة في المنازل والمباني:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pipeTypes.map((type, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    المشاكل الشائعة في المواسير
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    هناك عدة مشاكل شائعة قد تواجه المواسير في المنازل والمباني:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {commonProblems.map((problem, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    طريقة عملنا في إصلاح المواسير
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نتبع منهجية علمية ومدروسة في إصلاح المواسير لضمان الحصول على أفضل النتائج:
                  </p>
                  <div className="space-y-6">
                    {repairProcess.map((step,index) => (
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
                    لماذا تختار شركة سباكة الرياض لإصلاح المواسير؟
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نحن الخيار الأول لإصلاح المواسير في الرياض للأسباب التالية:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خبرة أكثر من 10 سنوات في إصلاح جميع أنواع المواسير</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">استخدام أفضل المواد والقطع الأصلية</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">فريق فنيين متخصصين ومدربين</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">خدمة سريعة ومضمونة على مدار الساعة</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">ضمان سنتين على جميع أعمال الإصلاح</span>
                    </li>
                    <li className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">أسعار شفافة ومنافسة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    خدمة طوارئ لإصلاح المواسير
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    نتفهم أن مشاكل المواسير قد تحدث في أي وقت، لذلك نقدم خدمة طوارئ على مدار الساعة. 
                    فريقنا جاهز للوصول إليكم خلال 30 دقيقة في جميع أنحاء الرياض لحل أي مشكلة عاجلة.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
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
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    كشف تسربات المياه
                  </h3>
                  <p className="text-gray-600">
                    كشف دقيق للتسربات بأحدث الأجهزة بدون تكسير
                  </p>
                </div>
              </Link>

              <Link to="/services/heater-installation" className="group">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Settings className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    تركيب سخانات
                  </h3>
                  <p className="text-gray-600">
                    تركيب وصيانة السخانات المركزية والفورية
                  </p>
                </div>
              </Link>

              <Link to="/services/maintenance" className="group">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
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
                هل تحتاج إصلاح مواسير عاجل؟
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                لا تدع مشكلة المواسير تتفاقم. اتصل بنا الآن للحصول على إصلاح سريع ومضمون
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

export default PipeRepairPage;