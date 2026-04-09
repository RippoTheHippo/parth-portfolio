type VideoEmbedProps = {
  embedUrl: string;
  title: string;
};

export function VideoEmbed({ embedUrl, title }: VideoEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-surface">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
