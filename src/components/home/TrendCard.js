export default function TrendCard({viewCount, title, subTitle, categorie, author, imageUrl}) {
  return(
    <div className={`bg-[url('./../../public/homeimage/TrendCard/goodBoy.png')] bg-contain bg-no-repeat flex flex-col h-[16.06rem] w-[13.8rem] shrink-0 truncate my-8  `}>
        <div className="text-right mr-3">{viewCount}</div>
        <div className="mt-auto ml-3">{title}</div>
        <div className="ml-3" >{subTitle}</div>
        <div className="flex flex-row ml-3">
          <div >{categorie}</div>
          <div className="ml-auto mr-3" >{"author: " + author}</div>
        </div>

    </div>
  )
}