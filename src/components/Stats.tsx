import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around bg-tertiary py-10 px-6 lg:px-10 border-t border-gray-300 shadow-lg">
      <div className="flex flex-col items-center m-4">
        <div className="text-5xl font-bold text-gray-800">
          <CountUp end={30000} duration={2} separator="," />
          <span>+</span>
        </div>
        <div className="text-lg text-gray-600">Projects Completed</div>
      </div>

      <div className="flex flex-col items-center m-4">
        <div className="text-5xl font-bold text-gray-800">
          <CountUp end={27000} duration={2} separator="," />
          <span>+</span>
        </div>
        <div className="text-lg text-gray-600">Happy Customers</div>
      </div>

      <div className="flex flex-col items-center m-4">
        <div className="text-5xl font-bold text-gray-800">
          <CountUp end={1} duration={2} separator="," />
          <span>+</span>
        </div>
        <div className="text-lg text-gray-600">Team Members</div>
      </div>

      <div className="flex flex-col items-center m-4">
        <div className="text-5xl font-bold text-gray-800">
          <CountUp end={12} duration={2} separator="," />
          <span>+</span>
        </div>
        <div className="text-lg text-gray-600">Global Awards</div>
      </div>
    </div>
  );
};

export default Stats;
