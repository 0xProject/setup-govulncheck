# setup-govulncheck

Install [govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck).

## Requirements

This action expects Golang to be already installed.

## Example

```yaml
name: golang

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-go@v3
      - uses: actions/checkout@v3
      - uses: 0xProject/setup-govulncheck@v1
      - run: govulncheck ./...

```
