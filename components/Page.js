import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";

const Page = ({ blok }) => (
  <main {...sbEditable(blok)} key={blok._uid}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
