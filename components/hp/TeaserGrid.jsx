import React from "react";
import Layout from "./Layout";

const teasers = [
  {
    title: "Der KRAUSS Blog",
    description: `Damit Sie für Ihre Weiterbildung rundum informiert sind, erfahren Sie hier alles Wichtige. Ohne Fachchinesisch.`,
    buttonName: "Ich will's wissen",
    img: "https://i.postimg.cc/nV2vFpKd/Design-ohne-Titel-7.png",
  },
  {
    title: "Wir haben immer ein offenes Ohr",
    description: `Du hast eine spezielle Herausforderung oder einfach nur eine Nachfrage? Wir sind immer nur einen Klick entfernt. Chatte mit uns, ruf an oder schreib uns.`,
    buttonName: "Ich hab eine Frage",
    img: "https://i.postimg.cc/nV2vFpKd/Design-ohne-Titel-7.png",
  },
  {
    title: "Die KRAUSS Knowledge Base",
    description: `Woher hat KRAUSS die Erfahrung? Was ist überhaupt ein Coach? Und
        was beeinflusst Erfolg? Entdecken Sie die Antworten auf diese und
        weitere Fragen in unserer Knowledge Base.`,
    buttonName: "Ab zum FAQ",
    img: "https://i.postimg.cc/nV2vFpKd/Design-ohne-Titel-7.png",
  },
  {
    title: "Die richtige Weiterbildung schon gefunden?",
    description: `Super! Damit es beim Training auch zum "Perfect Fit" kommt, sprich am besten direkt mit unserem Trainer.`,
    buttonName: "Zu den top Konditionen",
    img: "https://i.postimg.cc/nV2vFpKd/Design-ohne-Titel-7.png",
  },
];

const TeaserGrid = (props) => {
  return (
    <Layout>
      <div className="w-full grid md:grid-cols-2 gap-4">
        {teasers.map((teaser) => {
          return (
            <div
              key={teaser.title}
              className="bg-white overflow-hidden rounded-2xl shadow-lg px-10 md:pr-0 pt-10 border border-1 border-gray-100 flex flex-col md:flex-row justify-center items-end"
            >
              <div className="md:w-1/2 self-start">
                <h3 className="text-2xl font-semibold tracking-wider">
                  {teaser.title}
                </h3>
                <p className="text-md pt-7">{teaser.description}</p>
                <button className="px-5 py-2 font-semibold mt-5 mb-10 border-2 border-black rounded-xl tracking-wider">
                  {teaser.buttonName}
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={teaser.img} />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

TeaserGrid.propTypes = {};

export default TeaserGrid;
