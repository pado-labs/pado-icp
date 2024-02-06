import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultAbiCoder } from "ethers/lib/utils";
import { ethers } from "ethers";
import { attestationregistry } from "@/declarations/attestationregistry";
import "./index.scss";

const labelArr = [
  "AttestationUid",
  "Attester",
  "Recipient",
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDetail = useCallback((id) => {}, []);
  const verifyData = useCallback((obj) => {
    const domain = {
      name: "PermissionedEIP712Proxy",
      version: "0.1",
      chainId: 80001,
      verifyingContract: "0x0028D4d3E077287e38a674FCBFe092B216809e1D",
    };
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
    const {
      schema,
      recipient,
      expirationTime,
      revocable,
      refUID,
      data,
      deadline,
      signature,
    } = obj;
    const values = {
      schema,
      recipient,
      expirationTime,
      revocable,
      refUID,
      data,
      deadline,
    };
    console.log("verifyTypedData", ethers.utils.verifyTypedData);
    const recoveredAddress = ethers.utils.verifyTypedData(
      domain,
      types,
      values,
      signature
    );
    console.log("recoveredAddress=", recoveredAddress);
    
    return recoveredAddress;
  }, []);
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
    const newData = "0x" + hexStr3;
    var recoveredAddress = await verifyData({
      ...attestationPayload,
      data: newData,
    });
    const PADOSingerAddress = "0xe02bD7a6c8aA401189AEBb5Bad755c2610940A73";
    if (recoveredAddress === PADOSingerAddress) {
      recoveredAddress = 'PADO Labs'
    }
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
      newData
    );
    const b = [...info];
    b[5] = info[5].toString();
    b[6] = info[6].toString();
    const newDatas = [id, recoveredAddress, recipient, , ...b];
    setData(newDatas);
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
