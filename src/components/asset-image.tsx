import NextImage, { type ImageProps } from "next/image";

import { withBasePath } from "@/lib/base-path";

function resolveImageSrc(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src === "string") {
    return withBasePath(src);
  }

  return src;
}

export default function Image(props: ImageProps) {
  return <NextImage {...props} src={resolveImageSrc(props.src)} />;
}
