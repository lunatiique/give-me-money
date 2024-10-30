const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
 
const provider = new HDWalletProvider(
  "decrease banana sure target civil label advance snake club imitate position neck",
  // remember to change this to your own phrase!
  "https://sepolia.infura.io/v3/009e0fca56844ba48ed8d89c58051e3d"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();