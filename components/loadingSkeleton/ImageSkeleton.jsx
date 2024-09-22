import React from "react";
import { Skeleton } from "../ui/skeleton";

function ImageSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[250px] rounded-lg" />
    </div>
  );
}

export default ImageSkeleton;
