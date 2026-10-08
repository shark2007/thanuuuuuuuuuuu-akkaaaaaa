// CHILDHOOD PHOTOS (7 photos from public/childhood/)
export const childhoodPhotos = [
  {
    id: "childhood-1",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.13.40 AM (2).jpeg"
  },
  {
    id: "childhood-2",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.13.41 AM.jpeg"
  },
  {
    id: "childhood-3",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.25.00 AM.jpeg"
  },
  {
    id: "childhood-4",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.26.29 AM.jpeg"
  },
  {
    id: "childhood-5",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.26.49 AM.jpeg"
  },
  {
    id: "childhood-6",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.43.58 AM (2).jpeg"
  },
  {
    id: "childhood-7",
    image: "/childhood/WhatsApp Image 2026-10-09 at 12.43.59 AM.jpeg"
  }
];

// GROUP PHOTOS (3 photos from public/group photos our gangggg atti/)
export const groupPhotos = [
  {
    id: "group-1",
    image: "/group photos our gangggg atti/WhatsApp Image 2026-10-09 at 1.25.55 AM.jpeg"
  },
  {
    id: "group-2",
    image: "/group photos our gangggg atti/WhatsApp Image 2026-10-09 at 1.25.56 AM.jpeg"
  },
  {
    id: "group-3",
    image: "/group photos our gangggg atti/WhatsApp Image 2026-10-09 at 1.25.57 AM.jpeg"
  }
];

// NORMAL PHOTOS (19 recent 2-4 years photos from public/normal/)
export const normalPhotos = [
  {
    id: "normal-1",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.13.40 AM (1).jpeg"
  },
  {
    id: "normal-2",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.13.40 AM.jpeg"
  },
  {
    id: "normal-3",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.13.41 AM (1).jpeg"
  },
  {
    id: "normal-4",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.13.41 AM (2).jpeg"
  },
  {
    id: "normal-5",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.13.42 AM.jpeg"
  },
  {
    id: "normal-6",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.24.59 AM (1).jpeg"
  },
  {
    id: "normal-7",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.24.59 AM.jpeg"
  },
  {
    id: "normal-8",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.25.00 AM (1).jpeg"
  },
  {
    id: "normal-9",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.26.48 AM (1)_1.jpeg"
  },
  {
    id: "normal-10",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.26.48 AM (2).jpeg"
  },
  {
    id: "normal-11",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.26.48 AM.jpeg"
  },
  {
    id: "normal-12",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.43.58 AM (1).jpeg"
  },
  {
    id: "normal-13",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.43.59 AM (1).jpeg"
  },
  {
    id: "normal-14",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.43.59 AM (2).jpeg"
  },
  {
    id: "normal-15",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.43.59 AM (3).jpeg"
  },
  {
    id: "normal-16",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.44.00 AM (1).jpeg"
  },
  {
    id: "normal-17",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.44.00 AM (2).jpeg"
  },
  {
    id: "normal-18",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.44.00 AM (3).jpeg"
  },
  {
    id: "normal-19",
    image: "/normal/WhatsApp Image 2026-10-09 at 12.44.00 AM.jpeg"
  }
];

// Present milestone selection (latest 4 photos from normal)
export const presentPhotos = normalPhotos.slice(-4).map((photo, idx) => ({
  ...photo,
  rotation: idx % 2 === 0 ? (idx === 0 ? "-2.5deg" : "-1.5deg") : (idx === 1 ? "2.5deg" : "1.8deg")
}));
