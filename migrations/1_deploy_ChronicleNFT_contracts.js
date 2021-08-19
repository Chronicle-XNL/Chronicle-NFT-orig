const ChronicleNFT = artifacts.require("./ChronicleNFT.sol");

module.exports = async function (deployer, network, _addresses) {
  let proxyRegistryAddress = "";
  
  if (network === 'ropsten' || network === 'ropsten-fork') {
    proxyRegistryAddress = "0xD77fBD2757bee3c67E9D761B9f6F999639eCAFcF";
  } else if (network === 'aurora_mainnet' || network === 'aurora_mainnet-fork') {
    proxyRegistryAddress = "0xD77fBD2757bee3c67E9D761B9f6F999639eCAFcF";
  } else if (network === 'mainnet' || network === 'mainnet-fork') {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  } else {
    throw new Error('No proxyRegistry on this network')
  }
  
  await deployer.deploy(ChronicleNFT, proxyRegistryAddress, {gas: 5000000});
};
