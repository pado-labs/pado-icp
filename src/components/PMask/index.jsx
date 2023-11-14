import React, { memo } from 'react';
import './index.scss';
// import iconClose from '@/assets/img/iconClose.svg';


const PMask= memo(({ onClose, children, closeable =true }) => {
  return (
    <div className="pMask bgLayer">
      {/* {closeable && <img className="closeBtn" src={iconClose} alt="" onClick={onClose} />} */}
      {children}
    </div>
  );
});

export default PMask;
