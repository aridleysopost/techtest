import {useQuery} from '../api'
import {OrderTable} from '../components/OrderTable'

export default function OrderList() {
  const {data, isLoading} = useQuery('/api/orders')

  console.log(data)
  return (
    <div className="App">
      <h1>Donut Order List</h1>
      <div className="card">
        {!isLoading && <OrderTable orders={data?.data?.orders} />}
      </div>
    </div>
  )
}
