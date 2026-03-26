import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Phone, MessageCircle } from 'lucide-react';

const ServiceHero = ({ icon: Icon, title, description, image, heroCtas }) => {
  const handleContactClick = () => {
    toast({
      title: "🚧 هذه الميزة غير مفعلة حاليًا",
      description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  return (
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
              <Icon className="h-12 w-12 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleContactClick} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg">
                <Phone className="ml-2 h-5 w-5" />
                {heroCtas.primary}
              </Button>
              <Button onClick={handleContactClick} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                <MessageCircle className="ml-2 h-5 w-5" />
                {heroCtas.secondary}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img  className="rounded-lg shadow-2xl w-full h-96 object-cover" alt={image.alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;