import React from "react";
import CopyPng from "./copy.png";
import { copyToClipboard } from "./copy-func";

const Item = ({ item, i }) => {
  return (
    <span className="card-item" onClick={() => copyToClipboard(item)}>
      ({i + 1})
      <span
      // style={{
      //   color: "yellow",
      //   // fontWeight: "normal",
      //   fontSize: "17px",
      // }}
      >
        {item}
      </span>
      {/* <span >
        <img width={20} height={18} src={CopyPng} alt={i} />
      </span> */}
    </span>
  );
};

export default Item;
// const Card = (item, i) => {

//     <div>
//         <div class="px-6 pt-4 pb-2">
// <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
// <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
// <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
// </div>
//     </div>
// }
