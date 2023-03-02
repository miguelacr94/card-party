export const currency = (number) => {
  if (!number) { return 0 }
  return number.toLocaleString("es-CO", {
    currency: "COP",
    style: "currency",
  });
};


export const carouselBreakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  // { width: 850, itemsToShow: 3, itemsToScroll: 3 },
];

export const carouselBreakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3, itemsToScroll: 3 },
];

export const carouselBreakPoints3 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 5, itemsToScroll: 3 },
];
