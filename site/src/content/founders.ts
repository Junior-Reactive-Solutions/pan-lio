/** "About the founders" copy, as supplied by the client (Oct 2026). */
export interface Founder {
  name: string;
  roles: string;
  photo: { src: string; alt: string; width: number; height: number };
  paragraphs: string[];
}

export const foundersIntro = {
  eyebrow: "About the Founders",
  title: "Building Strategic Leaders for Excellence",
  description:
    "At Pan-Lio, we believe that exceptional organisations begin with visionary leadership, purposeful innovation, and the courage to build something from nothing. Our founders bring together strategic insight, business development, and a shared commitment to empowering leaders and organisations to create sustainable growth and lasting impact across Africa and the world.",
  tagline: "One philosophy. Two visionary leaders. A shared commitment to excellence.",
};

export const founders: Founder[] = [
  {
    name: "Coach Deo Kateizi (Coach DK)",
    roles: "CEO & Co-Founder | Pan-Lio Ltd & Coach DK Global | Africa Agent – Safenet International",
    photo: { src: "/images/deo-portrait.jpg", alt: "Coach Deo Kateizi", width: 329, height: 410 },
    paragraphs: [
      "Coach Deo Kateizi (Coach DK) is a globally exposed business strategist, transformational coach, and leadership development professional committed to building strategic leaders who drive excellence and sustainable growth.",
      "Operating across Kampala, Uganda, and Dubai, UAE, he combines visionary thinking with practical expertise in strategy, productivity, leadership, and personal development to empower individuals and organisations to achieve their full potential.",
      "Driven by a passion for purposeful growth, innovation, and lasting legacy, Coach DK champions the philosophy, “Zero to one is greater than one to a hundred.”",
      "Through his leadership at Pan-Lio and Coach DK Global, he is dedicated to transforming ideas into opportunities, strengthening leadership capabilities, and creating meaningful impact across industries and international markets.",
    ],
  },
  {
    name: "Patricia Kateizi",
    roles: "Executive Director, Co-Founder & Programs Director | Pan-Lio Ltd & Coach DK Global | Africa Agent – Safenet International",
    photo: {
      src: "/images/patricia-kateizi.jpg",
      alt: "Patricia Kateizi, wearing sunglasses, in front of a landmark hotel",
      width: 597,
      height: 994,
    },
    paragraphs: [
      "Patricia Kateizi is a strategic business leader, Certified Business Development Professional, and Executive Director, Co-Founder, and Programs Director of Pan-Lio Ltd and Coach DK Global. With a passion for leadership development, business growth, and human potential, she focuses on designing and driving transformative programmes that equip individuals and organisations to excel in competitive and evolving markets.",
      "Working across Kampala, Uganda, and Dubai, UAE, Patricia brings strategic insight and a results-oriented approach to programme development, organisational growth, and leadership excellence. Guided by the philosophy, “Zero to one is greater than one to a hundred,” she champions innovation, purposeful growth, and sustainable impact, helping turn promising ideas into meaningful progress across Africa and beyond.",
    ],
  },
];
