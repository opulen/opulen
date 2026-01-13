"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps, type Transition } from "motion/react";

import { cn } from "@/lib/utils";
// import { compoundVariants as generatedVariants } from "@/registry/lib/variants";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
          solid: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost:
            "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        // solid: "",
        // outline: "",
        // plain: "bg-transparent hover:bg-accent/10",
      },
      // color: {
      //   primary: "",
      //   accent: "",
      //   success: "",
      //   warning: "",
      //   danger: "",
      //   info: "",
      // },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    // compoundVariants: [...(generatedVariants)],
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
  scale?: number;
  transition?: Transition;
}

function Button({
  ref,
  children,
  onClick,
  className,
  variant,
  size,
  asChild = false,
  scale = 50,
  transition = { duration: 1, ease: "easeOut" },
  ...props
}: ButtonProps) {
  const Comp = asChild ? motion.create(Slot) : motion.button;
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

  const createRipple = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;

      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    },
    []
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event);

      if (onClick) {
        onClick(event);
      }
    },
    [createRipple, onClick]
  );

  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale, opacity: 0 }}
          transition={transition}
          className="pointer-events-none absolute size-5 rounded-full bg-current"
          style={{ top: ripple.y - 10, left: ripple.x - 10 }}
        />
      ))}
    </Comp>
  );
}

export { Button as default, type ButtonProps, buttonVariants };
