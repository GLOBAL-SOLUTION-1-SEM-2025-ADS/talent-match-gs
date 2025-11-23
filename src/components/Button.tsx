import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const baseStyles =
  "px-3 py-2 rounded-lg font-semibold transition text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-900";

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer dark:bg-indigo-500 dark:hover:bg-indigo-400",
  secondary:
    "bg-slate-500 hover:bg-slate-400 text-white border border-gray-200 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600",
  danger:
    "border bg-red-500 hover:bg-red-400 text-white text-sm cursor-pointer dark:bg-red-600 dark:hover:bg-red-500 dark:border-red-500/70",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
