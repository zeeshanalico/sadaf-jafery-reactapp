const AstrologyService = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${'+92 300 0512401'.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
};
  return (
    // <div className="lg:w-4/6 max-w-xl mx-auto lg:max-w-none flex flex-col justify-center">
    <div className="bg-primary relative isolate overflow-hidden">
      <div className="px-6 sm:px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-black text-3xl font-bold tracking-tight sm:text-4xl urdu leading-loose">
            ماہر علم نجوم کی رہنمائی کے لیے ہم سے رابطہ کریں۔
          </h2>
          <p className="text-black mx-auto mt-6 max-w-xl text-lg leading-8">
            Need help  Love marriage solutions , Black magic removal 100% with Tarot, Numerology, or Astrology? Don't hesitate to contact us. Our expert astrologers are here to guide you.
          </p>
          <div className='flex flex-row justify-center gap-3'>

            <div className="justify-center mt-10 flex items-center gap-x-6">
              <a href="tel:03040244451" className="rounded-md bg-btn hover:bg-btn/80 px-3.5 py-2.5 text-sm font-semibold shadow-sm text-white">
                0304-0244451
              </a>
            </div>
            <div className="justify-center hover:cursor-pointer mt-10 flex items-center gap-x-6">
              <div onClick={handleClick} className="rounded-md bg-btn hover:bg-btn/80 px-3.5 py-2.5 text-sm font-semibold shadow-sm text-white">
              +92 300 0512401
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default AstrologyService;
