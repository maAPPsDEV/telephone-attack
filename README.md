# Solidity Game - Telephone Attack

_Inspired by OpenZeppelin's [Ethernaut](https://ethernaut.openzeppelin.com), Telephone Level_

⚠️Do not try on mainnet!

## Task

There is a contract written as the source code below.

1. Claim ownership of the contract.

_Hint:_

1. [**solhint**](https://github.com/protofire/solhint) will give you information where your attention is required.

## What will you learn?

1. Difference between `tx.origin` vs `msg.sender`

## What is the most difficult challenge?

**Never use `tx.origin` for authorization.** 🤔

What is `tx.origin`? and what is the difference with `msg.sender`?

See the description in [Solidity Doc](https://docs.soliditylang.org/en/v0.8.5/security-considerations.html?highlight=tx.origin#tx-origin)

- `tx.origin`
  - The _original user wallet_ that initiated the transaction
  - The origin address of potentially _an entire chain_ of transactions and calls
  - **Only user wallet addresses can be the `tx.origin`**
  - A contract address can never be the `tx.origin`
- `msg.sender`
  - The _immediate sender_ of this _specific_ transaction or call
  - **Both user wallets and smart contracts can be the `msg.sender`**

Example:

<figure>
<img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHw%3D&w=1000&q=80" alt="Trulli" style="width:100%">
<figcaption align = "center">Where <b>tx.origin</b>, <b>msg.sender</b> is observed in the context of the very last node</figcaption>
</figure>

> Tip: `msg.sender` checks where the external function call directly came from. `msg.sender` is typically who you want to authenticate. 😄

## Source Code

⚠️This contract contains a bug or risk. Do not use on mainnet!

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract Telephone {
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}

```

## Configuration

### Install Truffle cli

_Skip if you have already installed._

```
npm install -g truffle
```

### Install Dependencies

```
yarn install
```

## Test and Attack!💥

### Run Tests

```
truffle develop
test
```

You should take ownership of the target contract successfully.

```
truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: Hacker
    √ should change owner (297ms)


  1 passing (373ms)

```
