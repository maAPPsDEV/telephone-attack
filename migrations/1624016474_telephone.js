const Telephone = artifacts.require("Telephone");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Telephone);
};
