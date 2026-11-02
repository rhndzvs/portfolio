import { profile } from "@/content/profile";

export default function PhotoPlaceholder() {
  return (
    <div className="flex aspect-[4/5] w-[180px] max-w-full items-center justify-center rounded-lg border border-border md:w-full md:max-w-xs">
      <span className="font-mono text-[13px] leading-[1.4] text-muted">
        {profile.photoPlaceholder}
      </span>
    </div>
  );
}
