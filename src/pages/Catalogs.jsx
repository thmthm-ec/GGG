import { useState } from 'react';
import { motion } from 'framer-motion';
import { collections } from '../data/catalogs';
import CatalogCard from '../components/CatalogCard';

export default function Catalogs() {
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="heading-2 text-primary-900 mb-4">Collections</h1>
        <p className="body-large text-primary-600 max-w-2xl mx-auto">
          Découvrez nos collections exclusives de cuisines
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {collections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => setSelectedCollection(collection)}
            className={`px-6 py-2.5 rounded-full transition-colors duration-200 ${
              selectedCollection.id === collection.id
                ? 'bg-accent-500 text-white'
                : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
            }`}
          >
            {collection.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedCollection.ranges.map((range) => (
          <CatalogCard key={range.id} collection={range} />
        ))}
      </div>
    </div>
  );
}