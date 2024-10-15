import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* اضافه کردن CDN */}
        <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/next@latest/dist/next.min.js"></script>


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}