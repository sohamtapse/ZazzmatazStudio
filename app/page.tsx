"use client";
import React from "react";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroPhotographer from "@/public/hero-photographer.jpg";
import AutoCarousel from "@/components/AutoCarousel";
import PhotoCard from "@/components/PhotoCard";

const page = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center bg-[linear-gradient(135deg,hsl(150_62%_85%)_0%,hsl(280_100%_93%)_50%,hsl(35_100%_98%)_100%)]">
          <div className="container mx-auto px-4 py-20 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT TEXT CONTENT */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.h1
                  variants={fadeUpVariants}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight"
                >
                  Capture What You Love — Beautifully.
                </motion.h1>

                <motion.p
                  variants={fadeUpVariants}
                  className="text-lg sm:text-xl md:text-2xl max-w-xl text-black/80"
                >
                  Professional photography services that transform your precious
                  moments into timeless memories. Weddings, portraits, fashion,
                  and events.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    className="
                bg-black text-white py-3 px-6 rounded-2xl cursor-pointer
                text-base sm:text-lg md:text-xl lg:text-2xl
                hover:scale-[1.03]
                transition-all duration-300
              "
                  >
                    <Link href="/contact" className="flex items-center">
                      Book Session <ArrowRight className="ml-2 mt-1" />
                    </Link>
                  </button>

                  <button
                    className="
                text-black border-2 border-black py-3 px-6 rounded-2xl cursor-pointer
                text-base sm:text-lg md:text-xl lg:text-2xl
                hover:scale-[1.03]
                transition-all duration-300
              "
                  >
                    <Link href="/services">View Portfolio</Link>
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT IMAGE / CAROUSEL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <AutoCarousel />
                </div>

                <div
                  className="
            absolute -bottom-6 -right-3 md:-right-6
            bg-green-200 px-6 py-4 rounded-2xl shadow-2xl
          "
                >
                  <div className="flex items-center gap-2">
                    <Star size={20} />
                    <span className="font-semibold">500+ Happy Clients</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 bg-background">
        <div className=" mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our portfolio of stunning photography across different
              styles
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeUpVariants}>
              <PhotoCard
                src={"/hero-photographer.jpg"}
                alt="Wedding photography"
                category="Wedding"
              />
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <PhotoCard
                src={"/hero-photographer.jpg"}
                alt="Fashion photography"
                category="Fashion"
              />
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <PhotoCard
                src={"/hero-photographer.jpg"}
                alt="Portrait photography"
                category="Portrait"
              />
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <PhotoCard
                src={"/hero-photographer.jpg"}
                alt="Event photography"
                category="Events"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              className=" text-black border-2 border-black py-3 px-6 rounded-2xl cursor-pointer
                text-base sm:text-lg md:text-xl lg:text-2xl
                hover:scale-[1.03]
                transition-all duration-300"
            >
              <Link href="/services">View Full Gallery</Link>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[linear-gradient(135deg,hsl(150_62%_85%)_0%,hsl(280_100%_93%)_50%,hsl(35_100%_98%)_100%)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Why Choose Capture Studio?
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[hsl(35_100%_98%)] rounded-full flex items-center justify-center">
                    <Camera className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Professional Excellence
                    </h3>
                    <p className="text-foreground/70">
                      Award-winning photographers with 10+ years of experience
                      capturing life's most precious moments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[hsl(35_100%_98%)] rounded-full flex items-center justify-center">
                    <Heart className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Personalized Approach
                    </h3>
                    <p className="text-foreground/70">
                      We take time to understand your vision and create a
                      customized photography experience just for you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[hsl(35_100%_98%)] rounded-full flex items-center justify-center">
                    <Star className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Stunning Results
                    </h3>
                    <p className="text-black/70">
                      Every photo is carefully edited to perfection, delivering
                      gallery-quality images you'll treasure forever.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src={"/hero-photographer.jpg"}
                  alt="Portrait"
                  className="rounded-2xl shadow-medium w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80 object-cover"
                />
                <img
                  src={"/hero-photographer.jpg"}
                  alt="Fashion"
                  className="rounded-2xl shadow-medium w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[350px] object-cover"
                />
              </div>

              <div className="space-y-4 pt-6 md:pt-8">
                <img
                  src={"/hero-photographer.jpg"}
                  alt="Wedding"
                  className="rounded-2xl shadow-medium w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[350px] object-cover"
                />
                <img
                  src={"/hero-photographer.jpg"}
                  alt="Event"
                  className="rounded-2xl shadow-medium w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001429] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready to Create Magic Together?
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Let's capture your story in a way that's uniquely yours. Book your
              session today and experience the Capture Studio difference.
            </p>

            <button
              className="
        text-white border-white border-2 rounded-2xl cursor-pointer
        py-3 px-6
        text-base sm:text-lg md:text-xl lg:text-2xl
        hover:scale-[1.03]
        transition-all duration-300
      "
            >
              <Link href="/services">View Portfolio</Link>
            </button>
          </motion.div>
        </div>
      </section>
      {/* this is commit */}
      {/* this is commit */}
    </>
  );
};

export default page;
