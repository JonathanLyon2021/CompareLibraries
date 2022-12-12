const {ethers} = require('ethers');
const rpcURL = 'https://cloudfare-eth.com/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = '0xx73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEth}`);
}
main();
