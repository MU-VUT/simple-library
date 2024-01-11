"use client";

import Image from "next/image";

export default function CustomImage({
  url,
  alt,
  base64,
}: {
  url: string;
  alt: string;
  base64: string;
}) {
  return (
    <Image
      src={url}
      alt={alt}
      width={260}
      height={260}
      style={{
        width: "100%",
        height: "auto",
      }}
      blurDataURL={base64}
      placeholder="blur"
    />
  );
}
