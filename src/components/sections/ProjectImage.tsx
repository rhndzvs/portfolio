import Image from "next/image";
import type { ProjectImage as ProjectImageData } from "@/content/projects";

type Props = {
  image?: ProjectImageData;
};

export default function ProjectImage({ image }: Props) {
  if (!image) {
    return null;
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
