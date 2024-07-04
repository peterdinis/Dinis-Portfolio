"use client";

import { FC } from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IStackImageProps {
  imageSrc: string;
  altSrc: string;
}

const StackImage: FC<IStackImageProps> = ({
  imageSrc,
  altSrc,
}: IStackImageProps) => {
  const imageVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <motion.div variants={imageVariants} whileHover="hover">
      <Image m={10} src={imageSrc} w={20} boxShadow={12} h={20} alt={altSrc} />
    </motion.div>
  );
};

export default StackImage;
