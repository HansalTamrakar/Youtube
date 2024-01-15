import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Components/utils/store';
import { createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage';
import { RouterProvider } from 'react-router-dom';
import Main from './Components/Main';


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />
      }
      ,
      {
        path: "watch",
        element: <WatchPage />
      }

    ]
  }

])
function App() {
  return (

    <div>
      <Head />
      <RouterProvider router={AppRouter}>
        <Body />
      </RouterProvider>

    </div>


  );
}


export default App;
