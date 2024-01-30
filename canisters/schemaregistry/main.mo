import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Principal "mo:base/Principal";
import Error "mo:base/Error";

shared({ caller = initializer }) actor class() {
    type Entry = {
        name: Text;
        description: Text;
        context: Text;
        schemaString: Text;
    };

    let schemas = Map.HashMap<Text, Entry>(0, Text.equal, Text.hash);
    let schemasIssuers = Map.HashMap<Text, Principal>(0, Text.equal, Text.hash);

    public shared({ caller }) func createSchema(entry : Entry): async Text {
        if(entry.name.size() == 0) {
            throw Error.reject("SchemaNameMissing");
        };
        if(entry.schemaString.size() == 0) {
            throw Error.reject("SchemaStringMissing");
        };

        let schemaId = Nat32.toText(Text.hash(entry.schemaString));

        if(schemas.get(schemaId) != null) {
            throw Error.reject("SchemaAlreadyExists");
        };

        schemas.put(schemaId, entry);
        schemasIssuers.put(schemaId, caller);
        return schemaId;
    };

    public query func getSchema(schemaId : Text) : async ?Entry {
        return schemas.get(schemaId);
    };

    public query func getInitializer() : async Principal {
        return initializer;
    };
};
