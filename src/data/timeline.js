import { childhoodPhotos, normalPhotos } from './memories';

/**
 * TIMELINE MILESTONES
 * Used in Chapter 04 — Timeline of Light
 */
export const timelineMilestones = [
  {
    id: "tl-childhood",
    year: "CHILDHOOD",
    age: "0 – 10",
    title: "The Genesis of Starlight",
    image: childhoodPhotos[2].image,
    caption: "The early years of innocent discoveries, playful adventures, and an imagination that knew no bounds."
  },
  {
    id: "tl-school",
    year: "SCHOOL",
    age: "11 – 15",
    title: "Learning the Skies",
    image: childhoodPhotos[1].image,
    caption: "School days, discovering your unique voice, and cultivating steadfast perseverance."
  },
  {
    id: "tl-teenage",
    year: "TEENAGE",
    age: "16 – 17",
    title: "Becoming Resilient",
    image: childhoodPhotos[0].image,
    caption: "A magical transition into adulthood — defining who you are with integrity and gentleness."
  },
  {
    id: "tl-18",
    year: "18",
    age: "Age 18",
    title: "Stepping into Independence",
    image: normalPhotos[0].image,
    caption: "The gateway to adulthood. Wings spread wide, ready to take flight into bigger worlds."
  },
  {
    id: "tl-23",
    year: "23",
    age: "Age 23 — Present",
    title: "Your Golden Horizon",
    image: normalPhotos[5].image,
    caption: "Standing at the crest of the mountain, glowing under the starlight. Today marks the dawn of your finest chapter."
  }
];
