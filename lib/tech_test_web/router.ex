defmodule TechTestWeb.Router do
  use TechTestWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", TechTestWeb do
    pipe_through :api

    get "/test", TestController, :index
    post "/order", OrderController, :index
    get "/orders", OrderController, :orders
  end

  scope "/", TechTestWeb do
    pipe_through :browser

    get "/", AppController, :index
    get "/*path", AppController, :index
  end
end
