import Column from "./Column";
import Container from "./Container";
import Heading from "./Heading";
import Page from "./Page";
import Placeholder from "./Placeholder";

const Components = {
  heading: Heading,
  column: Column,
  container: Container,
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
