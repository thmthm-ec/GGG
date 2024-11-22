import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { materials } from '../data/materials';

export default function Quote() {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
  });
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [quote, setQuote] = useState(null);

  const calculateQuote = () => {
    const material = materials.find(m => m.id === selectedMaterial);
    if (!material) return;

    const { length, width, height } = dimensions;
    const totalLength = parseFloat(length) + parseFloat(width) * 2; // Linear meters of cabinets
    const totalArea = totalLength * parseFloat(height); // Total surface area
    const basePrice = material.pricePerMeter * totalLength;
    
    // Additional costs calculation
    const hardwareCost = totalLength * 5000; // Estimate for handles, hinges, etc.
    const installationCost = totalLength * 8000;
    
    const total = basePrice + hardwareCost + installationCost;

    setQuote({
      materialCost: basePrice,
      hardwareCost,
      installationCost,
      total,
      dimensions: {
        totalLength,
        totalArea,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">Devis</h1>
        <p className="mt-4 text-gray-500">
          Calculez le coût estimatif de votre cuisine équipée
        </p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Longueur (mètres)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={dimensions.length}
              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Largeur (mètres)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hauteur (mètres)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Matériau
            </label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Sélectionnez un matériau</option>
              {materials.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={calculateQuote}
            disabled={!dimensions.length || !dimensions.width || !dimensions.height || !selectedMaterial}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            Calculer le devis
          </button>
        </div>

        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border-t pt-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Devis Estimatif</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Longueur totale des meubles:</span>
                <span>{quote.dimensions.totalLength.toFixed(2)} mètres</span>
              </div>
              <div className="flex justify-between">
                <span>Surface totale:</span>
                <span>{quote.dimensions.totalArea.toFixed(2)} m²</span>
              </div>
              <div className="flex justify-between">
                <span>Coût des matériaux:</span>
                <span>{quote.materialCost.toFixed(2)} DZD</span>
              </div>
              <div className="flex justify-between">
                <span>Quincaillerie:</span>
                <span>{quote.hardwareCost.toFixed(2)} DZD</span>
              </div>
              <div className="flex justify-between">
                <span>Installation:</span>
                <span>{quote.installationCost.toFixed(2)} DZD</span>
              </div>
              <div className="flex justify-between font-bold pt-3 border-t">
                <span>Total:</span>
                <span>{quote.total.toFixed(2)} DZD</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}