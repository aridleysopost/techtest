import {DonutOrderForm} from '../components/DonutOrderForm'

export default function Root() {
  return (
    <div className="App">
      <h1>Donut Orderer</h1>
      <div className="card">
        <DonutOrderForm />
      </div>
    </div>
  )
}
