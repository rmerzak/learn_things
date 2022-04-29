const { ethers } = require("ethers");

const INFURE_ID = "6e88ce3571b54d10aada72c1a629d9ba";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURE_ID}`
);

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const Contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  try {
    const name = await Contract.name();
    const symbol = await Contract.symbol();
    const totalSupply = await Contract.totalSupply();
    const balanceOf = await Contract.balanceOf(
      "0x748de14197922c4ae258c7939c7739f3ff1db573"
    );
    console.log(
      name +
        " symbole " +
        symbol +
        " total supply is " +
        `${ethers.utils.formatEther(totalSupply)} ETH`
    );
    console.log(`${ethers.utils.formatEther(balanceOf)}`);
  } catch (err) {
    () => {
      console.log(err);
    };
  }
};
main();
