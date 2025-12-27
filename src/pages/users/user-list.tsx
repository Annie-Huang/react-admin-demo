import { DataTable, EditButton, List, TextInput } from 'react-admin';

const UserList = () => {
  const postFilters = [
    <TextInput source='q' label='Search' alwaysOn key='searchKey' />,
  ];

  return (
    // <List>
    <List filters={postFilters}>
      <DataTable>
        <DataTable.Col source='id' />
        <DataTable.Col source='name' />
        <DataTable.Col source='email' />
        <DataTable.Col source='phone' />
        <DataTable.Col>
          <EditButton />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};

export default UserList;
