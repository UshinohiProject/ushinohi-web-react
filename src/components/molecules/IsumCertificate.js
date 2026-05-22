import React, { useEffect } from 'react';
import './IsumCertificate.css';

const IsumCertificate = () => {
    useEffect(() => {
        const SCRIPT_SRC = 'https://isum.or.jp/js/isumCertificate.js';
        if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = SCRIPT_SRC;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='isum-certificate-box'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="isumCertificateBanner" data-text="4965f3c8a488b34">ISUM登録証明書</a>
        </div>
    );
};

export default IsumCertificate;
