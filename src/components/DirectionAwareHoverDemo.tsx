"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
  "/assets/atulkumarjha2.jpg"
  return (
    <div className="relative flex w-full max-w-sm flex-col items-center justify-center px-4 py-10 sm:max-w-md sm:py-12 lg:max-w-lg lg:py-0 lg:h-[40rem] lg:items-center lg:justify-center lg:px-0 lg:ml-20">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">👋Hello There</p>
        <p className="font-normal text-sm">Thankyou for visiting my site</p>
      </DirectionAwareHover>
    </div>
  );
}
