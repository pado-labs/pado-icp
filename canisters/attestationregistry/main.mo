import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Error "mo:base/Error";

shared({ caller = initializer }) actor class() {
    type AttestationPayload = {
        schema: Text;
        recipient: Text;
        expirationTime: Nat64;
        revocable: Bool;
        refUID: Text;
        data: Blob;
        deadline: Nat64;
        signature: Text;
    };

    type Attestation = {
        attestationId: Text; // The unique identifier of the attestation.
        attester: Text;
        attestationPayload: AttestationPayload;
    };
    
    var attestationIdCounter = 0;

    let attestations = Map.HashMap<Text, Attestation>(0, Text.equal, Text.hash);

    public shared({ caller }) func attest(attestationPayload : AttestationPayload, attester: Text): async Text {
        if(attestationPayload.recipient.size() == 0) { 
            throw Error.reject("AttestationSubjectFieldEmpty");
        };
        if(attestationPayload.data.size() == 0) {
            throw Error.reject("AttestationDataFieldEmpty");
        };
        attestationIdCounter += 1;
        let attestationId = Nat.toText(attestationIdCounter);
        let ats: Attestation = {
            attestationId;
            attester;
            attestationPayload;
        };
        attestations.put(attestationId, ats);
        return attestationId;
    };

    public query func getAttestation(attestationId : Text) : async ?Attestation {
        return attestations.get(attestationId);
    };

    public query func getAttestationUids() : async [Text] {
        return Iter.toArray(attestations.keys());
    };

    public query func getInitializer() : async Principal {
        return initializer;
    };
};
