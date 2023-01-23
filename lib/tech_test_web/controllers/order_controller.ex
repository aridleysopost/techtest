defmodule TechTestWeb.OrderController do
  use TechTestWeb, :controller
  use OpenApiSpex.ControllerSpecs

  alias TechTestWeb.Schemas.Order.{OrderResponse, OrderParams, OrdersResponse}
  alias TechTest.Order

  tags ["order"]

  operation(:index,
    summary: "Order a number of donuts",
    responses: [
      ok: {"Order", "application/json", OrderResponse}
    ],
    parameters: [
      name: [
        in: :body,
        description: "Name of orderer",
        type: :string,
        example: "Oswin McDonald"
      ],
      quantity: [
        in: :body,
        description: "Quantity Ordered",
        type: :integer,
        example: 3
      ]
    ],
    request_body: {"Order params", "application/json", OrderParams}
  )

  def index(conn, %{"name" => name, "quantity" => quantity}) do
    TechTest.DonutServer.add_order(%Order{name: name, quantity: quantity})
    json(conn, %{data: %{hello: "world"}})
  end

  operation(:orders,
    summary: "Show the list of currently ordered donuts",
    responses: [
      ok: {"Order", "application/json", OrdersResponse}
    ]
  )

  def orders(conn, _params) do
    orders = TechTest.DonutServer.list_orders()

    json(conn, %{data: %{orders: orders}})
  end
end
