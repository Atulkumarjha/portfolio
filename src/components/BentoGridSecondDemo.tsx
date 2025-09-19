import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HeartHandshake } from "lucide-react";
import { MarqueeDemo } from "../components/marquee";
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { CollaborationCard } from "./collaboration-card";



export function BentoGridSecondDemo() {
  return (
<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem] bg-black font-bold">
  {items.map((item, i) => (
    <BentoGridItem
      key={i}
      title={item.title}
      description={item.description}
      header={item.header}
      className={cn(item.className)}
      icon={item.icon}
    />
  ))}
</BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl 
    dark:bg-dot-white/[0.2] bg-dot-black/[0.2] 
    [mask-image:radial-gradient(white)] 
    bg-neutral-100 dark:bg-black">
  </div>
);
const items = [
  {
    title: "Collaboration",
    description: "I excel at collaborating with clients by fostering transparent and open communication.",
    header: (<CollaborationCard />),
    className: "md:col-span-2",
    icon: <HeartHandshake className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <div></div>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "INDIA-Remote",
    description: "I’m highly flexible and can easily accommodate different time zones for communication.",
    header: (
      <div className="w-full h-full rounded-xl overflow-hidden flex justify-center items-center">
        <img
          src="/assets/globe.png"
          alt="Globe Screenshot"
          className="w-100 h-105 object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <MarqueeDemo />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];