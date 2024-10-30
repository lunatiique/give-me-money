import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x430233fB36617Ae2773F8641b2050954f65E7b31"
);
 
export default instance;