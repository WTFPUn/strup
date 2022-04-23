import Image from "next/image";

const PopUpBox = ({name, text, readed, timestamp, type}) => {
  if(type == 0) {
    return(
      <div className="flex flex-row">
        <div className={`w-2 h-2 mt-5 ${readed === 0 ? "bg-blue-500": "bg-transparent"} rounded-full`}></div>
        <div className="w-12 h-12 pb-5 rounded-full">
          <Image alt={"profile" + name} width={5} height={5} src='/util/profile.jpg' layout="responsive"/>
        </div>
        <div className="mt-2 text-sm flex flex-row">
          <p>{name}</p> <p className="font-normal">{text}</p>
        </div>
        <div className="ml-auto">{timestamp}</div>
      </div>
    )
  }
  else if (type == 1) {
    return(
      <div className="flex flex-row">
        <div className={`w-2 h-2 mt-5 ${readed === 0 ? "bg-blue-500": "bg-transparent"} rounded-full`}></div>
        <div className="w-12 h-12 pb-5 rounded-full">
          <Image alt={"profile" + name} width={5} height={5} src='/util/profile.jpg' layout="responsive"/>
        </div>
        <div className="mt-2 text-sm flex flex-row">
          <p>{name}</p> <p className="font-normal">{text}</p>
        </div>
        <div className="ml-auto">{timestamp}</div>
      </div>
    )
  }
  return (
    <div>

    </div>
  )
}

export default PopUpBox;