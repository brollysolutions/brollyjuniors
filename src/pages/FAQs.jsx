import { PageHero, FaqList, CtaBand } from '../components/Shared.jsx';
/* The same array lib/faqs.js hands to the FAQPage structured data. This page
   used to keep its own copy of the list, which is how it ended up rendering
   twelve questions while the schema on the same page declared fifteen —
   Google discards FAQ markup whose questions are not visible. One array, read
   by both, is the only arrangement where that cannot happen. */
import { allFaqs } from '../lib/faqs.js';

export default function FAQs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions parents and schools ask us."
        subtitle="Clear answers about ages, class-wise curricula, schedules, free trials, batch sizes, school partnerships and safety."
        image="/images/resources.svg"
        imageAlt="An open guide book with a bookmark and a magnifier"
      />
      <FaqList items={allFaqs} title="Everything in one place" />
      <CtaBand variant="family" />
    </>
  );
}
