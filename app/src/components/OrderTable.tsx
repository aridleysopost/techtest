import type {components} from '../api/schema'
type Order = Exclude<
  Required<components['schemas']['OrdersResponse']['data']>,
  undefined
>['orders'][number]

type OrderTableProps = {
  orders: Order[] | undefined
}

export const OrderTable: React.FC<OrderTableProps> = ({orders}) => {
  console.log(orders)
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Quantity</td>
        </tr>
      </thead>
      {orders?.map(order => (
        <OrderTableRow order={order} />
      ))}
    </table>
  )
}

type OrderTableRowProps = {
  order: Order
}

const OrderTableRow: React.FC<OrderTableRowProps> = ({order}) => {
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.quantity}</td>
    </tr>
  )
}
