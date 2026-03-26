import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+966560877272';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966560877272', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: '+966 56 087 7272',
      description: 'متاحون على مدار الساعة',
      action: handleCallClick
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      details: '+966 56 087 7272',
      description: 'تواصل سريع ومباشر',
      action: handleWhatsAppClick
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'info@riyadhplumbing.com',
      description: 'نرد خلال ساعة واحدة',
      action: () => window.location.href = 'mailto:info@riyadhplumbing.com'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      details: 'الرياض، المملكة العربية السعودية',
      description: 'نغطي جميع أحياء الرياض',
      action: () => {}
    }
  ];

  const services = [
    'كشف تسربات المياه',
    'إصلاح المواسير',
    'تركيب سخانات',
    'تنظيف المجاري',
    'تركيب خلاطات',
    'سباكة المطابخ والحمامات',
    'صيانة دورية',
    'خدمة أخرى'
  ];

  return (
    <>
      <Helmet>
        <title>اتصل بنا - سباكة الرياض | خدمة عملاء 24/7 على الرقم +966560877272</title>
        <meta name="description" content="تواصل مع شركة سباكة الرياض الآن. خدمة عملاء 24/7، رقم الهاتف: +966560877272. املأ النموذج أو اتصل مباشرة لحل مشاكل السباكة بسرعة." />
        <meta name="keywords" content="اتصل بنا, رقم سباك الرياض, تواصل مع شركة سباكة, سباكة طوارئ, +966560877272" />
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
                اتصل بنا
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا الآن للحصول على أفضل خدمات السباكة في الرياض
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={info.action}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1" dir="ltr">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  أرسل لنا رسالة
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="05xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نوع الخدمة المطلوبة
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تفاصيل المشكلة أو الطلب
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="اشرح لنا تفاصيل المشكلة أو الخدمة المطلوبة..."
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary text-white py-3">
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </Button>
                </form>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    خدمة طوارئ 24/7
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    نحن متاحون على مدار الساعة لحالات الطوارئ. لا تترددوا في الاتصال بنا 
                    في أي وقت عند حدوث مشاكل سباكة عاجلة.
                  </p>
                  <Button onClick={handleCallClick} className="w-full btn-primary text-white py-3 text-lg">
                    <Phone className="ml-2 h-5 w-5" />
                    اتصال طوارئ: +966 56 087 7272
                  </Button>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    مناطق الخدمة
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    نغطي جميع أحياء الرياض بما في ذلك:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• حي النرجس</div>
                    <div>• حي الملقا</div>
                    <div>• حي الياسمين</div>
                    <div>• حي الورود</div>
                    <div>• حي الملز</div>
                    <div>• حي العليا</div>
                    <div>• حي الصحافة</div>
                    <div>• وجميع الأحياء الأخرى</div>
                  </div>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">
                    معاينة مجانية
                  </h3>
                  <p className="mb-6 leading-relaxed">
                    نقدم معاينة مجانية لجميع المشاريع الكبيرة. فريقنا سيزور موقعكم 
                    ويقدم تقييم مفصل وعرض سعر شامل.
                  </p>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 ml-2" />
                    <span>نصل إليكم خلال 30 دقيقة</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
