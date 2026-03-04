import Navbar from "./NaVbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
export default function DisplayHome(){

return(
<>
<Navbar/>
<div className="mb-4 ">
<h1 className="my-5 font-bold text-2xl "> Featured Charts</h1>
{/* <div className="flex overflow-x-auto scrollbar-hide ">
{albumsData.map((album,index)=>(
<AlbumItem key={index} name={album.name} desc={album.desc} image={album.image} id={album.id}/>
  
))}

</div> */}
<Swiper
spaceBetween={10}
slidesPerView={4}
   modules={[Navigation]}
  navigation
>

{albumsData.map((album,index)=>(
<SwiperSlide key={index}>
 <AlbumItem
        name={album.name}
        desc={album.desc}
        image={album.image}
        id={album.id}
      />


</SwiperSlide>

))}

</Swiper>


</div>

<div className="mb-4 ">
<h1 className="my-5 font-bold text-2xl "> Today's Hits</h1>
<div className="flex overflow-x-hidden ">
<Swiper
  spaceBetween={10}
  slidesPerView={4}
  modules={[Navigation]}
  navigation
>
  {songsData.map((song) => (
    <SwiperSlide key={song.id}>
      <SongItem
        name={song.name}
        desc={song.desc}
        image={song.image}
        id={song.id}
      />
    </SwiperSlide>
  ))}
</Swiper>

</div>
</div>


</>
)

}