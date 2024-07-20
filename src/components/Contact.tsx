const Contact = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-column justify-between items-center p-8 bg-tertiary ">
        <div className="flex items-center space-x-4 mb-8 sm:mb-0">
          <div className="flex-shrink-0">
          </div>
          <div className='bg-tertiary'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              <div className="flex items-center justify-center ">
                <img
                  src='/whataspp-logo.png'
                  alt="WhatsApp Logo"
                  width={70}
                  height={70}
                  className="mr-2"
                />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black bg-tertiary p-2 rounded-full text-nowrap shadow-md animate-bounce">+ 92 300 0825124</span>
              </div>
              <div className="flex items-center justify-center ">
                <img
                  src='/phone-icon.png'
                  alt="WhatsApp Logo"
                  width={50}
                  height={50}
                  className="ml-4"
                />
                <span className="text-lg ml-4 sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black bg-tertiary p-2 rounded-full text-nowrap shadow-md animate-bounce">+92 300 0512401</span>
              </div>
              <p className="text-md sm:text-lg text-gray-600 italic">Get you problem solved</p>
            </h2>
          </div>
        </div>
      </div>
      <p className='text-lg md:text-2xl urdu px-12 text-end md:leading-[3] pb-7 bg-tertiary'>
      </p>
    </div>
  );
}


export default Contact



