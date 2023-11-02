import React, { memo } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './index.scss';

const PQRCode = memo(({ value, size = 280 }) => {
  return (
    <div className="pQRCodeWrapper">
      <QRCodeSVG value={value} size={size} />
    </div>
  );
});

export default PQRCode;
