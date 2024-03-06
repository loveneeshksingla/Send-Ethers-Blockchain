// 0x1fDfBCf7B84f2CEd40dA9a144184AFEF53Fd0E44
const hre = require("hardhat");

const main = async () =>  {
 
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("transactions deployed to:", transactions.address);
}


const runMain = async () => {
  try{
      await main();
      process.exit(0);
  }catch(err){
      console.log("error", err);
      process.exit(1);
  }
}


runMain();