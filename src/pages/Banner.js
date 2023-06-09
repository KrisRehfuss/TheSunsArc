import Image from "next/image";
import BannerImage from "../../public/Abstract.jpg";

function Banner() {
  return (
    <div className='BoxFull shadow-lg'>
      <div className="relative -z-10 top-0 w-full lg:h-80 h-60 ">
        <Image
          src={BannerImage}
          className="border-Redd"
          layout="fill"
          objectFit="cover"
          alt="#"
        />
      </div>
    </div>
  );
}

export default Banner;
