import { profile } from "@/content/profile";

export default function PhotoPlaceholder() {
  return (
    <div className="flex aspect-[4/5] w-[180px] max-w-full items-center justify-center rounded-lg border border-border md:w-full md:max-w-xs">
      <span className="font-mono text-label text-muted">
        {profile.photoPlaceholder}
      </span>
    </div>
  );
}
