import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold transition-colors font-mono",
  {
    variants: {
      variant: {
        default:
          "border-amber-400 bg-amber-100 text-amber-900 font-bold",
        secondary:
          "border-slate-200 bg-slate-100 text-slate-700",
        destructive:
          "border-red-200 bg-red-50 text-red-700",
        outline: "text-slate-700 border-slate-300 bg-white",
        blue:
          "border-blue-200 bg-blue-50 text-blue-700 font-bold",
        cyan:
          "border-sky-200 bg-sky-50 text-sky-800 font-bold",
        pink:
          "border-pink-200 bg-pink-50 text-pink-700 font-bold",
        green:
          "border-emerald-200 bg-emerald-50 text-emerald-800 font-bold",
        gold:
          "border-amber-300 bg-amber-50 text-amber-800 font-bold uppercase tracking-wider",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
