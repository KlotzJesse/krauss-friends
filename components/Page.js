import { sbEditable } from "@storyblok/storyblok-editable";
import { NextSeo } from "next-seo";
import DynamicComponent from "./DynamicComponent";

const Page = ({ blok }) => (
  <main {...sbEditable(blok)} key={blok._uid}>
    <NextSeo title={blok.title} description={blok.description} />
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
