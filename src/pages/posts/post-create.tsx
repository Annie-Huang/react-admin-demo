import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const PostCreate = () => {
  return (
    <Create>
      {/* Below is pretty much the same form as post-edit.tsx, except for the id field
          No point to allow the user to choose the id, the system will just ignore it and use the new id by increasing the highest id by 1
      */}
      <SimpleForm>
        {/*<TextInput source='id' />*/}
        <ReferenceInput source='userId' reference='users' />
        <TextInput source='title' />
        <TextInput source='body' multiline rows={5} />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
