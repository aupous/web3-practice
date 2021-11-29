// const util = require("ethereumjs-util");
// const contract = [
//   {
//     name: "OlympusTreasury",
//     address: "0x31F8Cc382c9898b273eff4e0b7626a6987C846E8",
//     events: [
//       "Deposit(address,uint256,uint256)",
//       "Withdrawal(address,uint256,uint256)",
//       "CreateDebt(address,address,uint256,uint256)",
//       "RepayDebt(address,address,uint256,uint256)",
//       "ReservesManaged(address,uint256)",
//       "ReservesUpdated(uint256)",
//       "ReservesAudited(uint256)",
//       "RewardsMinted(address,address,uint256)",
//       "ChangeQueued(uint8,address)",
//       "ChangeActivated(uint8,address,bool)",
//     ],
//   },
//   {
//     name: "OlympusBondDepository (DAI Bond)",
//     address: "0x575409F8d77c12B05feD8B455815f0e54797381c",
//     events: [
//       "BondCreated(uint256,uint256,uint256,uint256)", // deposit,payout,expires,priceInUSD
//       "BondRedeemed(address,uint256,uint256)", // recipient,payout,remaining
//       "BondPriceChanged(uint256,uint256,uint256)", // priceInUSD,internalPrice,debtRatio
//       "ControlVariableAdjustment(uint256,uint256,uint256,bool)", // initialBCV,newBCV,adjustment,addition
//     ],
//   },
//   {
//     name: "OlympusBondDepository (OHM/DAI SLP Bond)",
//     address: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
//     events: [
//       "BondCreated(uint256,uint256,uint256,uint256)", // deposit,payout,expires,priceInUSD
//       "BondRedeemed(address,uint256,uint256)", // recipient,payout,remaining
//       "BondPriceChanged(uint256,uint256,uint256)", // priceInUSD,internalPrice,debtRatio
//       "ControlVariableAdjustment(uint256,uint256,uint256,bool)", // initialBCV,newBCV,adjustment,addition
//     ],
//   },
//   {
//     name: "OlympusBondDepository (FRAX Bond)",
//     address: "0x8510c8c2B6891E04864fa196693D44E6B6ec2514",
//     events: [
//       "BondCreated(uint256,uint256,uint256,uint256)", // deposit,payout,expires,priceInUSD
//       "BondRedeemed(address,uint256,uint256)", // recipient,payout,remaining
//       "BondPriceChanged(uint256,uint256,uint256)", // priceInUSD,internalPrice,debtRatio
//       "ControlVariableAdjustment(uint256,uint256,uint256,bool)", // initialBCV,newBCV,adjustment,addition
//     ],
//   },
//   {
//     name: "OlympusBondDepository (FRAX/OHM SLP Bond)",
//     address: "0xc20CffF07076858a7e642E396180EC390E5A02f7",
//     events: [
//       "BondCreated(uint256,uint256,uint256,uint256)", // deposit,payout,expires,priceInUSD
//       "BondRedeemed(address,uint256,uint256)", // recipient,payout,remaining
//       "BondPriceChanged(uint256,uint256,uint256)", // priceInUSD,internalPrice,debtRatio
//       "ControlVariableAdjustment(uint256,uint256,uint256,bool)", // initialBCV,newBCV,adjustment,addition
//     ],
//   },
// ];

// async function main() {
//   //   let data = Buffer.from("Transfer(address,address,uint256)", "utf8");
//   let data = Buffer.from("CreateDebt(address,address,uint256,uint256)", "utf8");
//   let id = util.keccak256(data);

//   console.log(id.toString("hex"));
// }
// main();
// const getAddress = (address) => {
//   let str = address;
//   let n = 2;
//   for (let i = 2; i < str.length; i++) {
//     if (str[i] === "0") {
//       n++;
//     } else break;
//   }
//   return `0x${address.substring(n)}`;
// };
// console.log(
//   getAddress(
//     "0x000000000000000000000000000000000000000000000247bc04e4b0de4123456"
//   )
// );
// main();
// const str =
//   "0x000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000000000012f00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001";
// console.log(str.length);
// console.log(str.substring(2, 66));
// console.log(str.substring(66, 130));
// console.log(str.substring(130, 194));
// console.log(str.substring(194, 258));

const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/1a3a51c6d92d46ea9ed0c6681bb1a449"; // Your RPC URL with infura key goes here,i.e. https://mainnet.infura.io/YOUR_INFURA_API_KEY
const web3 = new Web3(rpcURL);
// const address = "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a"; // Your ethereum account address goes here
// web3.eth.getBalance(address).then(console.log);
web3.eth
  .getPastLogs({
    address: "0x31F8Cc382c9898b273eff4e0b7626a6987C846E8",
    topics: [
      "0x90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15",
    ],
    fromBlock: "0xd07f00",
    toBlock: "latest",
  })
  .then(console.log);
// web3.eth.getBlock(12687614).then(console.log);
// web3.eth
//   .getTransaction(
//     "0x548691f0d0c6e320da55e55e5687153b776e87d52132f1c76d1119bb3ee0a443"
//   )
//   .then(console.log);
// const a = 13664000;
// console.log(a.toString(16));
