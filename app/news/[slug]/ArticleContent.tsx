'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function ArticleContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {children}
    </motion.article>
  );
}
