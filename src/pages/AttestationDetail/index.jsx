import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultAbiCoder } from "ethers/lib/utils";
import { attestationregistry } from "@/declarations/attestationregistry";
import "./index.scss";

const labelArr = [
  "ProofType",
  "Source",
  "Content",
  "Condition",
  "SourceUserIdHash",
  "Result",
  "Timestamp",
  "UserIdHash",
];
const App = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState([
    
  ]);
  const [loading, setLoading] = useState(false);
  const handleDetail = useCallback((id) => {}, []);
  const fetchData = useCallback(async () => {
    setLoading(true);
    console.log("id", id);
    const getAttestationRes = await attestationregistry.getAttestation(id);
    console.log("getAttestation res", getAttestationRes);
    const { attester, attestationId, attestationPayload } =
      getAttestationRes[0];
    const {
      data,
      deadline,
      expirationTime,
      recipient,
      refUID,
      revocable,
      schema,
      signature,
    } = attestationPayload;
    
    const hexStr3 = Buffer.from(data).toString("hex");

    var info = defaultAbiCoder.decode(
      [
        "string",
        "string",
        "string",
        "string",
        "bytes32",
        "bool",
        "uint64",
        "bytes32",
      ],
      "0x" + hexStr3
    );
    console.log("123", info);
    const b = [...info];
    b[5] = info[5].toString();
    b[6] = info[6].toString();
    console.log("456", info[6].toString());
    setData(b);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="attestationDetailPage">
      <div className="contentWidth">
        <h1>DECODED DATA:</h1>
        <ul>
          {data.map((i, k) => {
            return (
              <li>
                <div className="label">{labelArr[k]}</div>
                <div className="value">{data[k]}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
