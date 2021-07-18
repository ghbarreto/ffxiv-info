import { classJobs } from '../classJobs';

export const displayClasses = (values, classes) => {
  return values.map(value => {
    for (let i in classes) {
      if (value.ClassID === classes[i]) {
        return (
          <div>
            <img
              style={{ width: '25px', height: '25px' }}
              src={classJobs(value.ClassID)}
              alt={value.Name.substring(value.Name.lastIndexOf('/') + 1)}
            />
            <div
              style={{
                marginLeft: '4px',
                fontSize: '15px',
                color: 'rgb(241, 182, 18)',
              }}
            >
              {value.Level}
            </div>
          </div>
        );
      }
    }
  });
};

export const displayUnlockedClasses = (values, classes) => {
  return values.map(value => {
    for (let i in classes) {
      if (value.UnlockedState.ID === classes[i]) {
        return (
          <div>
            <img
              style={{ width: '25px', height: '25px' }}
              src={classJobs(value.UnlockedState.ID)}
              alt={value.Name.substring(value.UnlockedState.Name)}
            />
            <div
              style={{
                marginLeft: '4px',
                fontSize: '15px',
                color: 'rgb(241, 182, 18)',
              }}
            >
              {value.Level}
            </div>
          </div>
        );
      }
    }
  });
};
