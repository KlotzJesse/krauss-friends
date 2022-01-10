import Column from "./Column";
import Container from "./Container";
import CTASection from "./CTASection";
import Footer from "./Footer";
import GridMiddle from "./GridMiddle";
import GridText from "./GridText";
import Heading from "./Heading";
import Hero from "./Hero";
import OfferCTA from "./OfferCTA";
import Page from "./Page";
import PersonalStatement from "./PersonalStatement";
import Placeholder from "./Placeholder";
import Section from "./Section";
import Targets from "./Targets";
import Testimonial from "./Testimonial";
import TestimonialGrid from "./TestimonialGrid";

const Components = {
  heading: Heading,
  column: Column,
  container: Container,
  section: Section,
  hero: Hero,
  gridMiddle: GridMiddle,
  gridText: GridText,
  ctaSection: CTASection,
  testimonial: Testimonial,
  testimonialGrid: TestimonialGrid,
  personalStatement: PersonalStatement,
  footer: Footer,
  offerCTA: OfferCTA,
  targets: Targets,
  page: Page,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
