const { ethers } = require("ethers");

const INFURA_ID ='6e88ce3571b54d10aada72c1a629d9ba';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI = [
    "function name() view reaturns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "event Transfer(address indexed from,address indexed to, uint amount)"
]
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const block = await provider.getBlockNumber();
    const transferEvents = await contract.queryFilter('Transfer',block - 1, block);
    console.log(transferEvents);
}
main();