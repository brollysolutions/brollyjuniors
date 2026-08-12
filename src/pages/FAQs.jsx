import { familyFaqs, aiFaqs, pythonFaqs, phonicsFaqs } from '../data/site.js';
import { PageHero, FaqList, CtaBand } from '../components/Shared.jsx';

const allFaqs = [
  ...familyFaqs,
  ...phonicsFaqs.slice(0, 3), // start age, method, duration
  ...aiFaqs(6).slice(1), // tools, sessions, safety
  ...pythonFaqs(6).slice(1), // sessions, projects, laptop
];

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
