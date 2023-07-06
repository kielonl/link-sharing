import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  variant?: Variant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  ...props
}) => {
  const variantClasses: { [key in Variant]: string } = {
    primary: "bg-purple text-white active:bg-purpleHover disabled:opacity-25",
    secondary:
      "bg-transparent text-purple border border-purple active:bg-purpleLight disabled:opacity-25",
  };

  const classes = twMerge(variantClasses[variant || "primary"], className);

  return (
    <button
      {...props}
      className={twMerge(
        `font-instrumentSans text-[8px] shadow px-4 py-1 rounded-lg font-semibold leading-normal`,
        classes
      )}
    >
      {children}
    </button>
  );
};

export default Button;
