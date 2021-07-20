export const gender = ids => {
  switch (ids) {
    case 1:
      return '/assets/images/male.png';
    case 2:
      return '/assets/images/female.png';
    default:
      return null;
  }
};
