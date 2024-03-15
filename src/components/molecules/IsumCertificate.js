import React from 'react';
import './IsumCertificate.css';
import IsumCertificateDoc from './img/business/isum_certificate.png'

const ImageView = () => {
    return (
        <div className='isum-certificate-box'>
            <img className="isum-certificate" src={IsumCertificateDoc} alt="The Certificate of ISUM"></img>
        </div>
    );
};

export default ImageView;
