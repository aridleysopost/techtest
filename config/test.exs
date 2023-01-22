import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :techtest, TechTestWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "iAxo1BlDSeJOKsHJQ6eVftSwFKyiepdkzSDXMsDjhS1eCQXyz05jRCdv/+3CcBVR",
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
