import React, { useState, useMemo, useCallback, useEffect, memo } from "react";

import { useNavigate } from "react-router-dom";
import { attestationregistry } from "@/declarations/attestationregistry";
import "./index.scss";

const ConnectWallet = memo(({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDetail = useCallback(
    (id) => {
      navigate(`/attestationsDetail?id=${id}`);
    },
    [navigate]
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    const getAttestationUidsRes =
      await attestationregistry.getAttestationUids();
    console.log("getAttestationUidsRes res", getAttestationUidsRes);
    const formatData = getAttestationUidsRes.map((i) => {
      return { AttestationUid: i, key: i };
    });
    setData(formatData);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="attestationListPage">
      <div className="contentWidth">
        <ul>
          <li className="th">
            <div className="id">AttestationUid</div>
            <div className="">Actions</div>
          </li>
          {data.map((i) => {
            return (
              <li
                className="th"
                onClick={() => {
                  handleDetail(i.AttestationUid);
                }}
              >
                <div className="id">{i.AttestationUid}</div>
                <div className="action">Detail</div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
});
export default ConnectWallet;
