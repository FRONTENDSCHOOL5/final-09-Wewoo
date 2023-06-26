import React, { useState } from 'react';
import DonationsInput from '../../components/DonationPage/DonationsInput/DonationsInput';
import DonationInform from '../../components/DonationPage/DonationInform/DonationInform';

export default function DonationPage() {
  const [donations, setDonations] = useState(0);
  const sendToInform = (value) => {
    setDonations(value);
    console.log(value);
  };
  return (
    <>
      <DonationsInput sendToInform={sendToInform} />
      <DonationInform getFromInput={donations} />
    </>
  );
}
