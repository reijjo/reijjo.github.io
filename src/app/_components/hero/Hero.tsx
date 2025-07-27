"use client";
import Image from "next/image";
import "./Hero.css";
import { motion } from "motion/react";
import { myAnimation, myAnimationDelay1, myAnimationDelay2 } from "data/motion";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="hero-image-container"
        >
          <div className="tape tape-top-left"></div>
          <div className="tape tape-top-right"></div>
          <div className="tape tape-bottom-left"></div>
          <div className="tape tape-bottom-right"></div>
          <div className="image-overlay"></div>

          <Image
            className="hero-image"
            src="/assets/images/mina.jpg"
            alt="Teemu"
            title="That's me"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            priority
            fill
          />
        </motion.div>
        <div className="hero-titles">
          <motion.h1
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            variants={myAnimationDelay1}
            className="hero-title"
          >
            I am Teemu.
          </motion.h1>
          <motion.h4
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            variants={myAnimationDelay2}
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
