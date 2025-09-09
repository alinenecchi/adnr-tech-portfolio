import React from "react";
import Image from "next/image";
import { ImageProps } from "./Image.types";
import { getImageStyles } from "./Image.styles";
import { cn } from "@/lib/utils";

export const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  ...props
}) => {
  const imageStyles = getImageStyles();

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(imageStyles, className)}
      {...props}
    />
  );
};

