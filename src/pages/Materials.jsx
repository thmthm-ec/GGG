import React from 'react';
import { motion } from 'framer-motion';
import { materials } from '../data/materials';

export default function Materials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">Matières</h1>
        <p className="mt-4 text-gray-500">
          Découvrez notre sélection de matériaux haut de gamme
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Material+Image';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{material.name}</h3>
              <p className="mt-2 text-gray-500">{material.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">Finitions disponibles:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {material.finishes.map((finish) => (
                    <span
                      key={finish}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Prix: {material.pricePerMeter} DZD/mètre
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}