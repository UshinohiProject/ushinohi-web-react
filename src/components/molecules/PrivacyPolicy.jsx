import React from 'react';
import './PrivacyPolicy.css';

class Members extends React.Component {
    render() {
        return (
            <div className="policies">
                <h2 className="heading-privacy-policy" data-en="Privacy Policy">プライバシーポリシー</h2>
                <div className="policy">
                    <h3>個人情報の利用目的</h3>
                    <p>当WEBページでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。</p>
                    <p>取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p>
                    <h3>アクセス解析ツールについて</h3>
                    <p>当WEBページでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
                </div>
                <h2 className="heading-privacy-policy" data-en="Disclaimers">免責事項</h2>
                <div className="policy">
                    <p>当WEBページからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
                    <p>また当WEBページのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
                </div>
                <h2 className="heading-privacy-policy" data-en="Associate">Amazonアソシエイトについて</h2>
                <div className="policy">
                    <p>当WEBページは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
                </div>
                <h2 className="heading-privacy-policy" data-en="Copyrights">著作権について</h2>
                <div className="policy">
                    <p>当WEBページで掲載している文章や画像などにつきましては、無断転載することを禁止します。</p>
                    <p>当WEBページは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。</p>
                </div>
                <h2 className="heading-privacy-policy" data-en="Links">リンクについて</h2>
                <div className="policy">
                    <p>当WEBページは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
                </div>
            </div>
        );
    }
}

export default Members