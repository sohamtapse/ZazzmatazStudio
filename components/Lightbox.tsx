import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
}: LightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            className="
bg-black text-white py-3 px-6 rounded-2xl cursor-pointer
text-base sm:text-lg md:text-xl lg:text-2xl
hover:scale-[1.03]
transition-all duration-300
absolute top-4 right-4
            "
            onClick={onClose}
          >
            <X size={24} />
          </button>

          <button
            className="
bg-black text-white py-3 px-6 rounded-2xl cursor-pointer
text-base sm:text-lg md:text-xl lg:text-2xl
hover:scale-[1.03]
transition-all duration-300
absolute left-4
            "
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-7xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>

          <button
            className="
bg-black text-white py-3 px-6 rounded-2xl cursor-pointer
text-base sm:text-lg md:text-xl lg:text-2xl
hover:scale-[1.03]
transition-all duration-300
absolute right-4
            "
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
