# pado-icp
Enable PADO (extension) on Internet Computer (under development...)

## Milestone 1

Check our intro canister at: https://bupby-pqaaa-aaaam-abykq-cai.icp0.io/

Check our architecture design at: https://github.com/pado-labs/pado-icp/blob/main/docs/Architecture.md

## Milestone 2

In this milestone, we integrate the [Plug Wallet](https://plugwallet.ooo/) with the PADO extension, allowing the users to submit PADO attestation to the Internet Computer (IC). Note we will create a public attestation service in the final milestone, which enables users/dapps to access the submitted attestations in a transparent and visible manner.

The user workflow is as follows:
1. By visiting the web page of the front end, the user clicks the "connect plug" button to authorize the plug wallet connection.
2. The user clicks the "connect PADO" button, where the PADO extension is enabled on the new page.
3. The user creates an attestation at the PADO extension. Note the simplest way is to create an identity proof for checking the KYC status in Binance web data, and the user can create arbitrary attestations after he/she connects with various data sources.
4. Once the attestation is created successfully, a proof card is shown in the "proof" tab of the PADO extension. The user clicks the "up arrow" on the proof card to submit the attestation to IC. After a few seconds, there is a logo of ICP shown on the proof card.
5. Now you can check the submitted data by visiting the backend canister, and submitting a query at the get function with the plug wallet account ID.
