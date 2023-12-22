import Map "mo:base/HashMap";
import Text "mo:base/Text";

actor {
    type Entry = {
        source: Text;
        content: Text;
        result: Text;
    };

    let attestations = Map.HashMap<Text, Entry>(0, Text.equal, Text.hash);

    public func set(account : Text, entry : Entry): async () {
        attestations.put(account, entry);
    };

    public query func get(account : Text) : async ?Entry {
        attestations.get(account);
    };
};
