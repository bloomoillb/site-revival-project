import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const BASE_URL = "https://www.bloomoil.beauty";

function setMeta(attr: string, value: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({ title, description, canonical, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`;
    const img = ogImage || "https://bloomoil.beauty/hair-oil-product.png";

    document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", fullCanonical);

    // OG
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullCanonical);
    setMeta("property", "og:image", img);

    // Twitter
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    // JSON-LD
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-jsonld";
      script.textContent = JSON.stringify(
        Array.isArray(jsonLd) ? jsonLd : jsonLd
      );
      // Remove old one
      document.getElementById("page-jsonld")?.remove();
      document.head.appendChild(script);
    }

    return () => {
      script?.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);
}
