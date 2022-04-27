require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.4",
  defaultNetwork: "development",
  networks: {
    development: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/" || "",
      chainId: process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : 97,
      accounts: ["0x6a76d52366a201b88402a32400b5727eaff5483baa5cbbde2ea9a068ca0d3378"]
    },
  },
  etherscan: {
    apiKey: process.env.SCAN_API_KEY,
  },
};
