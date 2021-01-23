NUM_WORDS = $(shell cat config.json | jq -r ".numberOfWords")
EXCLUDED_WORDS = $(shell cat config.json | jq -r ".excludeWords[]")


.PHONY: setup
setup:
	curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
	brew install jq
	poetry config virtualenvs.create true --local
	poetry shell
.PHONY: init
init:
	poetry install
	poetry env info

.PHONY: unit-test
unit-test:
	poetry run pytest tests/unit --junitxml=report.xml


.PHONY: lint
lint:
	poetry run flake8 src/functionbeat_indexer --max-line-length 120

.PHONY: clean
clean:
	rm -f .coverage
	rm -f coverage.xml
	rm -f report.xml
	rm -f requirements.txt
	rm -rf .eggs
	rm -rf .pytest_cache
	rm -rf htmlcov
	rm -rf build
	rm -rf dist
	rm -rf src/findwords.egg-info

.PHONY: coverage
coverage:
	poetry run pytest \
 	--verbose \
 	--cov-report term-missing \
 	--cov-report html \
	--cov=lambda_name \
	tests

.PHONY: run
run:
	python ./src/findwords/main.py ${NUM_WORDS} ${EXCLUDED_WORDS}