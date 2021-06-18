const Telephone = artifacts.require("Telephone");
const Hacker = artifacts.require("Hacker");
const { expect } = require("chai");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Hacker", function ([_owner, _hacker]) {
  it("should change owner", async function () {
    const targetContract = await Telephone.deployed();
    const hackerContract = await Hacker.deployed();
    const result = await hackerContract.attack(targetContract.address, { from: _hacker });
    expect(result.receipt.status).to.equal(true);
    const targetOwner = await targetContract.owner();
    expect(targetOwner).to.equal(_hacker);
  });
});
