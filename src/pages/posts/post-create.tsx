import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const PostCreate = () => {
  return (
    <Create>
      {/* Below is pretty much the same form as post-edit.tsx, except for the id field */}
      <SimpleForm>
        <ReferenceInput source='userId' reference='users' />
        <TextInput source='title' />
        <TextInput source='body' />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
