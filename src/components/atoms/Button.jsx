import styled from "styled-components";

const Button = ({ children, size, variant, disabled, onClick, ...props }) => {
  return (
    <BaseButton
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default Button;

const BaseButton = styled.button`
  padding: ${({ size }) =>
    size === "small"
      ? "8px 16px"
      : size === "large"
      ? "15px 24px"
      : "10px 20px"};
  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "large" ? "18px" : "16px"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 190px;

  background-color: ${({ variant }) =>
    variant === "secondary"
      ? "var(--color-black-light)"
      : variant === "outline"
      ? "transparent"
      : "var(--color-info)"};
  color: ${({ variant }) =>
    variant === "outline" ? "var(--color-info)" : "var(--color-white)"};
  border: ${({ variant }) =>
    variant === "outline" ? "1px solid var(--color-info)" : "none"};
  border-radius: 15px;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary"
        ? "#5a6268"
        : variant === "outline"
        ? "var(--color-info)"
        : "#0056b3"};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
