import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "WebPage";
  robots?: string;
  structuredData: Record<string, unknown>;
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function usePageMetadata(metadata: PageMetadata) {
  useEffect(() => {
    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", metadata.robots ?? "index,follow");
    setMeta("property", "og:type", metadata.type ?? "website");
    setMeta("property", "og:url", metadata.canonical);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:image", "https://rintuchowdory.github.io/openclow-portfolio/openclow-og.png");
    setMeta("property", "og:image:alt", "OpenClowAI — Intelligence Redefined");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", "https://rintuchowdory.github.io/openclow-portfolio/openclow-og.png");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;

    let structuredData = document.getElementById("page-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "page-structured-data";
      (structuredData as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(metadata.structuredData);
  }, [metadata]);
}
