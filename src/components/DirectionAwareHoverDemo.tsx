"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
  "/assets/atulkumarjha2.jpg"
  return (
    <div className="h-[40rem] relative  flex items-center justify-center ml-20">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">👋Hello There</p>
        <p className="font-normal text-sm">Thankyou for visiting my site</p>
      </DirectionAwareHover>
    </div>
  );
}
