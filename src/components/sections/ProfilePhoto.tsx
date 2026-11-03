import Image from "next/image";
import { profile, type ProfilePhoto as ProfilePhotoData } from "@/content/profile";

const frame =
  "aspect-[4/5] w-[180px] max-w-full rounded-lg border border-border md:w-full md:max-w-xs";

type Props = {
  photo?: ProfilePhotoData;
  sizes: string;
  preload?: boolean;
};

export default function ProfilePhoto({
  photo,
  sizes,
  preload = false,
}: Props) {
  if (!photo) {
    return (
      <div className={`flex items-center justify-center ${frame}`}>
        <span className="font-mono text-label text-muted">
          {profile.photoPlaceholder}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${frame}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        // objectPosition is content data, so it cannot be a static Tailwind class.
        style={{ objectPosition: photo.objectPosition }}
      />
    </div>
  );
}
