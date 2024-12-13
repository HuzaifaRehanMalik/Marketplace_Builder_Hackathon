import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-[url('/b-1.png')] h-[600px] w-full max-w-[1000px] flex justify-end items-center bg-cover bg-center m-10">
          <div className="bg-[#FFF3E3] w-[90%] max-w-[543px] h-auto p-5 right-0 shadow-lg">
            <h3 className="text-black text-xl">New Arrival</h3>
            <h3 className="leading-[65px] font-bold text-5xl text-[#B88E2F]">
              Discover Our <br />
              New Collection
            </h3>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] py-3 px-6 text-sm font-bold text-white mt-4 hover:bg-[#a27924] transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center font-extrabold text-2xl">Browse The Range</h2>
        <p className="text-center text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 py-10">
          <div>
            <Image src="/Dining.png" alt="Dining Furniture" width={300} height={150} />
            <h3 className="text-center py-4 font-bold">Dining</h3>
          </div>
          <div>
            <Image src="/Living.png" alt="Living Furniture" width={300} height={150} />
            <h3 className="text-center py-4 font-bold">Living</h3>
          </div>
          <div>
            <Image src="/Bedroom.png" alt="Bedroom Furniture" width={300} height={150} />
            <h3 className="text-center py-4 font-bold">Bedroom</h3>
          </div>
        </div>
      </div>
      <h2 className="text-center font-extrabold text-3xl mb-10">Our Products</h2>
    </div>
  );
}
