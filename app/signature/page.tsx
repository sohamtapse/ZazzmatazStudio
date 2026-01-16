"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PhotoCard from "@/components/PhotoCard";
import Lightbox from "@/components/Lightbox";
const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? signatureImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === signatureImages.length - 1 ? 0 : prev + 1
    );
  };
  const signatureImages = [
    {
      src: "/hero-photographer.jpg",
      alt: "Golden hour wedding portrait",
      category: "Signature Wedding",
    },
    {
      src: "/hero-photographer.jpg",
      alt: "Editorial fashion masterpiece",
      category: "Signature Fashion",
    },
    {
      src: "/hero-photographer.jpg",
      alt: "Timeless family portrait",
      category: "Signature Portrait",
    },
    {
      src: "/hero-photographer.jpg",
      alt: "Luxury event venue",
      category: "Signature Event",
    },
    {
      src: "/hero-photographer.jpg",
      alt: "Romantic wedding ceremony",
      category: "Signature Wedding",
    },
    {
      src: "/hero-photographer.jpg",
      alt: "Professional executive portrait",
      category: "Signature Portrait",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  return (
    <>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
              Signature Collection
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our most premium curated works - timeless photography that tells
              unforgettable stories
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-[linear-gradient(135deg,hsl(150_62%_85%)_0%,hsl(280_100%_93%)_50%,hsl(35_100%_98%)_100%)] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">
                Premium Artistry & Craftsmanship
              </h2>
              <p className="text-xl mb-4">
                The Signature Collection represents the pinnacle of our
                photographic artistry. Each image in this exclusive collection
                has been meticulously crafted, edited, and curated to showcase
                the extraordinary moments that define life's most precious
                memories.
              </p>
              <p className="text-xl ">
                These aren't just photographs — they're heirloom-quality works
                of art that capture emotion, beauty, and timeless elegance in
                every frame.
              </p>
            </div>
          </motion.div>

          {/* Gallery (flex-based) with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {signatureImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full "
              >
                <PhotoCard
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                  onClick={() => openLightbox(index)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Sketch to Reality Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-[rgb(0,20,41)] text-primary-foreground rounded-3xl p-8 md:p-12 text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                From Sketch to Reality
              </h2>
              <p className="text-lg text-center mb-8 text-primary-foreground/90">
                Every masterpiece begins with a vision. Our Signature Collection
                evolved from carefully hand-drawn sketches and meticulous
                planning, transforming initial concepts into the stunning visual
                narratives you see today.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[rgb(26,43,61)] rounded-2xl p-6">
                  <h3 className="font-semibold text-2xl mb-3 ">
                    The Planning Phase
                  </h3>
                  <p className="text-lg">
                    From notebook sketches to mood boards, we carefully plan
                    every aspect of the shoot — lighting, composition, poses,
                    and emotional tone.
                  </p>
                </div>
                <div className=" bg-[rgb(26,43,61)] rounded-2xl p-6">
                  <h3 className="font-semibold text-2xl mb-3">The Execution</h3>
                  <p className=" text-lg">
                    Those hand-drawn ideas transform into breathtaking reality
                    through expert technique, artistic vision, and collaboration
                    with our clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={signatureImages}
          currentIndex={currentImageIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </>
  );
};

export default page;
