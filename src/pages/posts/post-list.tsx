import { DataTable, List, ReferenceField } from 'react-admin';

const PostList = () => (
  <List>
    <DataTable>
      <DataTable.Col source='id' />
      <DataTable.Col source='title' />
      <DataTable.Col source='body' />
      <DataTable.Col source='userId'>
        <ReferenceField source='userId' reference='users' />
      </DataTable.Col>
    </DataTable>
  </List>
);

export default PostList;
