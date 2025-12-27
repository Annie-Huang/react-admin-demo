import { DataTable, EditButton, List } from 'react-admin';

const UserList = () => {
  return (
    <List>
      <DataTable>
        <DataTable.Col source='id' />
        <DataTable.Col source='name' />
        <DataTable.Col source='email' />
        <DataTable.Col source='phone' />
        <EditButton />
      </DataTable>
    </List>
  );
};

export default UserList;
