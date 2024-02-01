export const idlFactory = ({ IDL }) => {
  const AttestationPayload = IDL.Record({
    'signature' : IDL.Text,
    'schema' : IDL.Text,
    'data' : IDL.Vec(IDL.Nat8),
    'revocable' : IDL.Bool,
    'recipient' : IDL.Text,
    'deadline' : IDL.Nat64,
    'expirationTime' : IDL.Nat64,
    'refUID' : IDL.Text,
  });
  const Attestation = IDL.Record({
    'attestationId' : IDL.Text,
    'attestationPayload' : AttestationPayload,
    'attester' : IDL.Text,
  });
  const anon_class_11_1 = IDL.Service({
    'attest' : IDL.Func([AttestationPayload, IDL.Text], [IDL.Text], []),
    'getAttestation' : IDL.Func([IDL.Text], [IDL.Opt(Attestation)], ['query']),
    'getAttestationUids' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getInitializer' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return anon_class_11_1;
};
export const init = ({ IDL }) => { return []; };
