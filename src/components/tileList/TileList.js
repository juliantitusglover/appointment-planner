import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ dataList }) => {
  return (
    <div>
      {dataList.map((data, idx) => {
        const {name, ...rest} = data;
        return (
          <Tile name={name} description={rest} key={idx} />
        );
      })}
    </div>
  );
};
