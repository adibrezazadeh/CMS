import { useEffect } from 'react';

export default function SliderComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://adibrezazadeh.github.io/cdnfiles/bundle.js'; // مسیر به فایل جاوااسکریپت
    script.async = true; // بارگذاری غیر همزمان
    script.onload = () => {
      if (window.Slider && typeof window.ReactDOM !== 'undefined') {
        // وقتی اسکریپت لود شد، Slider را در DOM رندر کنید
        const SliderComponent = window.Slider;
        const sliderRoot = document.getElementById('slider-root');
        window.ReactDOM.render(
          window.React.createElement(SliderComponent),
          sliderRoot
        );
      }
    };
    document.body.appendChild(script); // افزودن اسکریپت به body

    // پاک‌سازی: حذف اسکریپت در هنگامUnmount شدن کامپوننت
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="slider-root"></div>
      <div>test component2</div>
    </>
  );
}
