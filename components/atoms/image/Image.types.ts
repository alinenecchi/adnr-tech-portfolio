import { ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

