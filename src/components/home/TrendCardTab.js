import TrendCard from "./TrendCard";

export default function TrendCardTab() {

  return(
    <div className="flex flex-col mx-48  my-2"> 
      <div className="big-device:text-3xl">Trending 🔥</div>
      <div className="flex flex-row text-white  justify-items-center overflow-x-auto gap-1 scroll-smooth">
        <TrendCard viewCount={3000} title={"กระทู้"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมชาย"} imageUrl={'./../../public/homeimage/TrendCard/goodBoy.png'}/>
        <TrendCard viewCount={3000200} title={"กระทู้"} subTitle={"ฮาวทู เทรน"} categorie={"วิชา ภาษาไทย"} author={"สมชาย2"} imageUrl={'./../../public/homeimage/TrendCard/pencilAndHisShit.png'}/>
        <TrendCard viewCount={3000458} title={"VDO"} subTitle={"ฮาวทู บีอะกู๊ดกาย"} categorie={"วิชา การเงิน", "วิชา เคมี"} author={"สมสาว"} imageUrl={'./../../public/homeimage/TrendCard/graph.png'}/>
        <TrendCard viewCount={345568} title={"อื่นๆ"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมปอง"} imageUrl={'./../../public/homeimage/TrendCard/shipInSea.png'}/>
        <TrendCard viewCount={345568} title={"อื่นๆ"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมปอง"} imageUrl={'./../../public/homeimage/TrendCard/shipInSea.png'}/>
        <TrendCard viewCount={345568} title={"อื่นๆ"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมปอง"} imageUrl={'./../../public/homeimage/TrendCard/shipInSea.png'}/>
        <TrendCard viewCount={345568} title={"อื่นๆ"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมปอง"} imageUrl={'./../../public/homeimage/TrendCard/shipInSea.png'}/>
        <TrendCard viewCount={345568} title={"อื่นๆ"} subTitle={"ฮาวทู บลาๆๆๆๆๆ"} categorie={"วิชา Toelf", "วิชา Ielf"} author={"สมปอง"} imageUrl={'./../../public/homeimage/TrendCard/shipInSea.png'}/>
      </div>
      
      
    </div>
  )
}