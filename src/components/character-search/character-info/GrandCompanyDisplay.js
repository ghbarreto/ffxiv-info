import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetch_grand_company_name } from '../../../actions';

import GrandCompanyDisplayRank from './GrandCompanyDisplayRank';

const GrandCompanyDisplay = ({ id, company_name }) => {
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(fetch_grand_company_name());
    return response;
  };

  useEffect(() => {
    // timer
    request();
  }, [id]);

  const displayCompanyName = () => {
    if (company_name) {
      return Object.values(company_name.Results).map(e => {
        if (e.ID === id.NameID)
          return (
            <div key={e.ID}>
              {e.Name}
              <GrandCompanyDisplayRank id={e.ID} rank={id.RankID} />
            </div>
          );
      });
    }
  };
  return <div>{displayCompanyName()}</div>;
};

const mapStateToProps = state => {
  return {
    company_name: state.gameData.grand_company,
  };
};

export default connect(mapStateToProps, { fetch_grand_company_name })(
  GrandCompanyDisplay
);
