import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Attestation {
  'attestationId' : string,
  'attestationPayload' : AttestationPayload,
  'attester' : string,
}
export interface AttestationPayload {
  'signature' : string,
  'schema' : string,
  'data' : Uint8Array | number[],
  'revocable' : boolean,
  'recipient' : string,
  'deadline' : bigint,
  'expirationTime' : bigint,
  'refUID' : string,
}
export interface anon_class_11_1 {
  'attest' : ActorMethod<[AttestationPayload, string], string>,
  'getAttestation' : ActorMethod<[string], [] | [Attestation]>,
  'getAttestationUids' : ActorMethod<[], Array<string>>,
  'getInitializer' : ActorMethod<[], Principal>,
}
export interface _SERVICE extends anon_class_11_1 {}
