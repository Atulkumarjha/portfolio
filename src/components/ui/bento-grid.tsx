import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 gap-2 sm:gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[16rem] lg:auto-rows-[24rem]",
        "mx-auto grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[18rem] lg:auto-rows-[20rem]",
  "mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 rounded-xl border border-neutral-200 bg-white p-2 sm:p-3 md:p-4 lg:p-6 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-3 sm:space-y-4 rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 md:p-5 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-1 sm:mb-2 font-sans text-sm sm:text-base lg:text-lg font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs sm:text-sm lg:text-base font-normal text-neutral-600 dark:text-neutral-300">
        <div className="mt-2 mb-1 sm:mb-2 font-sans text-sm sm:text-base font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs sm:text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
