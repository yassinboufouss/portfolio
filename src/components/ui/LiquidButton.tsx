import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Reusing the standard button variants but adding custom styling for the liquid effect
const liquidButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          // If asChild is true, we render the single child (e.g., Link) directly
          children
        ) : (
          // If asChild is false, we render the internal structure for the liquid effect
          <>
            {/* Liquid Effect Element (z-0) */}
            <span 
              className={cn(
                "absolute inset-0 z-0 transition-transform duration-500 ease-out",
                "bg-primary/10 dark:bg-primary/20",
                "group-hover:scale-[2.5] group-hover:opacity-0",
                "scale-0 rounded-full"
              )}
            />
            
            {/* Content Wrapper (z-10) */}
            <span className="relative z-10">{children}</span>
          </>
        )}
      </Comp>
    );
  },
);
LiquidButton.displayName = "LiquidButton";

export { LiquidButton, liquidButtonVariants };