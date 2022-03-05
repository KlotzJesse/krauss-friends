import { sbEditable } from "@storyblok/storyblok-editable";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("./DynamicComponent"));

const Page = ({ blok }) => (
  <main {...sbEditable(blok)} key={blok._uid}>
    <NextSeo
      key={blok._uid + "_seo"}
      title={blok.title}
      description={blok.description}
    />
    {blok.body
      ? blok.body.map((comp) => (
          <DynamicComponent page={blok} blok={comp} key={comp._uid} />
        ))
      : null}
  </main>
);

export default Page;
