const hre = require("hardhat");

async function main() {
  const MarketSentiment = await hre.ethers.getContractFactory(
    "MarketSentiment"
  );
  const marketsentiment = await MarketSentiment.deploy();

  await marketsentiment.deployed();

  console.log("MarketSentiment deployed to:", marketsentiment.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
