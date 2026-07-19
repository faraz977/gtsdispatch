const SITE_ORIGINS = [
  "https://gtsdispatch.us",
  "https://www.gtsdispatch.us",
  "http://gtsdispatch.us",
  "http://www.gtsdispatch.us",
];

function localizeUploads(url: string) {
  return url.replace(
    /https?:\/\/(?:www\.)?gtsdispatch\.us\/wp-content\/uploads/g,
    "/wp-content/uploads",
  );
}

function localizeInternalLinks(html: string) {
  let output = html;
  for (const origin of SITE_ORIGINS) {
    output = output.replaceAll(origin, "");
  }
  return output;
}

function fixLazyImages(html: string) {
  return html.replace(/<img\b([^>]*?)>/gi, (tag) => {
    let next = tag;
    const dataSrc = next.match(/\bdata-src="([^"]+)"/i)?.[1];

    if (dataSrc) {
      const src = localizeUploads(dataSrc);
      if (/\bsrc="/i.test(next)) {
        next = next.replace(/\bsrc="[^"]*"/i, `src="${src}"`);
      } else {
        next = next.replace("<img", `<img src="${src}"`);
      }
      next = next.replace(/\sdata-src="[^"]*"/i, "");
    }

    return next.replace(
      /https?:\/\/(?:www\.)?gtsdispatch\.us\/wp-content\/uploads/g,
      "/wp-content/uploads",
    );
  });
}

export function transformWpHtml(html: string) {
  let output = html;
  output = fixLazyImages(output);
  output = output.replace(/https?:\/\/(?:www\.)?gtsdispatch\.us\/wp-content\/uploads/g, "/wp-content/uploads");
  output = output.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
  output = localizeInternalLinks(output);
  return output;
}
