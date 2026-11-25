import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Levels from "@/components/Levels";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/Privacy";
import Screenshots from "@/components/Screenshots";
import { getDictionary, isValidLocale } from "@/lib/getDictionary";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <Navbar dictionary={dictionary} locale={locale} />
      <main>
        <Hero dictionary={dictionary} locale={locale} />
        <HowItWorks dictionary={dictionary} />
        <Features dictionary={dictionary} />
        <Levels dictionary={dictionary} />
        <Screenshots dictionary={dictionary} />
        <Privacy dictionary={dictionary} />
        <FAQ dictionary={dictionary} />
        <FinalCTA dictionary={dictionary} locale={locale} />
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
