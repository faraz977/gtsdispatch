import { clientVideos } from "@/lib/site";

export function ClientVideos() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {clientVideos.map((video) => (
        <figure key={video.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="relative aspect-video bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <figcaption className="px-4 py-3 text-sm leading-6 text-[#231f20]">
            <a className="font-medium hover:text-[#0563ad]" href={video.url} target="_blank" rel="noreferrer">
              {video.title}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
