.PHONY: dev
dev:
	yarn run dev

.PHONY: up
up:
	devbox services start

.PHONY: down
down:
	devbox services stop
