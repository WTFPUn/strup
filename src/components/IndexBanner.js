import Image from 'next/image'

function IndexBanner() {
  return(
    <div className="h-50 w-86 xl:wfullrelative">
      <Image src={"/homeimage/mainbg.png"} width={1440} height={966} layout="responsive" alt="mainbg"/>
    </div>
  )
};

export default IndexBanner;