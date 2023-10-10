export default interface ButtonProps {
  content?: string;
  startIcon?: string;
  endIcon?: string;
  variant?: "text" | "contained" | "outline"; // text contained outline
  disable?: boolean;
  color?: "primary" | "secondary";
  className?: string;

  size?: "small" | "medium"; // small medium
  onClick?: () => void;
}
