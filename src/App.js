// "use client";
import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/name.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";

export default function App() {
  const [translate, containerRef] = useCenteredTree();
  const nodeClassFunc = ({ node }) => {
    if (node.isLeaf) {
      return "leafNode";
    } else {
      return "branchNode";
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ height: "100vh", width: "100wh" }}
      className="bg-slate-400 items-center justify-center flex w-screen h-screen flex-wrap overflow-scroll"
    >
      <Tree
        data={orgChartJson}
        translate={translate}
        orientation="vertical"
        draggable={true}
        zoomable={true}
        initialDepth={1}
        enableLegacyTransitions={1000}
        renderCustomNodeElement={renderRectSvgNode}
        centeringTransitionDuration={300}
        separation={{ siblings: 2, nonSiblings: 2 }}
        nodeSize={{ x: 200, y: 220 }}
        pathFunc="step"
        rootNodeClassName="demo-node"
        branchNodeClassName="demo-node"
        nodeClassFunc={nodeClassFunc}
        dimensions={false}
        shouldCollapseNeighborNodes={true}
      />
    </div>
  );
}

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <svg
    width="400"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
    onClick={toggleNode}
    x="-22"
  >
    <rect
      x="1"
      y="1"
      width="45"
      height="45"
      fill={nodeDatum.children ? "#777777" : "#ffffff"}
      rx={99}
    />
    <foreignObject x="60" y="-10" width="200" height="180">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        // style={{
        //   backgroundColor: "#f7f7f7",
        //   padding: "2px 10px",
        //   borderRadius: "6px",
        // }}
      >
        {/* <p>Hello from HTML within SVG!</p> */}
        <h3 style={{ color: "#000000" }}>{nodeDatum.title}</h3>
        {nodeDatum.year && (
          <p style={{ color: "#8c8989", marginTop: -10 }}>
            Year : {nodeDatum.year}
          </p>
        )}
      </div>
    </foreignObject>
  </svg>
);

// const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
//   <svg
//     width="400"
//     height="200"
//     xmlns="http://www.w3.org/2000/svg"
//     onClick={toggleNode}
//     x="-12"
//   >
//     <rect x="1" y="1" width="24" height="24" fill="#FF676D" rx={99} />
//     <foreignObject x="30" y="0" width="200" height="180">
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         style={{
//           backgroundColor: "#f7f7f7",
//           padding: "2px 10px",
//           borderRadius: "6px",
//         }}
//       >
//         {/* <p>Hello from HTML within SVG!</p> */}
//         <h3>{nodeDatum.title}</h3>
//         {nodeDatum.year && <p>Year : {nodeDatum.year}</p>}
//       </div>
//     </foreignObject>
//   </svg>
// );
