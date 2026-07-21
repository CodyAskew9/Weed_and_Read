export type CatalogItem = {
  id: string;
  dewey: string;
  title: string;
  cultivar: string;
  synopsis: string;
  format: string;
  thc: string;
};

export const catalog: CatalogItem[] = [
  {
    id: "evening-primrose",
    dewey: "615.782",
    title: "Evening Primrose",
    cultivar: "Flower",
    synopsis:
      "A dusk-leaning bouquet of cedar, dried orange peel, and old paper. Best reserved for a quiet chair and an unfinished chapter.",
    format: "3.5g jar",
    thc: "22%",
  },
  {
    id: "quiet-chapter",
    dewey: "808.100",
    title: "Quiet Chapter",
    cultivar: "Pre-roll",
    synopsis:
      "Soft spice and sandalwood with a measured finish. Packaged for patrons who prefer the reading room to the sidewalk.",
    format: "2-pack",
    thc: "19%",
  },
  {
    id: "ledger-gold",
    dewey: "332.109",
    title: "Ledger Gold",
    cultivar: "Vape cartridge",
    synopsis:
      "Bright resin notes tempered by oak and honeyed leaf. Discreet enough for the commute home after closing time.",
    format: "0.5g",
    thc: "78%",
  },
  {
    id: "bound-volume",
    dewey: "002.094",
    title: "Bound Volume",
    cultivar: "Concentrate",
    synopsis:
      "Dense, library-dark earth with a slow unfurling of pepper and pine. Intended for experienced collectors only.",
    format: "1g",
    thc: "71%",
  },
  {
    id: "front-desk-mint",
    dewey: "027.473",
    title: "Front Desk Mint",
    cultivar: "Edible tablet",
    synopsis:
      "Cool mint over a restrained botanical base. Portioned plainly—no novelty shapes, no childish branding.",
    format: "10-count tin",
    thc: "10mg each",
  },
  {
    id: "san-mateo-dusk",
    dewey: "917.891",
    title: "San Mateo Dusk",
    cultivar: "Flower",
    synopsis:
      "Named for the blue evening light on our street. Herbal, slightly floral, and built for conversation that stays indoors.",
    format: "3.5g jar",
    thc: "24%",
  },
];
