export const races = ids => {
  switch (ids) {
    case 1:
      return 'Hyur';
    case 2:
      return 'Elezen';
    case 3:
      return 'Lalafell';
    case 4:
      return "Miqo'te";
    case 5:
      return 'Roegadyn';
    case 6:
      return 'Au Ra';
    case 7:
      return 'Hrothgar';
    case 8:
      return 'Viera';
    default:
      return null;
  }
};
