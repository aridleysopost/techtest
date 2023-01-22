defmodule TechTestWeb.TestController do
  use TechTestWeb, :controller
  use OpenApiSpex.ControllerSpecs

  alias TechTestWeb.Schemas.Test.{TestResponse}

  tags ["test"]

  operation(:index,
    summary: "Test",
    responses: [
      ok: {"Test", "application/json", TestResponse}
    ]
  )

  def index(conn, _params) do
    json(conn, %{data: %{hello: "world"}})
  end
end
