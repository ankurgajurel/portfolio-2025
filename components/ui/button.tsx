// reusable button component with pure react
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
}

const buttonVariants = cva(
  // "px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  // {
  //   variants: {
  //     variant: {
  //       default:
  //         "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary/90 dark:hover:bg-primary/80",
  //       destructive:
  //         "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive/90 dark:hover:bg-destructive/80",
  //       outline:
  //         "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  //       secondary:
  //         "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary/80 dark:hover:bg-secondary/70",
  //       ghost: "hover:bg-accent hover:text-accent-foreground",
  //     },
  //   },
  //   defaultVariants: {
  //     variant: "default",
  //   },
  // }

  "px-2 py-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
);

const Button = ({ children, variant = "default", ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants(), variant, props.className)}>
      {children}
    </button>
  );
};

export default Button;
