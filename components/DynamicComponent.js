import Column from "./Column";
import Container from "./Container";
import CTASection from "./CTASection";
import DiagonalImageHero from "./DiagonalImageHero";
import FeaturesWithTestimonial from "./FeaturesWithTestimonial";
import FloatingButton from "./FloatingButton";
import Footer from "./Footer";
import GridMiddle from "./GridMiddle";
import GridText from "./GridText";
import Heading from "./Heading";
import Hero from "./Hero";
import ImageTextFull from "./ImageTextFull";
import OfferCTA from "./OfferCTA";
import Page from "./Page";
import PersonalStatement from "./PersonalStatement";
import Placeholder from "./Placeholder";
import ScrollySnap from "./ScrollySnap";
import ScrollyTellings from "./ScrollyTelling";
import Section from "./Section";
import Services from "./Services";
import SideBySideFunctions from "./sidebysideFuntions";
import SimpleFooter from "./SimpleFooter";
import SimpleTestimonial from "./SimpleTestimonial";
import SingleTestimonial from "./SingleTestimonial";
import Targets from "./Targets";
import TempBuilder from "./TempBuilder";
import Testimonial from "./Testimonial";
import TestimonialGrid from "./TestimonialGrid";
import threeColFeatures from "./threeColFeatures";
import TwoColumnsWithTestimonial from "./TwoColumnsWithTestimonial";
import VideoHero from "./VideoHero";
import HeroSignUp from "./VideoSignUpHero";
import WavyHero from "./WavyHero";

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
  scrollySnap: ScrollySnap,
  diagonalImageHero: DiagonalImageHero,
  wavyHero: WavyHero,
  videoHero: VideoHero,
  heroSignUp: HeroSignUp,
  targets: Targets,
  simpleFooter: SimpleFooter,
  singleTestimonial: SingleTestimonial,
  scrollyTelling: ScrollyTellings,
  imageTextFull: ImageTextFull,
  sidebysideFuntions: SideBySideFunctions,
  twoColumnsWithTestimonial: TwoColumnsWithTestimonial,
  featuresWithTestimonial: FeaturesWithTestimonial,
  threeColFeatures: threeColFeatures,
  services: Services,
  page: Page,
  simpleTestimonial: SimpleTestimonial,
  tempBuilder: TempBuilder,
  floatingButton: FloatingButton,
};

const DynamicComponent = ({ blok, page }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component page={page} blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
