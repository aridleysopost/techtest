defmodule TechTestWeb.AppController do
  use TechTestWeb, :controller

  @app_path Application.app_dir(:techtest, "priv/static/app/index.html")

  def index(conn, _params) do
    conn
    |> put_resp_content_type("text/html")
    |> send_file(200, @app_path)
  end
end
