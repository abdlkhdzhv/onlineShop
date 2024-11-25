import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MixesRout } from './routes/MixesRout.jsx'
import { KindsRout } from './routes/KindsRout.jsx'
import { FeedRout } from './routes/FeedRout.jsx'
import { FeedersRout } from './routes/FeedersRout.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mixes',
    element: <MixesRout />
  },
  {
    path: 'kinds',
    element: <KindsRout />
  },
  {
    path: 'feed',
    element: <FeedRout />
  },
  {
    path: 'feeders',
    element: <FeedersRout />
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>,
)
