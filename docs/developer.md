## Introduction

This article introduces the PADO attestation framework on the ICP network. The PADO attestations framework can be used according to the following process.

## Register schema

The link of backend canister：https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=i5qpq-jaaaa-aaaam-ab6ga-cai. You need to call `createSchema: (record {schemaString:text; context:text; name:text; description:text}) → (text)` method. 

* schemaString:  The actual schema string that describes the data structure of the attestations, represents the encoding form of schema data.
* context: A link to a description of the schema.
* name: The schema name.
* description: The description of the schema.

## Encode schema data

Encode attestation data according to schema.

## Attest

The link of backend canister: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=iix65-iiaaa-aaaam-ab6fq-cai. You need to call `attest: (record {signature:text; schema:text; data:vec nat8; revocable:bool; recipient:text; deadline:nat64; expirationTime:nat64; refUID:text}, attester:text) → (text)` method.

* signature: The attester signature of attestation. 

* schema: The schema id.
* data: The encoded data.
* revocable: Whether is can revoke.
* recipient: The user recipient principal.
* deadline: Deadline for attesting.
* expirationTime: The attestation expiration time.
* refUID: The association attestation uid. 
* attester: The attester principal.