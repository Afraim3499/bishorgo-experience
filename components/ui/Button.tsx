"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const sizeStyles = "px-6 py-3 text-sm md:text-base tracking-wide font-medium";

  const variants = {
    primary:
      "bg-forest text-ivory border border-forest hover:bg-transparent hover:text-forest focus:ring-offset-ivory hover:border-forest shadow-sm",
    secondary:
      "bg-transparent border border-forest text-forest hover:bg-forest hover:text-ivory focus:ring-offset-ivory",
    ghost:
      "bg-transparent text-forest hover:bg-sand/30 focus:ring-offset-ivory",
  };

  const buttonStyles = `${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  if (href) {
    // If it's an external link
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <motion.a
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    // Internal NextJS link
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={buttonStyles} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};
