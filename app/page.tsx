import Image from "next/image";
import Header from "../app/components/Header"
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="flex h-[189%] mt-7 ">
      <div className="flex flex-col items-start m-16 justify-center w-[496px] top-316px left-176px space-y-3">
        <div className=" flyIn-main font-bold font-libreBodoni text-2xl">
          <p>IMPECCABLE</p>
          <p>CRAFTSMANSHIP AND</p>
          <p>FINESSE</p>
        </div>
        <div className="w-[902px] h-[147px]">
          <div className="slideIn-pic top-[533px] left-[171px] text-[#A29875] font-medium text-[1xl]">
            <p>An example of intricate workmanship and detail, elegant </p>
             <p>necklaces and long and short chains form a part of our</p>
             <p>desirable collection.</p>
          </div>
          <button className="text-lg p-10px bg-[#A29875] rounded-lg h-[40px] w-[170px] mt-7 text-[#FFFFFF]">Explore Now</button>
        </div>

      </div>
      <div className="flex justify-center items-center">
       <Image 
       src="/images/image.png"
       width={300}
       height={400}
       alt="girl image"
       className="slideIn-pic"
       />
      </div>
      </div>
    </div>
    
  );
}