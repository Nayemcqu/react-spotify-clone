
export default function AlbumItem({image,desc,id,name}){

return(
 <div key={id} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
<img className="rounded " src={image} alt="" />

<p className="font-bold mt-2 mb-1 ">{name}</p>
<p className="text-slate-200 text-xm">{desc}</p>
</div>

);

}