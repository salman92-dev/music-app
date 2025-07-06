'use client';

const Home = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-[center_top]"
        src="/videobg.mp4"
        autoPlay
        muted
        loop
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-72 flex flex-col justify-end px-5 pb-10 pt-24 gradient">
        
        {/* Text Content */}
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl font-[900] mb-3 leading-snug px-2">
            Everything you need to edit like a pro
          </h1>
          <p className="text-white text-base font-medium opacity-90">
            From basic cuts to advanced transitions — make your videos stand out in just a few taps.
          </p>
        </div>

        {/* Continue Button */}
        <div className="w-full mt-8">
          <button
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-full font-bold text-base cursor-pointer"
          onClick={()=> window.location.href = "/"}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
