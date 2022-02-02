import EyeIcon from "../icons/EyeIcon";

export default function OSRank() {
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
  ];
  return (
    <div className="flex flex-col place-items-center my-28">
      <div className="border-b-4 border-black">Rank of outsourcer</div>
      <div className="grid grid-cols-2 justify-items-center">
        {item.map((value, index) => {
          let i = 1;
          return (
            <div key={index} className="flex flex-row ">
              <div className="rounded-full  border-2 border-black">{i++}</div>
              <div key={index}>{value.rankName}</div>
              <EyeIcon/>
              <div key={index}>{value.viewCount}</div>
            </div>
          );
        })}
        {item.map((value, index) => {
          let i = 1;
          return (
            <div key={index} className="flex flex-row">
              <div className="rounded-full border-2 border-black">{i++}</div>
              <div key={index}>{value.rankName}</div>
              <EyeIcon/>
              <div key={index}>{value.viewCount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
