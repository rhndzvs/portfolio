import Image from "next/image";
import type { ProjectImage as ProjectImageData } from "@/content/projects";

type Props = {
  image?: ProjectImageData;
};

export default function ProjectImage({ image }: Props) {
  if (!image) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-border">
        <span className="font-mono text-label text-muted">
          Screenshot placeholder
        </span>
      </div>
    );
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
