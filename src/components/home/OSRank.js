import EyeIcon from "../icons/EyeIcon";

export default function OSRank() {
  const num = ["①","②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"]
  const item = [
    {
      rankName: "Somsak",
      viewCount: 1,
    },
    {
      rankName: "Jimmy",
      viewCount: 2,
    },
    {
      rankName: "Sompong",
      viewCount: 3,
    },
    {
      rankName: "uei",
      viewCount: 4,
    },
    {
      rankName: "luke",
      viewCount: 5,
    },
    {
      rankName: "Somsak",
      viewCount: 1,
    },
    {
      rankName: "Jimmy",
      viewCount: 2,
    },
    {
      rankName: "Sompong",
      viewCount: 3,
    },
    {
      rankName: "uei",
      viewCount: 4,
    },
    {
      rankName: "luke",
      viewCount: 5,
    },
  ];
  return (
    <div className="flex flex-col font-extralight place-items-center my-28">
      <div className="border-b-2 pb-5 big-device:text-4xl border-black">Rank of outsourcer</div>
      <div className="grid grid-cols-2 justify-items-start">
        {item.map((value, index) => {
          return (
            <div key={index} className="flex flex-row big-device:text-2xl gap-5 mr-5 my-5 px-5 w-full">
              <div>{num[index]}</div>
              <div key={"rankName" + index}>{value.rankName}</div>
              <div>[รูป]</div>
              <EyeIcon/>
              <div key={"rankView" + index} className="ml-auto">{value.viewCount + "view"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
