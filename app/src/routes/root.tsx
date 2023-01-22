import {useQuery} from '../api'

export default function Root() {
  const {data, isLoading} = useQuery('/api/test')

  return (
    <div className="App">
      <h1>Donut Orderer</h1>
      <div className="card">
        <span>Hello {isLoading ? '...' : data?.data?.hello}</span>
      </div>
    </div>
  )
}
