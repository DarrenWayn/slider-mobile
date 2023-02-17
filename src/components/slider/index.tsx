import React from "react";

const dummyData = [
  {
    id: 1,
    pp: "Adam",
  },
  {
    id: 2,
    pp: "Adam",
  },
  {
    id: 3,
    pp: "Adam",
  },
  {
    id: 4,
    pp: "Adam",
  },
  {
    id: 5,
    pp: "Adam",
  },
  {
    id: 6,
    pp: "Adam",
  },
  {
    id: 7,
    pp: "Adam",
  },
  {
    id: 8,
    pp: "Adam",
  },
  {
    id: 9,
    pp: "Adam",
  },
];

const Slider: React.FC = () => {
  return (
    <div className="stories">
      <div className="@container">
        <div className="flex gap-2 p-2">
          {dummyData?.map((data: any) => (
            <div
              className="border p-2 border-red-600 rounded-full"
              key={data.id}
            >
              {data.pp}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
