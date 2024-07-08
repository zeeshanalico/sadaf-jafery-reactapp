
const StorySection = () => {
  return (
    <div className="w-full bg-primary py-16 px-6 lg:px-24 lg:py-32 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 lg:w-2/5">
        <img
          src="https://istkharaonline.com/wp-content/uploads/2024/07/Dua.webp"
          alt="Dua"
          className="w-full h-auto rounded-xl"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="text-center md:text-left max-w-lg w-full md:w-1/2 lg:w-2/3">
        <p className="text-lg font-semibold">Our Story</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">The Journey of Seeking Goodness</h2>
        <p className="text-base mb-6">
          Istikhara  is dedicated to helping individuals seek divine guidance for important decisions through prayer.
        </p>
        <a
          href="blogs/"
          className="inline-block bg-btn text-white px-4 py-2 sm:px-6 sm:py-3 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default StorySection;
