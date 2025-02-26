import styled from "styled-components";
import { InputField } from "@components/molecules";
import { formatDate } from "@/services/helpers/date";
import { validateEmail, validatePassword } from "@/services/helpers/string";
import { settingsPageContent } from "@/constants/content";

const InputGroup = ({ label, name, type, value, onChange }) => {
  let validationError;

  if (name === "email" && !validateEmail(value)) {
    validationError = settingsPageContent.invalidEmailFormat;
  }

  if (name === "password" && !validatePassword(value)) {
    validationError = settingsPageContent.invalidPasswordFormat;
  }

  const isDateOfBirth = name === "dateOfBirth";

  return (
    <InputGroupContainer className="inputGroup">
      <p>{label}</p>
      <InputField
        name={name}
        type={type}
        value={isDateOfBirth ? formatDate(value) : value}
        onChange={isDateOfBirth ? undefined : onChange}
      />
      {validationError && <p className="validationError">{validationError}</p>}
    </InputGroupContainer>
  );
};

export default InputGroup;

const InputGroupContainer = styled.div`
  .validationError {
    color: var(--color-danger) !important;
    font-size: 14px;
  }
`;
