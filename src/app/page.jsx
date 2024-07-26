import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="" alt="" fill className="object-contain" />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences,Designing Tomorrow
        </h1>
        <p className="">Welcome to my </p>

        <div className="w-full flex gap-4">
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">
            View my works
          </button>
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
