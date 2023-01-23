defmodule TechTestWeb.Schemas.Order do
  @moduledoc """
  Provides examples for OpenApiSpex
  """

  alias OpenApiSpex.Schema

  defmodule OrderParams do
    @moduledoc false

    require OpenApiSpex

    OpenApiSpex.schema(%{
      description: "Order Schema",
      type: :object,
      properties: %{
        name: %Schema{type: :string, description: "Name of the person ordering the donuts"},
        quantity: %Schema{type: :integer, description: "The number of donuts ordered"}
      },
      required: [:name, :quantity],
      example: %{"name" => "Jeff Daveson", "quantity" => 72}
    })
  end

  defmodule OrderResponse do
    @moduledoc false

    require OpenApiSpex

    OpenApiSpex.schema(%{
      description: "Order response schema",
      type: :object,
      properties: %{
        success: %Schema{type: :boolean}
      },
      example: %{
        "success" => true
      }
    })
  end

  defmodule OrdersResponse do
    @moduledoc false

    require OpenApiSpex

    OpenApiSpex.schema(%{
      description: "Test Response Schema",
      type: :object,
      properties: %{
        data: %Schema{
          type: :object,
          properties: %{
            orders: %Schema{
              type: :array,
              items: %Schema{
                type: :object,
                properties: %{name: %Schema{type: :string}, quantity: %Schema{type: :integer}}
              }
            }
          }
        }
      },
      example: %{
        "data" => %{"orders" => [%{"name" => "Jeff", "quantity" => 5}]}
      }
    })
  end
end
