import * as React from "react";
import { twMerge } from "tailwind-merge";

type Variant = "headingM" | "headingS" | "bodyM" | "bodyS";
type Component = "h1" | "h3" | "p" | "span";
type Font = "instrumentSans";

interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: Variant;
  fontFamily?: Font;
  className?: string;
  children: React.ReactNode;
}

const variants: { [key in Variant]: Component } = {
  headingM: "h1",
  headingS: "h3",
  bodyM: "p",
  bodyS: "span",
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  fontFamily,
  className,
  children,
  ...props
}) => {
  const Component = variants[variant || "bodyS"];

  const fontClasses: { [key in Font]: string } = {
    instrumentSans: "font-instrumentSans",
  };

  const font = fontClasses[fontFamily || "instrumentSans"];

  const variantClasses: { [key in Variant]: string } = {
    headingM: "text-[32px] font-bold leading-10",
    headingS: "text-[16px] font-semibold leading-5",
    bodyM: "text-[16px] font-normal leading-normal",
    bodyS: "text-[12px] font-normal leading-none",
  };

  const classes = twMerge(variantClasses[variant || "bodyS"], font, className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
