export const gender = ids => {
  switch (ids) {
    case 1:
      return (
        <i
          style={{ color: 'rgb(100, 149, 237)', fontSize: '20px' }}
          class="venus icon"
        ></i>
      );
    case 2:
      return (
        <i style={{ color: 'pink', fontSize: '20px' }} class="venus icon"></i>
      );
    default:
      return null;
  }
};
