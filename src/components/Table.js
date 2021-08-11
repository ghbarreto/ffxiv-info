import React from 'react';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TableComponent = ({tableHeaderFirst, tableHeaderSecond, items, server_choice, database_choice }) => {
  const displayMarketBoardItems = () => {
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
            <Link to={`/fetch/${item.ID}${server_choice}${database_choice}`}>
              <Button float="" icon labelPosition="left" secondary size="small">
                <Icon name="arrow right" /> Select
              </Button>
            </Link>
          </Table.Cell>
        </Table.Row>
      );
    });
  };
  return (
    <Table
      celled
      striped
      collapsing
      inverted
      color={'violet'}
      size="large"
      padded={true}
      style={{ margin: '0 auto', width: '80%' }}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{tableHeaderFirst}</Table.HeaderCell>
          <Table.HeaderCell>{tableHeaderSecond}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{displayMarketBoardItems()}</Table.Body>
    </Table>
  );
};

export default TableComponent