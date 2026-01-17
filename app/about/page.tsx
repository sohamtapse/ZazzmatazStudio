"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Camera, Heart, Users } from "lucide-react";

const page = () => {
  const stats = [
    { icon: Camera, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Heart, label: "Five Star Reviews", value: "200+" },
  ];
  return (
    <>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="  text-5xl md:text-6xl font-bold    mb-4">
              Our Story
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Passion, creativity, and dedication to capturing life's precious
              moments
            </p>
          </motion.div>
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="/hero-photographer.jpg"
                  alt="Professional photographer"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-foreground px-8 py-6 rounded-2xl shadow-medium">
                <div className="text-center px-4 py-2">
                  <div className="  text-4xl  font-bold">10+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="  text-4xl font-bold   ">
                Hello, I'm Sarah Mitchell
              </h2>
              <div className="space-y-4    text-lg">
                <p>
                  For over a decade, I've had the incredible privilege of
                  capturing life's most beautiful moments through my lens. What
                  started as a childhood fascination with my father's camera has
                  blossomed into a lifelong passion and successful photography
                  business.
                </p>
                <p>
                  My approach to photography is deeply personal and artistic. I
                  believe that every client has a unique story to tell, and my
                  role is to help tell that story through stunning, emotive
                  imagery that you'll treasure for generations.
                </p>
                <p>
                  Whether it's the joy of a wedding day, the tenderness of
                  family portraits, the confidence of fashion photography, or
                  the energy of special events, I pour my heart into every shoot
                  to create images that truly resonate.
                </p>
                <p>
                  Based in the heart of the city, I've had the honor of working
                  with amazing clients from all walks of life, and each one has
                  taught me something new about the art of photography and the
                  beauty of human connection.
                </p>
              </div>
            </motion.div>
          </div>
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" bg-[linear-gradient(135deg,hsl(150_62%_85%)_0%,hsl(280_100%_93%)_50%,hsl(35_100%_98%)_100%)] rounded-3xl p-12"
          >
            <h2 className="  text-3xl md:text-4xl font-bold    text-center mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="  -foreground" size={32} />
                  </div>
                  <div className="  text-4xl font-bold    mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto text-center"
          >
            <h2 className="   text-3xl md:text-4xl font-bold    mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl    leading-relaxed">
              "Photography is more than just clicking a button. It's about
              connection, emotion, and storytelling. It's about freezing time
              and preserving memories that will bring joy for years to come.
              Every session is an opportunity to create something truly special,
              and I approach each one with fresh eyes, an open heart, and a
              commitment to excellence."
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
