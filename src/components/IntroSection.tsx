
const IntroSection = () => {
  return (
    <div className="relative ">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src='/candle-video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
       <img
                    src='/candlew.jpg'
                    alt="WhatsApp Logo"
                    width={50}
                    height={50}
                    className="absolute animate-flip inset-0 w-full h-full object-cover z-0"
                  />

      {/* Overlay to darken the video for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:space-x-8 gap-10 p-10">
        <div className="lg:w-10/12 flex flex-col justify-center  animate-bounceUpIn">
        <h2 className="text-white font-bold tracking-tight hover:cursor-pointer text-end text-2xl md:text-4xl urdu hover:text-gray-300 self-end transition-colors duration-300">            سید اسد علی جعفری
          </h2>
          <div className="text-white text-base leading-7 mt-12 ">
            <p className="hover:text-gray-100 md:text-xl md:tracking-wider transition-colors duration-300 urdu text-right mb-14 font-bold leading-[3]">
              سید اسد علی جعفری ایک بہترین روحانی عامل ہیں۔ ایک تجربہ کار اور قابل اعتماد شخصیت ہیں جو مختلف معاملات کا حل پیش کر سکتے ہیں۔ ان کے پاس مختلف فنون علمی اور روحانیات کی خوبیاں موجود ہوتی ہیں۔ اگر آپ کو کوئی جادوءی مسئلہ، بھوت پریتوں کا سامنا یا کوئی اور روحانی مشکل ہو، تو آپ سید اسد علی جعفری سے رابطہ کر سکتے ہیں۔ وہ آپ کو اپنی قابلیتوں اور علم کے ذریعے مدد کرتے ہوئے آپ کی مشکل کا حل نکالیں گے۔ اور آپ کی زندگی کو آسان بنانے میں مدد کر سکتے ہیں
            </p>
          </div>
          {/* <Contact /> */}
        </div>
        <div className="relative lg:w-1/3 hidden lg:block order-first lg:pb-8">
          {/* Uncomment this block if you want to use the image */}
          {/* <Image
            src={img}
            alt="Professor"
            className="lg:sticky lg:top-0 mx-auto lg:w-full rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;


