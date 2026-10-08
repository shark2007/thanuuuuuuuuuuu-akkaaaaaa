import { allHerPhotos } from './memories';

/**
 * GALAXY OF PEOPLE
 * Used in Section 08 — Galaxy of People
 * 
 * Categories: FAMILY, FRIENDS, PEOPLE WHO MATTER, MEMORIES
 * Floating clusters where photos appear as celestial planets.
 */
export const peopleGalaxyClusters = [
  {
    id: "cluster-family",
    title: "FAMILY",
    subtitle: "The Solar Core",
    description: "The unconditional roots that have anchored and nurtured your universe.",
    color: "#fbbf24",
    members: [
      {
        id: "fam-1",
        name: "Amma & Appa",
        relation: "Parents",
        image: allHerPhotos[14].image,
        note: "The guiding lights whose prayers and blessings protect every step you take."
      },
      {
        id: "fam-2",
        name: "Kashyap",
        relation: "Your Brother",
        image: allHerPhotos[3].image,
        note: "Forever proud of you, forever cheering for you, and grateful to call you Akka."
      },
      {
        id: "fam-3",
        name: "Home Blessings",
        relation: "Family Warmth",
        image: allHerPhotos[9].image,
        note: "The warm gatherings, festival celebrations, and shared smiles that bind our home."
      }
    ]
  },
  {
    id: "cluster-friends",
    title: "FRIENDS",
    subtitle: "Orbiting Moons",
    description: "The chosen constellation of souls who bring boundless laughter and joy.",
    color: "#38bdf8",
    members: [
      {
        id: "fr-1",
        name: "Soul Tribe",
        relation: "Best Friends",
        image: allHerPhotos[5].image,
        note: "The ones who know your secrets, share late-night talks, and double your joy."
      },
      {
        id: "fr-2",
        name: "College Circle",
        relation: "Companions",
        image: allHerPhotos[6].image,
        note: "Surviving deadlines together and celebrating every tiny milestone in style."
      },
      {
        id: "fr-3",
        name: "Lifelong Confidants",
        relation: "Inner Circle",
        image: allHerPhotos[8].image,
        note: "A circle of trusted hearts that will remain by your side across all years."
      }
    ]
  },
  {
    id: "cluster-memories",
    title: "CHERISHED SOULS",
    subtitle: "Guiding Stars",
    description: "People and memories that have permanently left starlight in your heart.",
    color: "#ec4899",
    members: [
      {
        id: "pwm-1",
        name: "Mentors & Well-Wishers",
        relation: "Inspirations",
        image: allHerPhotos[11].image,
        note: "Those who recognized your brilliant potential early and encouraged you to soar."
      },
      {
        id: "pwm-2",
        name: "Unspoken Bonds",
        relation: "Treasured Moments",
        image: allHerPhotos[13].image,
        note: "Moments of unspoken understanding and unconditional love."
      }
    ]
  }
];
