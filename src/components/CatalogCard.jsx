import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CatalogCard({ collection }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <style>{`
        .custom-dots {
          position: absolute;
          bottom: 10px;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          line-height: 1;
        }
        .custom-dots li {
          display: inline-block;
          margin: 0 4px;
        }
        .custom-dots li button {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          text-indent: -9999px;
          cursor: pointer;
        }
        .custom-dots li.slick-active button {
          background: white;
        }
      `}</style>
      <div className="relative">
        <Slider {...settings}>
          {collection.images.map((image, index) => (
            <div key={index} className="relative h-64">
              <img
                src={image}
                alt={`${collection.name} - Vue ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-900 mb-2">{collection.name}</h3>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-primary-600 mb-2">Matériaux:</h4>
          <div className="flex flex-wrap gap-2">
            {collection.materials.map((material) => (
              <span
                key={material}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-primary-600 mb-2">Finitions:</h4>
          <div className="flex flex-wrap gap-2">
            {collection.finishes.map((finish) => (
              <span
                key={finish}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
              >
                {finish}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-primary-100">
          <p className="text-sm text-primary-600">
            Prix indicatif: <span className="font-semibold">{collection.priceRange} DZD/mètre</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}