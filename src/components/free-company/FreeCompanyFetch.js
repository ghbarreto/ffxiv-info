import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetch_free_company } from '../../actions';
import Table from '../Table';
import Spinner from '../Spinner';

const FreeCompanyFetch = ({ name, server, free_company }) => {
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(fetch_free_company(name, server));
  };

  useEffect(() => {
    request();
  }, [name || server]);
  return free_company ? (
    <Table
      id={'freeCompany'}
      tableHeaderFirst={'Free Company Name'}
      tableHeaderSecond={'Details'}
      items={free_company.Results}
    />
  ) : (
    <Spinner loading={'Fetching FCS'} />
  );
};

const mapStateToProps = state => {
  return {
    free_company: state.gameData.free_company,
  };
};

export default connect(mapStateToProps)(FreeCompanyFetch);
