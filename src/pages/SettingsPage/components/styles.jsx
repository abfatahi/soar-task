import styled from "styled-components";

const EditProfileTabContainer = styled.form`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }

  .formWrapper {
    width: 100%;

    .inputGroupWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
      column-gap: 30px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .inputGroup {
    display: flex;
    flex-direction: column;
    gap: 11px;

    p {
      font-weight: 400;
      color: var(--color-primary);
    }
  }

  .saveButton {
    width: 190px;
    margin-top: 2rem;
    float: right;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ProfilePictureCard = styled.div`
  position: relative;
  height: 90px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  .profilePicture {
    width: 90px;
    height: 100%;
    border-radius: 50%;
  }

  .editIcon {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export { ProfilePictureCard, EditProfileTabContainer };
