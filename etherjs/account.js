

const { ethers } = require("ethers");

const INFURA_ID = '6e88ce3571b54d10aada72c1a629d9ba';

const Provider =  new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const address = '0x141E6c2e5A72d14a25869d9b5C0C75df2741eD60'
const main = async () => {
    const balance = await Provider.getBalance(address);

    try {
        const block = await Provider.getBlock("latest");
        console.log(block)
    }
    catch (err) { () => console.log(err)}
    console.log(`\n ETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`);
}
main();