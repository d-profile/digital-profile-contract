const hre = require("hardhat");

async function main() {
  const IdentityFactory = await hre.ethers.getContractFactory("IdentityFactory");
  const identityFactory = await IdentityFactory.deploy();

  await identityFactory.deployed();

  console.log("Identity Factory deployed to:", identityFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
