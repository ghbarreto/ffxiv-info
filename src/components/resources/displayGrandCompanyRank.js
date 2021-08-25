export const displayGrandCompanyRank = ids => {
  switch (ids) {
    case 1:
      return '0';
    case 2:
      return 100;
    case 3:
      return 50;
    default:
      return null;
  }
};
