import { Admin, ListGuesser, Resource } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    {/* The reason we got 'posts' for name because of https://jsonplaceholder.typicode.com/posts
        After you add below, you can see the posts already displayed in table with sorting and pagination
        in http://localhost:5173/#/posts
    */}
    <Resource name='posts' list={ListGuesser} />
  </Admin>
);
