"use client";

import { motion } from "framer-motion";

interface PhotoCardProps {
  src: string;
  alt: string;
  category?: string;
  onClick?: () => void;
}

const PhotoCard = ({ src, alt, category, onClick }: PhotoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="
        relative overflow-hidden rounded-2xl cursor-pointer
        h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96
        w-full
      "
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
      />

      {category && (
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
          <span className="text-white text-lg font-medium">{category}</span>
        </div>
      )}
    </motion.div>
  );
};

export default PhotoCard;
