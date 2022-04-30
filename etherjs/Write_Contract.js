const { ethers } = require("ethers");

const INFURA_ID = '6e88ce3571b54d10aada72c1a629d9ba';

const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

const acount2 = '0x141E6c2e5A72d14a25869d9b5C0C75df2741eD60';
const acount1 = '0xC8E52c150EcaD9f1C072354d99086D7E7b740c9b';

const PrivateKey1 = '45550d1fa3997cf22676ec41737378c7e36c534f3eac713ce98274c7ba96f239';
const PrivateKey2 = '18f7726a4689d706a2e17557b64b01e0c5af7673b40c1a307c46960f689d7e00';

const wallet = new ethers.Wallet(PrivateKey2,  provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address _to, uint amount) returns (bool)",
];

const address = '0xa36085F69e2889c224210F603D836748e7dC0088';

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const balance = await contract.balanceOf(acount1);

    console.log(`Reading from ${address}\n`);
    console.log(`Balance of sender: ${balance}`);
    console.log(`${ethers.utils.formatEther(balance)}`);

    const ContractWithWallet = contract.connect(wallet);
    const tx = await ContractWithWallet.transfer(acount2, balance);

    await tx.wait();
    console.log(tx);

    const balanceOfSender = await contract.balanceOf(acount1);
    const balanceOfReciever = await contract.balanceOf(acount2);
    console.log(`Balance of sender: ${ethers.utils.formatEther(balanceOfSender)}`);
    console.log(`Balance of reciever: ${ethers.utils.formatEther(balanceOfReciever)}`);
}
main();