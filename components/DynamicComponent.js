import dynamic from "next/dynamic";
import CloudProjektLP from "./CloudProjektLP";
import CPDmea from "./cpDmea";
import ExitIntent from "./ExitIntent";
import NewLP from "./NewLP";
import SocamelLP from "./Socamel";
import SocamelInternorga from "./SocamelInternorga";
import Text from "./Text";
const Column = dynamic(() => import("./Column"));
const Container = dynamic(() => import("./Container"));
const CTASection = dynamic(() => import("./CTASection"));
const DiagonalImageHero = dynamic(() => import("./DiagonalImageHero"));
const FeaturesWithTestimonial = dynamic(() =>
  import("./FeaturesWithTestimonial")
);
const FloatingButton = dynamic(() => import("./FloatingButton"));
const Footer = dynamic(() => import("./Footer"));
const GridMiddle = dynamic(() => import("./GridMiddle"));
const GridText = dynamic(() => import("./GridText"));
const Heading = dynamic(() => import("./Heading"));
const Hero = dynamic(() => import("./Hero"));
const ImageTextFull = dynamic(() => import("./ImageTextFull"));
const OfferCTA = dynamic(() => import("./OfferCTA"));
const Page = dynamic(() => import("./Page"));
const PersonalStatement = dynamic(() => import("./PersonalStatement"));
const Placeholder = dynamic(() => import("./Placeholder"));
const ScrollySnap = dynamic(() => import("./ScrollySnap"));
const ScrollyTellings = dynamic(() => import("./ScrollyTelling"));
const Section = dynamic(() => import("./Section"));
const Services = dynamic(() => import("./Services"));
const SideBySideFunctions = dynamic(() => import("./sidebysideFuntions"));
const SimpleFooter = dynamic(() => import("./SimpleFooter"));
const SimpleTestimonial = dynamic(() => import("./SimpleTestimonial"));
const SingleTestimonial = dynamic(() => import("./SingleTestimonial"));
const Targets = dynamic(() => import("./Targets"));
const TempBuilder = dynamic(() => import("./TempBuilder"));
const Testimonial = dynamic(() => import("./Testimonial"));
const TestimonialGrid = dynamic(() => import("./TestimonialGrid"));
const threeColFeatures = dynamic(() => import("./threeColFeatures"));
const TwoColumnsWithTestimonial = dynamic(() =>
  import("./TwoColumnsWithTestimonial")
);
const VideoHero = dynamic(() => import("./VideoHero"));
const HeroSignUp = dynamic(() => import("./VideoSignUpHero"));
const WavyHero = dynamic(() => import("./WavyHero"));

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
  text: Text,
  exitIntent: ExitIntent,
  newLP: NewLP,
  cloudProjektLP: CloudProjektLP,
  socamelLP: SocamelLP,
  cpDmea: CPDmea,
  socamelInternorga: SocamelInternorga,
};

const DynamicComponent = ({ blok, page }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component page={page} blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
