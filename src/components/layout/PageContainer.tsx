import React from "react";
import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function PageContainer({
  children,
  className,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component className={clsx("py-12 sm:py-16 lg:py-20", className)}>
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </Component>
  );
}
