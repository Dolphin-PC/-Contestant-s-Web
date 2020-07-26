import React from 'react';
import MaterialTable from 'material-table';
import { Container } from 'reactstrap';

function IdeaTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran' },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
      },
    ],
  });
  return (
    <Container>
      <MaterialTable
        title='아이디어 게시판'
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </Container>
  );
}
export default IdeaTable;
