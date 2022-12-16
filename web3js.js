const Web3 = require('web3');
const rpcURL = 'https://cloudfare-eth.com/';
const web3 =  new Web3(rpcURL);

const address = '0x7923eF1B53EB2cBbf8643f835AAdD32f9f1dD240';

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance);
})

////////////////
//Part 2 how we communicate with smart contracts

const Web3 = require('web3');
const rpcURL = 'https://cloudfare-eth.com/';
const web3 =  new Web3(rpcURL);

const abi = [{"constant":true,"inputs":[],"name":"mintingFinished","output"]
const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
              
const contract = new web3.ethContract(abi, address)
             
contract.methods.totalSupply().call((err, result) => {console.log(result) })
contract.methods.name().call((err, result) => {console.log(result) })
contract.methods.symbol().call((err, result)  => {console.log(result) })
contract.methods.balanceOf('0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e').call((err, result)  => {console.log(result) })
             
             


