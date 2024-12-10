import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoading() {
  return (
    <Skeleton enableAnimation={true} baseColor="#202020" highlightColor="#444">
      <div className="px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Skeleton height={192} width="100%" />
          <div className="p-4">
            <div className="flex">
              <div className="w-1/3 flex items-center justify-center rounded-lg">
                <Skeleton width={50} height={20} />
              </div>
              <div className="w-2/3 pl-4">
                <Skeleton height={20} width="70%" />
                <Skeleton height={15} width="50%" className="mt-1" />
                <Skeleton height={15} width="50%" className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}

export default SkeletonLoading;
