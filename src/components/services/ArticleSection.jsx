import React from 'react';
import { motion } from 'framer-motion';

const ArticleSection = ({ children }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
            {children}
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ArticleSection;