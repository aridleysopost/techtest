defmodule TechTestWeb.Schemas.Test do
  @moduledoc """
  Provides examples for OpenApiSpex
  """

  alias OpenApiSpex.Schema

  defmodule Test do
    @moduledoc false

    require OpenApiSpex

    OpenApiSpex.schema(%{
      description: "Test Schema",
      type: :object,
      properties: %{
        hello: %Schema{type: :string, description: "Test Property (world)"}
      },
      required: [:hello],
      example: %{"hello" => "world"}
    })
  end

  defmodule TestResponse do
    @moduledoc false

    require OpenApiSpex

    OpenApiSpex.schema(%{
      description: "Test Response Schema",
      type: :object,
      properties: %{
        data: Test
      },
      example: %{
        "data" => %{"hello" => "world"}
      }
    })
  end
end
