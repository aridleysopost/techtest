import axios from 'axios'
import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
} from '@tanstack/react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Root from './routes/root'

const defaultQueryFn: QueryFunction = async ({queryKey: [url]}) => {
  const {data} = await axios.get(url as string)
  return data
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
