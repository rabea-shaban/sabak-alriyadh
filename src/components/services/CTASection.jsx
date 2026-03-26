import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MessageCircle } from 'lucide-react';

const CTASection = ({ title, description, ctas }) => {
    const { toast } = useToast();
    const handleContactClick = () => {
        toast({
          title: "🚧 هذه الميزة غير مفعلة حاليًا",
          description: "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
          duration: 3000,
        });
      };

  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleContactClick} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg">
              <Phone className="ml-2 h-5 w-5" />
              {ctas.primary}
            </Button>
            <Button onClick={handleContactClick} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              <MessageCircle className="ml-2 h-5 w-5" />
              {ctas.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;