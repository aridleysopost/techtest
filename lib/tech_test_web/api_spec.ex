defmodule TechTestWeb.ApiSpec do
  @moduledoc """
  Open Api Specs used to generate openapi.json and TypeScript schema
  """
  alias OpenApiSpex.{Info, OpenApi, Paths, Server}
  alias TechTestWeb.{Endpoint, Router}
  @behaviour OpenApi

  @impl OpenApi
  def spec do
    %OpenApi{
      servers: [
        # Populate the Server info from a phoenix endpoint
        Server.from_endpoint(Endpoint)
      ],
      info: %Info{
        title: "Donut Ordering Form",
        version: "1.0"
      },
      # Populate the paths from a phoenix router
      paths: Paths.from_router(Router)
    }
    # Discover request/response schemas from path specs
    |> OpenApiSpex.resolve_schema_modules()
  end
end
