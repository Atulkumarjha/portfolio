import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HeartHandshake } from "lucide-react";
import { IconCloudDemo } from "../components/IconCloud";
import Tooltip from "@/components/Tooltip";
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { CollaborationCard } from "./collaboration-card";



export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full font-semibold md:auto-rows-[18rem] lg:auto-rows-[26rem] xl:auto-rows-[28rem]">
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
<BentoGrid className="w-full font-semibold md:auto-rows-[20rem] lg:auto-rows-[22rem] xl:auto-rows-[24rem]">
<BentoGrid className="w-full font-semibold md:auto-rows-[22rem] lg:auto-rows-[24rem]">
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

const items = [
  {
    title: "Collaboration",
    description: "I excel at collaborating with clients by fostering transparent and open communication.",
    header: (<CollaborationCard />),
    className: "md:col-span-2 lg:col-span-2",
    icon: <HeartHandshake className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-neutral-500" />,
    icon: <HeartHandshake className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (<IconCloudDemo />),
    className: "md:col-span-1 lg:col-span-1",
    icon: <IconFileBroken className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-neutral-500" />,
    icon: <IconFileBroken className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-500" />,
  },
  {
    title: "Remote",
    description: "I'm highly flexible and can easily accommodate different time zones for communication.",
    header: (
      <div className="flex h-full w-full min-h-[120px] sm:min-h-[140px] items-center justify-center overflow-hidden rounded-xl">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
        <img
          src="/assets/globe.png"
          alt="Globe Screenshot"
          className="h-full w-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-1 lg:col-span-1",
    icon: <IconSignature className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-neutral-500" />,
    icon: <IconSignature className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-500" />,
  },
  {
    title: "Social Handle",
    description:
      "Let's Work on your next Project",
    header: (
      <div className="flex h-full w-full min-h-[120px] sm:min-h-[140px] items-center justify-center">
      <div className="flex h-full w-full items-center justify-center">
        <Tooltip />
      </div>
    ),
    className: "md:col-span-2 lg:col-span-2",
    icon: <IconTableColumn className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-neutral-500" />,
    icon: <IconTableColumn className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-500" />,
  },
];