const Bootcamps = () => {
  return (
    <div className="px-12 py-8 space-y-8">
      {/* Bootcamps section */}
      <h2 className="ml-5 text-lg">Trial another Bootcamp</h2>
      <ul className="space-y-4">
        <li className="flex h-20">
          <img src="/assets/images/layer-115.png" alt="android-robot" />
          <p className="bg-white p-4 text-sm">Mobile Developer Bootcamp</p>
        </li>
        <li className="flex h-20">
          <img src="/assets/images/layer-114.png" alt="html-icon" />
          <p className="bg-white p-4 text-sm">Software Engineer Bootcamp</p>
        </li>
      </ul>
      {/* Coding Journey section */}
    </div>
  );
};

export default Bootcamps;