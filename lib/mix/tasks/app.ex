defmodule Mix.Tasks.App do
  @moduledoc """
  React frontend compilation and bundling for production.
  """

  use Mix.Task
  require Logger

  @public_path "./priv/static/app"

  @doc """
  Compile and bundle frontend for prod
  """
  def run(_) do
    Logger.info("📦 - Installing NPM packages")
    System.cmd("yarn", ["install", "--silent"], cd: "./app")

    Logger.info("⚙️  - Compiling React frontend")
    System.cmd("yarn", ["build"], cd: "./app")

    Logger.info("🚛 - Moving dist folder to Phoenix at #{@public_path}")
    # First clean up any stale files from previous builds if any
    System.cmd("rm", ["-rf", @public_path])
    System.cmd("cp", ["-R", "./app/dist", @public_path])

    Logger.info("⚛️  - React frontend ready.")
  end
end
