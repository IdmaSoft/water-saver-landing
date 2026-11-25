import Image from "next/image";
import { images } from "@/assets/images";
import type { Dictionary } from "@/lib/getDictionary";
import { site } from "@/lib/site";

type Props = {
  dictionary: Dictionary;
};

export default function Footer({ dictionary }: Props) {
  const { footer } = dictionary;
  const link = "font-bold text-water transition hover:text-teal";

  return (
    <footer className="bg-card py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Image src={images.appIcon} alt="" className="h-11 w-11 rounded-xl" />
          <div>
            <p className="text-lg font-extrabold text-water">{dictionary.brand.name}</p>
            <p className="text-sm font-semibold text-muted">
              {dictionary.brand.tagline} <span aria-hidden>💧</span>
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href={site.privacyUrl} target="_blank" rel="noopener" className={link}>
            {footer.privacy}
          </a>
          <a href={`mailto:${site.contactEmail}`} className={link}>
            {footer.contact}: {site.contactEmail}
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-sky px-6 pt-6 text-center text-sm text-muted md:text-left">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href={site.developerUrl} target="_blank" rel="noopener" className={link}>
            {site.developer}
          </a>
          . {footer.rights} {footer.madeIn}
        </p>
        <p className="mt-2 text-xs">{footer.playTrademark}</p>
      </div>
    </footer>
  );
}
