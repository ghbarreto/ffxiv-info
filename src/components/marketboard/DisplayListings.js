import NumberFormat from 'react-number-format';
import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import { cityIds } from '../resources/cityIds';
import { worlds } from '../resources/worlds';

const DisplayListings = ({ data }) => {
  const getMinPrice = () => {
    if (data.data) {
      return Object.values(data.data.listings)
        .slice(0, 50)
        .map(e => {
          return (
            // <div>
            <Table.Row>
              <Table.Cell>
                <Header as="h3">
                  <Header.Content style={{ color: 'gold' }}>
                    {e.retainerName}
                    <Header.Subheader>
                      {cityIds(e.retainerCity)}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                $
                <NumberFormat
                  value={Math.min(e.pricePerUnit)}
                  thousandSeparator={true}
                  displayType={'text'}
                />
              </Table.Cell>
              <Table.Cell>{e.quantity}</Table.Cell>
              <Table.Cell>
                $
                <NumberFormat
                  value={e.total}
                  thousandSeparator={true}
                  displayType={'text'}
                />
              </Table.Cell>
              {e.worldName ? <Table.Cell>{e.worldName}</Table.Cell> : null}
            </Table.Row>

            // </div>
          );
        });
    }
    return null;
  };
  const verifyColumn = () => {
    if (data.data) {
      for (let i in data.data.listings) {
        if (data.data.listings[i].worldName) {
          return <Table.HeaderCell>Cheapest World</Table.HeaderCell>;
        }
      }
      return null;
    }
  };

  return (
    <div>
      <div
        style={{
          color: ' rgb(38, 115, 216)',
          backgroundColor: ' rgb(241, 182, 18)',
          height: '50px',
          width: '50%',
          margin: '0 auto',
          borderRadius: '5px',
          marginBottom: '-7px',
        }}
      >
        <h1
          style={{
            marginTop: '-20px',
            textAlign: 'center',
            marginLeft: '10px',
          }}
        >
          {data.data.dcName || worlds(data.data.worldID)}
        </h1>
      </div>

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
            <Table.HeaderCell>Retainer Name</Table.HeaderCell>
            <Table.HeaderCell>Cheapest per unit</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            {verifyColumn()}
          </Table.Row>
        </Table.Header>
        {getMinPrice()}

        <Table.Body></Table.Body>
      </Table>
    </div>
  );
};
export default DisplayListings;
