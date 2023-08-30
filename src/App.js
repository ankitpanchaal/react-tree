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
      // style={containerStyles}
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
        separation={{ siblings: 2, nonSiblings: 2 }}
      />
    </div>
  );
}

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <circle r="10" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);
