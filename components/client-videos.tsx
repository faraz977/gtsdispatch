import { clientVideos } from "@/lib/site";

export function ClientVideos() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {clientVideos.map((video) => (
        <figure key={video.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="relative aspect-video bg-[#231f20]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
            <p className="text-sm font-semibold text-[#231f20]">{video.label}</p>
            <a
              className="shrink-0 text-sm font-medium text-[#0563ad] hover:underline"
              href={video.url}
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
