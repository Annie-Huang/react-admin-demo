import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import PostList from './pages/posts/post-list.tsx';
import UserList from './pages/users/user-list.tsx';
import PostShow from './pages/posts/post-show.tsx';

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    {/* The reason we got 'posts' for name because of https://jsonplaceholder.typicode.com/posts
        After you add below, you can see the posts already displayed in table with sorting and pagination
        in http://localhost:5173/#/posts
    */}
    {/*<Resource name='posts' list={ListGuesser} />*/}

    {/* Now we got control on the list, e.g. change the columns order to display
        ShowGuesser allow you to click to the row display the whole record in
        http://localhost:5173/#/posts/2/show
     */}
    {/*<Resource name='posts' list={PostList} show={ShowGuesser} />*/}

    <Resource name='posts' list={PostList} show={PostShow} />
    <Resource name='users' list={UserList} />
  </Admin>
);
