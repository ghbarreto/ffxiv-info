import React from 'react';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { server_information } from './resources/server_information';
import { colorPicker } from './resources/utils/colorPicker'
import DisplayAlert from './DisplayAlert';

const TableComponent = ({
  id,
  tableHeaderFirst,
  tableHeaderSecond,
  items,
  server_choice,
  database_choice,
  regions,
  server_status,
  server_name,
}) => {
  const tableSize = server_status ? 'tiny' : 'large';
  const isDisplayingServers = server_name || regions || server_status;
  const colorSet = isDisplayingServers ? 'grey' : 'violet';
  const isCelled = isDisplayingServers ? false : true;

  const displayServerNames = () => {
    return server_name ? (
      <div>
        <h1
          style={{
            color: ' rgb(241, 182, 18)',
            textAlign: ' center',
            marginBottom: '20px',
          }}
        >
          {server_name}
        </h1>
      </div>
    ) : (
      ''
    );
  };

  const displayRegions = () => {
    return regions ? (
      <div
        style={{
          marginTop: '30px',
          color: 'rgb(38, 115, 216)',
          // marginLeft: '30px',
        }}
      >
        <h1>{regions}</h1>
      </div>
    ) : (
      ''
    );
  };

  const displayFreeCompanyValues = () => {
    if (id === 'freeCompany') {
      return Object.values(items).map(item => {
        return (
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image style={{ position: 'relative' }}>
                {item.Crest.map(e => (
                  <Image
                    src={e}
                    style={{
                      position: 'absolute',
                      zIndex: { e },
                      top: '-10px',
                    }}
                  />
                ))}
                <Header.Content style={{ color: 'white', marginLeft: '40px' }}>
                  {item.Name}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Link to={`/free-company/${item.ID}`}>
                <Button
                  float=""
                  icon
                  labelPosition="left"
                  secondary
                  size="small"
                >
                  <Icon name="arrow right" /> Details
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        );
      });
    }
    return null;
  };

  const displayServers = () => {
    if (server_status) {
      return server_status.map(server => {
        return (
          <Table.Row>
            {displayTableCellForServers(server.status)}
            {displayTableCellForServers(server.name, '1')}
            {displayTableCellForServers(server.congestion, '1')}
            {displayTableCellForServers(server.creation)}
          </Table.Row>
        );
      });
    }
  };
  const displayTableCellForServers = (value, needsFunctionCall) => {
    return (
      <Table.Cell>
        <Header as="h5">
          <Header.Content style={{ color: colorPicker(value) }}>
            {needsFunctionCall ? value : server_information(value)}
          </Header.Content>
        </Header>
      </Table.Cell>
    );
  };

  const displayHeaders = () => {
    return tableHeaderFirst && tableHeaderSecond ? (
      <Table.Row>
        <Table.HeaderCell>{tableHeaderFirst}</Table.HeaderCell>{' '}
        <Table.HeaderCell>{tableHeaderSecond}</Table.HeaderCell>
      </Table.Row>
    ) : (
      ''
    );
  };

  const displayMarketBoardItems = () => {
    if (!server_choice || !database_choice) return;
    if (items && database_choice) {
      return Object.values(items).map(item => {
        return (
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image src={`https://xivapi.com/${item.Icon}`} rounded />
                <Header.Content style={{ color: 'white' }}>
                  {item.Name}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Link
                to={
                  `/fetch/${item.ID}${server_choice || ''}${database_choice}` ||
                  ''
                }
              >
                <Button
                  float=""
                  icon
                  labelPosition="left"
                  secondary
                  size="small"
                >
                  <Icon name="arrow right" /> Select
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        );
      });
    }
    return '';
  };

  return (
    <div>
      {/* <div>{displayLastTimeUpdated()}</div> */}
      <div>{displayRegions()}</div>
      {displayServerNames()}
      <Table
        celled={isCelled}
        striped
        collapsing
        inverted
        color={colorSet}
        size={tableSize}
        padded={true}
        style={{ margin: '0 auto', width: '80%' }}
      >
        {displayHeaders()}
        <Table.Body>{displayServers()}</Table.Body>
        <Table.Body>{displayMarketBoardItems()}</Table.Body>
        <Table.Body>{displayFreeCompanyValues()}</Table.Body>
      </Table>
    </div>
  );
};

export default TableComponent;

// const displayLastTimeUpdated = () => {
//   if (server_status) {
//     for (let i in server_status) {
//       return (
//         <h7 style={{ color: ' rgb(241, 182, 18)' }}>
//           {server_status[i].last_online}
//         </h7>
//       );
//     }
//   }
// };
