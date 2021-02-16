# @fuseio/fuse-swap-default-token-list

[![Tests](https://github.com/Uniswap/token-lists/workflows/Tests/badge.svg)](https://github.com/Uniswap/default-token-list/actions?query=workflow%3ATests)
[![npm](https://img.shields.io/npm/v/@uniswap/default-token-list)](https://unpkg.com/@uniswap/default-token-list@latest/)

This NPM module and GitHub repo contains the default token list used in the Fuseswap interface. It extends the original @uniswap/default-token-list with the bridged tokens on the fuse network.

## Adding a token

To request that we add a token to the list you can:
- [file an issue on Uniswap](https://github.com/Uniswap/default-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).
- [file an issue on Fuseswap](https://github.com/fuseio/default-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

## Semantic versioning

Lists include a version field, which follows semantic versioning.

List versions must follow the rules:
- Increment major version when tokens are removed
- Increment minor version when tokens are added
- Increment patch version when tokens already on the list have minor details changed (name, symbol, logo URL, decimals)

Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

### Disclaimer

Note filing an issue does not guarantee addition to this default token list.
We do not review token addition requests in any particular order, and we do not
guarantee that we will review your request to add the token to the default list.

