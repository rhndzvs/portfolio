import { profile } from "@/content/profile";

export default function PhotoPlaceholder() {
  return (
    <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-lg border border-border">
      <span className="font-mono text-[13px] leading-[1.4] text-muted">
        {profile.photoPlaceholder}
      </span>
    </div>
  );
}
