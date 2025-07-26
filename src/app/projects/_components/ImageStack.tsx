import { useState } from "react";
import Image from "next/image";
import { useIsMobile } from "app/hooks/useMediaQuery";

interface ImageStackProps {
  images: string[];
}

const ImageStack = ({ images }: ImageStackProps) => {
  const [stack, setStack] = useState(images);
  const isMobile = useIsMobile();

  const rotateStack = () => {
    const updated = [...stack];
    const first = updated.shift();
    if (first) updated.push(first);
    setStack(updated);
  };

  return (
    <div className="image-stack" onClick={rotateStack}>
      {stack.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="stacked-image"
          style={{
            zIndex: stack.length - i,
            transform: `rotate(${i * 3}deg) translate(${i * 8}px, ${i * 6}px)`,
          }}
        >
          <Image
            src={src}
            alt={`screenshot ${i + 1}`}
            width={isMobile ? 240 : 360}
            height={isMobile ? 120 : 180}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
