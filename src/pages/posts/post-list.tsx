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

        {/*<FunctionField*/}
        {/*  source='body'*/}
        {/*  label='Excerpt'*/}
        {/*  render={(record) => `${record.body.substring(0, 50)}...`}*/}
        {/*/>*/}

        {/* https://marmelab.com/react-admin/FunctionField.html#props
            Tip: You don’t need to use <FunctionField> if you are using <DataTable>, as the <DataTable.Col> component directly provides a render prop that works similarly to <FunctionField>.
         */}
        <DataTable.Col
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
