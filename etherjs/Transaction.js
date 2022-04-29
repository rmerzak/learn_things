const { ethers, providers } = require("ethers");

const INFURE_ID = '6e88ce3571b54d10aada72c1a629d9ba';
const Provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/6e88ce3571b54d10aada72c1a629d9ba`);

const Address1 = '0x141E6c2e5A72d14a25869d9b5C0C75df2741eD60';
const Address2 = '0xC8E52c150EcaD9f1C072354d99086D7E7b740c9b';

const PrivateKey1='45550d1fa3997cf22676ec41737378c7e36c534f3eac713ce98274c7ba96f239';

const Wallet = new ethers.Wallet(PrivateKey1, Provider);

const main = async () => {
    // Show acount 1 balance befor transfer
    const sender = await Provider.getBalance(Address1);
    // Show acount 2 balance befor transfer
    const rec = await Provider.getBalance(Address2);
    console.log(`${ethers.utils.formatEther(sender)}`);
    console.log(`${ethers.utils.formatEther(rec)}`);
    //Send Ether
    const tx = await Wallet.sendTransaction({to:Address2 
        , value: ethers.utils.parseEther("0.025")});

        await tx.wait();
        console.log(tx);
    // Show acount 1 balance befor transfer
    const send = await Provider.getBalance(Address1);
    // Show acount 2 balance befor transfer
    const recv = await Provider.getBalance(Address2);
        console.log(`${ethers.utils.formatEther(send)}`);
        console.log(`${ethers.utils.formatEther(recv)}`);
};

main();