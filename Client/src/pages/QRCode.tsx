import { useEffect, useState } from 'react';
import './QRCode.scss';
import CallCreateUser from '../calls/CallCreateUser';

const QRCode = () => {
  const [qr, setQr] = useState('');

  useEffect(() => {
    CallCreateUser('Test').then(({ qr: data }) => setQr(data));
  }, []);

  return (
    <div className='qr-code-container'>
      {qr && <img src={qr} alt='User QR Code' />}
    </div>
  );
};

export default QRCode;
