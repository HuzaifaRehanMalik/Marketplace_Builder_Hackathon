import Image from "next/image"
export default function HeroSection() {
  return (
    <div>

      <div className="flex justify-center items-center">
        <div className="bg-[url('/b-1.png')] h-[600px] w-[1000px] flex justify-end items-center bg-cover bg-center m-10">
          <div className="bg-[#FFF3E3] w-[543px] h-[343px] p-5 right-0">
            <h3 className="text-black text-xl">New Arrival</h3>
            <h3 className="leading-[65px] font-bold text-5xl text-[#B88E2F] " >Discover Our <br />New Collection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <br />
            <button className="bg-[#B88E2F] py-5 px-5 text-xs font-bold text-white">BUY NOW</button>

          </div>
        </div>

      </div>
      <div>
        <h2 className="text-center font-extrabold text-xl">Browse The Range</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-evenly items-center py-10">
          <div>
            <Image src="/Dining.png" alt="Dining" width={300} height={150} />
            <h3 className="text-center py-4 font-bold">Dining</h3>

          </div>
          <div>
            <Image src="/living.png" alt="living" width={300} height={150} />
            <h3 className="text-center py-4 font-bold">living</h3>

          </div>
          <div>
           <Image src="/Bedroom.png" alt="Bedroom" width={300} height={150} />
           <h3 className="text-center py-4 font-bold">Bedroom</h3>
          </div>
        </div>
        
      </div>
    </div>
  )
}
