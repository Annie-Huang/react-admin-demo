import {
  DataTable,
  FunctionField,
  List,
  ReferenceField,
  SimpleList,
} from 'react-admin';

const PostList = () => {
  // <List> is the component that will fetch the data from the backend.
  return (
    <List>
      <DataTable>
        <DataTable.Col source='id' />
        <DataTable.Col source='title' label='Post Title' />
        {/*<DataTable.Col source='body' />*/}
        <FunctionField
          source='body'
          label='Excerpt'
          render={(record) => `${record.body.substring(0, 50)}...`}
        />
        <DataTable.Col source='userId'>
          <ReferenceField source='userId' reference='users' />
        </DataTable.Col>
      </DataTable>

      {/*<SimpleList*/}
      {/*  primaryText={(record) => record.title}*/}
      {/*  secondaryText={(record) => record.body}*/}
      {/*/>*/}
    </List>
  );
};

export default PostList;
