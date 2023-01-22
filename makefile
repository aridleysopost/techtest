dev:
	make -j 2 dev-server dev-app 

dev-app:
	cd ./app && yarn dev

dev-server:
	mix phx.server

setup:
	mix deps.get
	cd app && yarn install --frozen-lockfile

api-specs:
	mix openapi.spec.json --spec TechTestWeb.ApiSpec
	npx openapi-typescript openapi.json --output app/src/api/schema.ts --path-params-as-types