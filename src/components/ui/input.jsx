import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-zinc-800 bg-[#0b0a17] px-3 py-2 text-sm text-white",
        "placeholder:text-zinc-500",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };