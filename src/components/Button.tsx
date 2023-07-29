import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
