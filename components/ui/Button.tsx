import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "glass";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {

        // Base styles applied to all buttons
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

        // Visual styles based on variant
        const variants = {
            primary: "bg-primary text-background shadow-md hover:bg-primary/90 hover:shadow-lg",
            secondary: "bg-secondary text-primary shadow-md hover:bg-secondary/90 hover:shadow-lg",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            glass: "glass-panel hover:bg-white/40 dark:hover:bg-black/40",
        };

        // Padding and text size based on the chosen size
        const sizes = {
            sm: "px-4 py-1.5 text-sm",
            md: "px-6 py-2.5 text-base",
            lg: "px-8 py-3 text-lg",
        };

        // A combination
        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;