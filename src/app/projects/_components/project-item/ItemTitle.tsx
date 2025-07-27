import { motion } from "motion/react";
import { myAnimation } from "data/motion";
import Image from "next/image";
import "./ItemTitle.css";

interface ItemTitleProps {
  logo: string;
  title: string;
  description: string;
}

const ItemTitle = ({ logo, title, description }: ItemTitleProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
      className="my-projects-title"
    >
      <div className="my-projects-intro-icon">
        <Image src={logo} alt="Fish Icon" width={24} height={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ItemTitle;
