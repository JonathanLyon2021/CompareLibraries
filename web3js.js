const Web3 = require('web3');
const rpcURL = 'https://cloudfare-eth.com/';
const web3 =  new Web3(rpcURL);

const address = '0x7923eF1B53EB2cBbf8643f835AAdD32f9f1dD240';

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance);
})
