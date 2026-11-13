import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-brand-dark-surface group-[.toaster]:text-slate-100 group-[.toaster]:border-slate-700 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-brand-yellow group-[.toast]:text-slate-950 font-bold",
          cancelButton:
            "group-[.toast]:bg-slate-800 group-[.toast]:text-slate-300",
          success: "group-[.toaster]:border-brand-green/40 group-[.toaster]:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

