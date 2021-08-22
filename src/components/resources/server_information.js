export const server_information = id => {
  switch (id) {
    case 'Online':
      return (
        <img
          alt="Online"
          src="https://img.finalfantasyxiv.com/lds/h/i/kfWHAYnuku9yWcGK1UqHRqlvLo.svg"
          style={{ height: '20px', width: '20px' }}
        />
      );
    case 'Offline':
      return (
        <img
          alt="Online"
          src="https://img.finalfantasyxiv.com/lds/h/i/kfWHAYnuku9yWcGK1UqHRqlvLo.svg"
          style={{ height: '20px', width: '20px' }}
        />
      );
    case 'Standard':
      return (
        <img
          alt="Standard"
          src="https://img.finalfantasyxiv.com/lds/h/n/mAQB-FYQrpB0HHsvSNCMTwsBtw.svg"
          style={{ height: '20px', width: '20px', color: 'red' }}
        />
      );
    case 'Preferred':
      return (
        <img
          alt="Online"
          src="https://img.finalfantasyxiv.com/lds/h/n/mAQB-FYQrpB0HHsvSNCMTwsBtw.svg"
          style={{
            height: '20px',
            width: '20px',
            filter: 'sepia() saturate(20000%) hue-rotate(30deg)',
          }}
        />
      );
    case 'Available':
      return (
        <img
          alt="Online"
          src="https://img.finalfantasyxiv.com/lds/h/n/mAQB-FYQrpB0HHsvSNCMTwsBtw.svg"
          style={{
            height: '20px',
            width: '20px',
          }}
        />
      );

    case 'Unavailable':
      return (
        <img
          alt="Online"
          src="https://img.finalfantasyxiv.com/lds/h/n/mAQB-FYQrpB0HHsvSNCMTwsBtw.svg"
          style={{
            height: '20px',
            width: '20px',
            filter: 'sepia() saturate(20000%) hue-rotate(30deg)',
          }}
        />
      );
    default:
      return;
  }
};
