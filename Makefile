install: install-deps

run: bin/brain-games.js

install-deps: npm ci

lint: npx eslint .

publish: npm publish --dry-runs