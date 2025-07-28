"use client";
import Image from "next/image";
import "./Hero.css";
import { motion } from "motion/react";
import {
  heroAnimation,
  heroAnimationDelay1,
  heroAnimationDelay2,
} from "data/motion";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={heroAnimation}
          className="hero-image-container"
        >
          <div className="tape tape-top-left"></div>
          <div className="tape tape-top-right"></div>
          <div className="tape tape-bottom-left"></div>
          <div className="tape tape-bottom-right"></div>
          <div className="image-overlay"></div>

          <Image
            className="hero-image"
            src="/assets/images/mina.webp"
            alt="Teemu"
            title="That's me"
            sizes="(max-width: 768px) 80vw, 500px"
            priority
            fill
          />
        </motion.div>
        <div className="hero-titles">
          <motion.h1
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            variants={heroAnimationDelay1}
            className="hero-title"
          >
            I am Teemu.
          </motion.h1>
          <motion.h4
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            variants={heroAnimationDelay2}
            className="hero-subtitle"
          >
            {" "}
            Your favorite Full Stack Developer who builds the kind of tools I
            actually want to use. I learn by doing, and staying curious along
            the way.
          </motion.h4>
        </div>
      </div>
    </section>
  );
};
