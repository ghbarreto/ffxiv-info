import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetch_grand_company_rank,
  fetch_grand_company_rank_name,
} from '../../../actions';
import { displayGrandCompanyRank } from '../../resources/displayGrandCompanyRank';

const GrandCompanyDisplayRank = ({
  id,
  rank,
  company_rank,
  company_rank_name,
}) => {
  const [isTrue, setIsTrue] = useState(true);
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(fetch_grand_company_rank(rank));
    return response;
  };

  const displayRankingName = () => {
    const ranking = parseInt(displayGrandCompanyRank(id) + rank);
    if (company_rank_name) {
      return company_rank_name.Results.map(e =>
        e.ID === ranking ? <div>{e.Name}</div> : ''
      );
    }
    console.log(company_rank_name, id);
  };

  const requestRank = url => {
    const response = dispatch(fetch_grand_company_rank_name(url));
  };

  const displayRank = () => {
    const ranking = parseInt(displayGrandCompanyRank(id) + rank);
    if (company_rank) {
      if (ranking <= 49) {
        if (isTrue) {
          requestRank('/gcranklimsamaletext');
          setIsTrue(false);
        }
        return (
          <img
            alt="icon maelstrom"
            src={`http://xivapi.com/${company_rank.IconMaelstrom}`}
          />
        );
      }
      if ((ranking >= 100) & (ranking <= 130)) {
        if (isTrue) {
          requestRank('/gcranklimsamaletext');
          setIsTrue(false);
        }
        return (
          <img
            alt="icon serpents"
            src={`http://xivapi.com/${company_rank.IconSerpents}`}
          />
        );
      }
      if (ranking >= 50 && ranking <= 80) {
        if (isTrue) {
          requestRank('/gcranklimsamaletext');
          setIsTrue(false);
        }
        return (
          <img
            alt="icon flames"
            src={`http://xivapi.com/${company_rank.IconFlames}`}
          />
        );
      }
    }
  };

  useEffect(() => {
    request();
  }, [id]);

  return (
    <div>
      {displayRank()} {displayRankingName()}{' '}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    company_rank: state.gameData.grand_company_rank,
    company_rank_name: state.gameData.grand_company_rank_name,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetch_grand_company_rank,
      fetch_grand_company_rank_name,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandCompanyDisplayRank);
