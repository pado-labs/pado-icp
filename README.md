# PADO-ICP
![avatar](./docs/pado_icp_banner.jpg)

## Enable zkAttestations on IC network

The inherent characteristics of blockchain technology impose restrictions on its capacity to authenticate data from external sources, 
thereby greatly limiting the scope of potential applications and the exploration of value within Web3. Hence, the necessity arises for
a universal protocol to create attestations, which are essential for confirming the credibility of information. 
Attestations serve a crucial function whenever there's a need to substantiate or authenticate something.

PADO is a decentralized zk-attestation and computation protocol, with the vision
to bridge Web2 and Web3 through authenticated data flow and a network for privacy-preserving computations.

The main functionalities provided by this project are creating attestations from the PADO extension, and recording attestations on the IC network.
In addition, the basic attestation framework created in this project supports developers in creating their attestation-based dApps.

## For Users
To create various data attestations and recorded attestations on the IC network, users can follow the bellowing procedures.
1. Visit the [PADO-ICP website](https://bupby-pqaaa-aaaam-abykq-cai.icp0.io/) to manually download the PADO client (the IC-specific version). Uncompress the downloaded PADO extension, and open it with Chrome browser from chrome://extensions/
2. PADO extension is simple and easy to use. The IC-specific version supports the Plug wallet for end users to create their local account. Users can also check this [video](https://youtu.be/3FjqI6uBVEs), or follow the [tutorials](https://docs.padolabs.org/category/tutorials) to freely create any attestations from connected data sources.
3. To submit any attestations to the IC network, simply click the **up-arrow** button on the attestation card, and straightforwardly follow the process to submit the attestation to the IC network.
![image](https://github.com/pado-labs/pado-icp/assets/17900089/393eded2-074f-4eee-8a75-e75c94ae396f)

4. Users can view the attestation page from [PADO-ICP website](https://bupby-pqaaa-aaaam-abykq-cai.icp0.io/) to see the recorded attestations on the IC network. 
    

## For Developers

The attestation framework can be simply used by developers. The [architecture](./docs/Architecture.md) of this project is pre-defined, 
and this [doc](./docs/developer.md) gives more explanation on leveraging the framework canisters.

The current framework supports the off-chain signature verification on ERC712, which is a typed structured hashing and signature algorithm commonly used within Ethereum ecosystem. The core advantage of this signature algorithm is to improve the readability and transparency of the off-chain message hash-then-sign operation.

Developers can use  `ethers.utils.signTypedData` and `ethers.utils.verifyTypedData` to sign and verify EIP712 signatures, as documented [here](https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyTypedData) and you can find an example [here](https://github.com/centrehq/verite/blob/main/packages/verite/test/lib/verifier/result.test.ts#L46).

There are some specific definitions and structures within the scope of the basic attestation framework.

### Definitions in Attestation Framework
**Domain**
The `domain` parameter is pre-defined [here](https://github.com/pado-labs/pado-icp/blob/main/src/pages/AttestationDetail/index.jsx#L28) with its value as:
```
 const domain = {
      name: "PermissionedEIP712Proxy",
      version: "0.1",
      chainId: 80001,
      verifyingContract: "0x0028D4d3E077287e38a674FCBFe092B216809e1D",
    };
```
And the unchangable parameter `domain` is a specific configuration for the ICP network. Developers should use the same value in their attestation payload.

**Types**
The `types` parameter is pre-defined [here](https://github.com/pado-labs/pado-icp/blob/main/src/pages/AttestationDetail/index.jsx#L34) with its value as:
```
const types = {
      Attest: [
        {
          name: "schema",
          type: "string",
        },
        {
          name: "recipient",
          type: "string",
        },
        {
          name: "expirationTime",
          type: "uint64",
        },
        {
          name: "revocable",
          type: "bool",
        },
        {
          name: "refUID",
          type: "bytes32",
        },
        {
          name: "data",
          type: "bytes",
        },
        {
          name: "deadline",
          type: "uint64",
        },
      ],
    };
```
And the unchangable parameter `types` is a pre-defined meta-data about the attestation structure. Developers should use the same definitions in their attestation payload. you can find the definitions of the related fields in this [doc](./docs/developer.md).

### Create and Access on-chain Attestations 

You can freely create any attestation schema via the provided backend [canister A](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=i5qpq-jaaaa-aaaam-ab6ga-cai). 

Once the schema is created, the local attestations shall be generated strictly by the created schema, with the specified structures in the EIP712 signature payload.

And in your dApp, you can use [canister B](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=iix65-iiaaa-aaaam-ab6fq-cai) to submit attestations (by single one) to the IC, and read the submitted attestations with relevant APIs.

We also provide a simple attestation [page](https://bupby-pqaaa-aaaam-abykq-cai.icp0.io/attestationsList?canisterId=null) to manually view the attestations created with all schemas.
## Project History
The milestones for this project are documented [here](./milestones.md). 





