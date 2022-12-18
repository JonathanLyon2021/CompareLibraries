const {ethers} = require('ethers');
const rpcURL = 'https://cloudfare-eth.com/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEth}`);
}
main();

////////////////////////////////
//Second part reading the Smart Contract//
const {ethers} = require('ethers');
const rpcURL = 'https://cloudfare-eth.com/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    ];

const address = '0x6B73CEb1Cd57C711aFbC4624D062b0F6ff3985f73';
const contract = new ethers.Contract(address, ERC20_ABI, provider);

