defmodule TechTest.DonutServer do
  use GenServer

  def start_link(default) when is_list(default) do
    GenServer.start_link(__MODULE__, default, name: DonutServer)
  end

  def add_order(element) do
    GenServer.cast(DonutServer, {:add_order, element})
  end

  def list_orders() do
    GenServer.call(DonutServer, :list_orders)
  end

  @impl true
  def init(orders) do
    {:ok, orders}
  end

  @impl true
  def handle_cast({:add_order, element}, state) do
    {:noreply, [element | state]}
  end

  @impl true
  def handle_call(:list_orders, _from, state) do
    {:reply, state, state}
  end
end
