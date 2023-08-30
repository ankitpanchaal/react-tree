// "use client";
import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/name.json";
import { useCenteredTree } from "./helpers";
// import "./styles.css";

export default function App() {
  const [translate, containerRef] = useCenteredTree();

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
      // dimensions={true}
      enableLegacyTransitions={1000}
      renderCustomNodeElement={renderRectSvgNode}
      centeringTransitionDuration={300}
      separation={{ siblings: 2, nonSiblings: 2 }}
      pathFunc="step"
      />
    </div>
  );
}

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g onClick={toggleNode}>
    <rect width="20" height="20" x="-10" fill="#ffeab0" rx={33} />
    <text fill="black" strokeWidth="1" x="20" fontSize={14}>
      {nodeDatum.name}
    </text>
    {nodeDatum.value && (
      <text fill="black" x="20" dy="20" strokeWidth="0" fontSize={12}>
        Value: {nodeDatum.value}
      </text>
    )}
  </g>
);
