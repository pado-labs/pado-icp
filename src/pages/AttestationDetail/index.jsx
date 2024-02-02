import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { attestationregistry } from "@/declarations/attestationregistry";
import "./index.scss";

const App = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDetail = useCallback((id) => {}, []);
  const fetchData = useCallback(async () => {
    setLoading(true);
    console.log("id", id);
    const getAttestationRes = await attestationregistry.getAttestation("1");
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
    // function Utf8ArrayToStr(array) {
    //   var out, i, len, c;
    //   var char2, char3;

    //   out = "";
    //   len = array.length;
    //   i = 0;
    //   while (i < len) {
    //     c = array[i++];
    //     switch (c >> 4) {
    //       case 0:
    //       case 1:
    //       case 2:
    //       case 3:
    //       case 4:
    //       case 5:
    //       case 6:
    //       case 7:
    //         // 0xxxxxxx
    //         out += String.fromCharCode(c);
    //         break;
    //       case 12:
    //       case 13:
    //         // 110x xxxx   10xx xxxx
    //         char2 = array[i++];
    //         out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
    //         break;
    //       case 14:
    //         // 1110 xxxx  10xx xxxx  10xx xxxx
    //         char2 = array[i++];
    //         char3 = array[i++];
    //         out += String.fromCharCode(
    //           ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
    //         );
    //         break;
    //     }
    //   }

    //   return out;
    // }
    // str = Buffer.from(uint8arr.buffer).toString();

    // var str = Utf8ArrayToStr(data); // Convert Uint8Array to String
    const hexStr3 = Buffer.from(data).toString("hex");
    console.log("hexStr3:", hexStr3);
    //const info =  ethers.utils.AbiCoder.decode(["Text", "Text", "Nat64", "Bool", "Text", "Blob", "Nat64", "Text"], hexStr3)
    // console.log("data str", str);
    // const items = [
    //   {
    //     key: "1",
    //     label: "Product",
    //     children: "Cloud Database",
    //   },
    //   {
    //     key: "2",
    //     label: "Billing Mode",
    //     children: "Prepaid",
    //   },
    //   {
    //     key: "3",
    //     label: "Automatic Renewal",
    //     children: "YES",
    //   },
    //   {
    //     key: "4",
    //     label: "Order time",
    //     children: "2018-04-24 18:00:00",
    //   },
    //   {
    //     key: "5",
    //     label: "Usage Time",
    //     span: 2,
    //     children: "2019-04-24 18:00:00",
    //   },
    //   {
    //     key: "6",
    //     label: "Status",
    //     span: 3,
    //     // children: <Badge status="processing" text="Running" />,
    //   },
    //   {
    //     key: "7",
    //     label: "Negotiated Amount",
    //     children: "$80.00",
    //   },
    //   {
    //     key: "8",
    //     label: "Discount",
    //     children: "$20.00",
    //   },
    // ];
    // setData(items);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="attestationDetailPage">
      <div className="contentWidth">
        <h1>Attestation Details</h1>
        <ul>
          {data.map((i) => {
            return (
              <li>
                <div className="label">label</div>
                <div className="value">Detail</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
