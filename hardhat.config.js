require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.10",
    networks: {
        sepolia: {
            url: process.env.ALCHEMY_SEPOLIA_PROVIDER,
            accounts: [process.env.PRIVATE_KEY],
            gas: 8000000, // Set a suitable gas limit
        },
    },
};
