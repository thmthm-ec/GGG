import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] bg-primary-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern Kitchen"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6">
              Créez la cuisine de vos rêves
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Design personnalisé, matériaux d'exception, savoir-faire artisanal
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="bg-accent-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-accent-600 transition-colors"
              >
                Obtenir un devis
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/20 transition-colors"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-display mb-4">
              Pourquoi choisir CuisinArt Studio ?
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Notre expertise et notre passion au service de votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-accent-500 mb-6" />
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Design Sur Mesure",
    description: "Chaque cuisine est unique, conçue selon vos besoins et votre espace.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Matériaux Premium",
    description: "Une sélection rigoureuse des meilleurs matériaux pour une durabilité exceptionnelle.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Installation Experte",
    description: "Une équipe de professionnels qualifiés pour une finition impeccable.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];