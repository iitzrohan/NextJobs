import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

export default forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(function Select({ className, ...props }, ref) {
  return (
    <div className="relative">
      <select
        className={cn(
          "bg-background border-input ring-offset-background focus:ring-ring h-10 w-full appearance-none truncate rounded-md border py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
      <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 " />
    </div>
  );
});
