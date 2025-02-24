import PropTypes from "prop-types";
import styled from "styled-components";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  className,
  ...props
}) => {
  return (
    <InputContainer className={className}>
      {icon && <IconWrapper src={icon} alt={`${type}-icon`} />}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasIcon={!!icon}
        {...props}
      />
    </InputContainer>
  );
};

InputField.propTypes = {
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
  width: 255px;
  background: var(--color-gray-lighter);
  border-radius: 40px;
`;

const IconWrapper = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ hasIcon }) => (hasIcon ? "0 20px 0 50px" : "20px")};
  height: 50px;
  font-size: 15px;
  font-weight: 400;
  border: none;
  border-radius: 40px;
  outline: none;
  transition: border-color 0.3s;
  background: transparent;
  color: var(--color-primary);

  &:focus {
    border-color: var(--color-info);
  }

  &::placeholder {
    color: var(--color-primary-light);
  }
`;
