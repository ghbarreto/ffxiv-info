export const cityIds = ids => {
  switch (ids) {
    case 1:
      return (
        <span style={{ color: 'lightsalmon', fontWeight: 'bold' }}>
          Limsa Lominsa{' '}
        </span>
      );
    case 2:
      return (
        <span style={{ color: 'lightgreen', fontWeight: 'bold' }}>
          Gridania
        </span>
      );
    case 3:
      return (
        <span style={{ color: 'yellow', fontWeight: 'bold' }}>Ul'dah</span>
      );
    case 4:
      return (
        <span style={{ color: 'lightblue', fontWeight: 'bold' }}>Ishgard</span>
      );
    case 7:
      return <span style={{ color: 'white', fontWeight: 'bold' }}>Kugane</span>;
    case 10:
      return (
        <span style={{ color: 'aqua', fontWeight: 'bold' }}>Crystarium</span>
      );
    default:
      return null;
  }
};
