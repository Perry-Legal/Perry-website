import { withBasePath } from "@/lib/base-path";
import { seedAnnouncement, seedAnnouncementVideoLabel } from "@/lib/seed-announcement";
import { cn } from "@/lib/utils";

type SeedAnnouncementVideoProps = {
  className?: string;
};

export function SeedAnnouncementVideo({ className }: SeedAnnouncementVideoProps) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={withBasePath(seedAnnouncement.announcementVideoPoster)}
      aria-label={seedAnnouncementVideoLabel}
      title={seedAnnouncementVideoLabel}
      className={cn(
        "aspect-video w-full rounded-2xl bg-pine-950 shadow-[0_40px_100px_rgba(10,17,14,0.35)]",
        className,
      )}
    >
      <source src={withBasePath(seedAnnouncement.announcementVideo)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
