const { ethers, providers } = require("ethers");

const INFURA_ID = '6e88ce3571b54d10aada72c1a629d9ba';
const provider = ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () => {
    // const latest = await provider.getBlockNumber();

    // console.log(`Block Number: ${latest}`);

    const { block } = await provider.getBlock();

    console.log(block);
    //const info = await provider.getBlock(100004);
    //console.log(info);
}