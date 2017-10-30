var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var People = artifacts.require("./People.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(People);
};
