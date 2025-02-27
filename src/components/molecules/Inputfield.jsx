import PropTypes from "prop-types";
import styled from "styled-components";

const InputField = ({
  skin = "outline",
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  className,
  ...props
}) => {
  return (
    <InputContainer className={className} $isFlat={skin === "flat"}>
      {icon && <span className="icon">{icon}</span>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $hasIcon={!!icon}
        {...props}
      />
    </InputContainer>
  );
};

InputField.propTypes = {
  skin: PropTypes.oneOf(["outline", "flat"]),
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default InputField;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ $isFlat }) => ($isFlat ? "255px" : "100%")};
  border: ${({ $isFlat }) =>
    $isFlat ? "none" : "1px solid var(--color-primary-lighter)"};
  background: ${({ $isFlat }) =>
    $isFlat ? "var(--color-gray-lighter)" : "transparent"};
  border-radius: ${({ $isFlat }) => ($isFlat ? "40px" : "15px")};

  .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 20px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ $hasIcon }) => ($hasIcon ? "0 20px 0 50px" : "20px")};
  height: 50px;
  font-size: 15px;
  font-weight: 400;
  border: none;
  border-radius: 40px;
  outline: none;
  transition: border-color 0.3s;
  background: transparent;
  color: var(--color-primary-light);

  &:focus {
    border-color: var(--color-info);
    background: transparent;
  }

  &::placeholder {
    color: var(--color-primary-light);
  }

  @media (max-width: 425px) {
    height: 40px;
    font-size: 12px;
  }
`;
