import { cva } from "class-variance-authority";

// utils
import { cn } from "../../utils/cn";

const buttonVariants = cva("w-full h-full rounded-full", {
  variants: {
    variant: {
      default:
        "border dark:border-dm-surface-light bg-surface dark:bg-dm-surface",
      icon: "text-2xl rounded-full p-2 flex justify-center items-center",
      outline: "px-4 py-3 border border-primary",
      cta: "px-8 py-4 capitalize truncate",
      destructive: "px-8 py-4 bg-error hover:bg-error/80 capitalize",
      destructiveOutline:
        "px-4 py-3 border border-error hover:text-white dark:text-white hover:bg-error capitalize",
    },
    size: {
      default: "w-max h-max",
      sm: "max-w-[30px]",
      md: "max-w-[100px] max-h-[40px]",
      lg: "max-w-[150px] max-h-[60px]",
      xl: "max-w-[200px] max-h-[80px]",
      icon: "max-w-[40px] max-h-[40px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
