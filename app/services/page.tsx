"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  const packages = [
    {
      name: "Mini",
      price: "$299",
      duration: "1 Hour",
      description: "Perfect for quick portrait sessions or small events",
      features: [
        "1 hour photography session",
        "1 location",
        "25 edited high-resolution photos",
        "Online gallery",
        "Personal usage rights",
      ],
      bgColor: "bg-green-200",
      textColor: "text-green-900",
    },
    {
      name: "Standard",
      price: "$599",
      duration: "2-3 Hours",
      description: "Our most popular package for events and celebrations",
      features: [
        "2-3 hour photography session",
        "2 locations",
        "75 edited high-resolution photos",
        "Online gallery with download",
        "Print release",
        "1 framed 8x10 print",
      ],
      bgColor: "bg-pink-200",
      textColor: "text-purple-900",
      popular: true,
      borderColor: "ring-4 ring-blue-900",
    },
    {
      name: "Premium",
      price: "$1,299",
      duration: "Full Day",
      description: "Complete coverage for weddings and major events",
      features: [
        "Full day coverage (up to 8 hours)",
        "Unlimited locations",
        "200+ edited high-resolution photos",
        "Premium online gallery",
        "Full commercial usage rights",
        "Custom photo album",
        "Engagement session included",
        "Second photographer available",
      ],
      bgColor: "bg-cyan-200",
      textColor: "text-cyan-900",
    },
  ];

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
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
              Our Services & Pricing
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl p-8 shadow-lg ${pkg.bgColor} ${
                  pkg.popular ? pkg.borderColor : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className={`font-display text-3xl font-bold ${pkg.textColor} mb-2`}
                  >
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold ${pkg.textColor} mb-1`}>
                    {pkg.price}
                  </div>
                  <div className={pkg.textColor}>{pkg.duration}</div>
                  <p className={`mt-4 ${pkg.textColor} opacity-80`}>
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`shrink-0 ${pkg.textColor} mt-0.5`}
                        size={20}
                      />
                      <span className={pkg.textColor}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="
                w-full bg-black text-white py-3 px-6 rounded-2xl cursor-pointer
                text-base sm:text-lg md:text-xl lg:text-2xl
                hover:scale-[1.03]
                transition-all duration-300
              "
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    Book Session <ArrowRight className="ml-2 mt-1" />
                  </Link>
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-[rgb(251,241,248)] rounded-3xl p-8 max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-primary mb-4">
                Custom Packages Available
              </h2>
              <p className="text-foreground/70 mb-6">
                Need something different? We offer custom packages tailored to
                your specific needs. Contact us to discuss your requirements and
                get a personalized quote.
              </p>
              <button
                className="
               border-2 text-primary hover:bg-gray-200 p-3 rounded-2xl
               
              "
              >
                <Link href="/contact" className="flex items-center">
                  Book Session
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
