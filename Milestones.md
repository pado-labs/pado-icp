# pado-icp
Enable PADO (extension) on Internet Computer

## Milestone 3 

In this milestone, we complete the integration work of PADO client with the IC network, including the establishment of a basic attestation framework which can be used by application builders to manage any structural attestations on IC. Note the basic attestation framework currently supports the off-chain signature verification for attestation builders, since the signature algorithms ([ERC-712](https://eips.ethereum.org/EIPS/eip-712)) of PADO attestors are incompatible with the supported types on the IC network. 

A specific PADO client is provided to enable users to submit their attestations to the IC network. 


## Milestone 2

In this milestone, we integrate the [Plug Wallet](https://plugwallet.ooo/) with the [PADO extension](https://github.com/pado-labs/pado-icp/blob/main/PADO_extension_ICP_dev.zip), allowing the users to submit PADO attestation to the Internet Computer (IC). Note we will create a public attestation service in the final milestone, which enables users/dapps to access the submitted attestations in a transparent and visible manner. Note due to integration reasons, the PADO extension here is a pre-release version which is not for product purposes, and the formal version will be released after the final milestone completion.

### Preparation
* Download the repo:
```sh
  git clone git@github.com:pado-labs/pado-icp.git
```
* Install and build
```sh
yarn install
```
```sh
npm run build
```
* Then you can start the local IC network
```sh
dfx start --clean
```
* Now you can deploy the canisters locally in another terminal,
go to your "/pado-icp" directory, and use the command:
```sh
dfx deploy
```
There will be two canisters' URLs shown in the terminal. The frontend canister is where users operate, and the backend canister is the entrance where people can make queries about the submitted attestations with their wallet Account ID.

Note make sure your DFX version is exactly **0.15.0**. Otherwise, you can check the related [commands](https://internetcomputer.org/docs/current/developer-docs/setup/install/) and uninstall your reinstall the DFX.

### User Operations
The user workflow is as follows:
0. unzip and enable the PADO extension in the Chrome browser from the above link.
1. By visiting the web page of the front-end canister, the user clicks the "connect plug" button to authorize the plug wallet connection.
2. The user clicks the "connect PADO" button, where the PADO extension is enabled on the new page.
3. The user creates an attestation at the PADO extension. Note the simplest way is to create an identity proof for checking the KYC status in Binance web data, and the user can create arbitrary attestations after he/she connects with various data sources.
4. Once the attestation is created successfully, a proof card is shown in the "proof" tab of the PADO extension. The user clicks the "up arrow" on the proof card to submit the attestation to IC. After a few seconds, there is a logo of ICP shown on the proof card.
5. Now you can check the submitted data by visiting the backend canister and submitting a query at the get function with the plug wallet account ID.

## Milestone 1

Check our intro canister at: https://bupby-pqaaa-aaaam-abykq-cai.icp0.io/

Check our architecture design at: https://github.com/pado-labs/pado-icp/blob/main/docs/Architecture.md
