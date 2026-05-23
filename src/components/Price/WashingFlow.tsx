import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useDrag } from "react-dnd";

export default function WashingFlow() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "test",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="w-full flex justify-between">
      <div className="w-66 h-66 bg-purple-200"></div>
      <div>
        <div  className="border p-6" ref={drag}>
          test
        </div>
      </div>
    </div>
  );
}
