/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function SearchBar() {
  return (
    <div className="h-screen flex justify-center items-center mx-auto max-w-[85rem] space-x-20">
      <div className="w-1/2">
        <h1 className="text-7xl font-semibold tracking-wider">
          <span className=" bg-gradient-to-r from-secondary-200 to-secondary-200 bg-no-repeat [background-position:1%] [background-size:100%_0.4em]">
            Trainieren.&nbsp;
          </span>
          <br />
          <span className=" bg-gradient-to-r from-secondary-200 to-secondary-200 bg-no-repeat [background-position:1%] [background-size:100%_0.4em]">
            Qualifizieren.&nbsp;
          </span>
          <br />
          <span className="bg-gradient-to-r from-secondary-200 to-secondary-200 bg-no-repeat [background-position:1%] [background-size:100%_0.4em]">
            Profitieren.&nbsp;
          </span>
        </h1>
        <p className="text-2xl max-w-2xl tracking-wide pt-10">
          Mitarbeiter weiterbilden ohne Vermarktungsstress.
          <br />
          Mit KRAUSS – dem Training, das auch wirklich was bringt.
        </p>
        <button className="px-5 py-2 font-semibold mt-5 mb-10 border-2 border-black rounded-xl tracking-wider">
          Los gehts
        </button>
        <button className="ml-5 px-5 py-2 font-semibold mt-5 mb-10 border-2 border-black rounded-xl tracking-wider">
          Erzählen Sie mir mehr
        </button>
      </div>
      <div className="w-1/2">
        <img src="https://i.postimg.cc/D0PkRZRK/Design-ohne-Titel-11-1.png" />
      </div>
    </div>
  );
}
