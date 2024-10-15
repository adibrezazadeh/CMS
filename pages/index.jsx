// import Slider from "../components/slider";

// export default function Home() {
 

//   return (
//     <>
//       <Slider/>
//     </>
//   );
// }




import { useEffect } from 'react';
import Script from 'next/script';
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.HomeSlider) {
      const HomeSlider = window.HomeSlider;
      console.log("Slider component available:", HomeSlider);
    }
  }, []);
 
  return (
    <>
      <Script
        src="https://adibrezazadeh.github.io/cdnfiles/bundle3.js" // مسیر به فایل جاوااسکریپت که در پوشه public قرار دارد
        strategy="beforeInteractive" // بارگذاری قبل از تعاملات کاربر
      />

      <div id="HomeSlider-root"></div>
      <Script id="render-HomeSlider" strategy="lazyOnload">
        {`
          // وقتی فایل جاوااسکریپت لود شد، Slider را در DOM رندر کنید
          if (window.HomeSlider && typeof window.ReactDOM !== 'undefined') {
            window.ReactDOM.render(
              window.React.createElement(window.HomeSlider),
              document.getElementById('HomeSlider-root')
            );
          }
        `}
      </Script>
    </>
  );
}