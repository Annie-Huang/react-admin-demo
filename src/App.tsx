import {
  Admin,
  // EditGuesser,
  // ListGuesser,
  Resource,
  // ShowGuesser,
} from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import PostList from './pages/posts/post-list.tsx';
import UserList from './pages/users/user-list.tsx';
import PostShow from './pages/posts/post-show.tsx';
import UserShow from './pages/users/user-show.tsx';
import PostEdit from './pages/posts/post-edit.tsx';
import UserEdit from './pages/users/user-edit.tsx';
import PostCreate from './pages/posts/post-create.tsx';
import UserCreate from './pages/users/user-create.tsx';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import HomePage from './pages/homepage.tsx';
import { authProvider } from './authProvider.ts';

export const App = () => (
  // <Admin layout={Layout} dataProvider={dataProvider}>
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider} // you will get a login page in the http://localhost:5173/ page.
  >
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

    {/* Edit button is on the top right corner of each show page. */}
    {/*<Resource name='posts' list={PostList} show={PostShow} edit={EditGuesser} />*/}

    {/* The backend does not actually get added when we create a new record, so the list will not show the extra record after it's adde. */}
    <Resource
      icon={ArticleIcon}
      name='posts'
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
    />

    {/*<Resource name='users' list={UserList} show={ShowGuesser} />*/}
    {/*<Resource name='users' list={UserList} show={UserShow} edit={EditGuesser} />*/}
    {/*<Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />*/}
    <Resource
      icon={PersonIcon}
      name='users'
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);
