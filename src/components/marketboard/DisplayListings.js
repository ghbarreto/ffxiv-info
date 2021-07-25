import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

const DisplayListings = ({ data }) => {
  console.log(data.data);

  const getMinPrice = () => {
    if (data.data) {
      return Object.values(data.data.listings)
        .slice(0, 10)
        .map(e => {
          return (
            // <div>
            <Table.Cell>{Math.min(e.pricePerUnit)}</Table.Cell>
            // </div>
          );
        });
    }
    return null;
    // console.log(typeof data.data.listings);
  };

  return (
    <div>
      <h1>{data.data.dcName}</h1>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{getMinPrice()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
export default DisplayListings;
