import styled from "styled-components";
import { settingsPageContent } from "@/constants/content";
import { InputField } from "@components/molecules";

import ProfilePictureImage from "@assets/images/profile.png";
import EditIcon from "@assets/icons/edit.svg";

const EditProfileTab = ({ userDetails }) => {
  return (
    <EditProfileTabContainer>
      <ProfilePictureCard>
        <img
          src={ProfilePictureImage}
          alt="profile picture"
          className="profilePicture"
        />
        <img src={EditIcon} alt="edit icon" className="editIcon" />
      </ProfilePictureCard>

      <div className="formGroup">
        <div className="inputGroup">
          <p>{settingsPageContent.yourName}</p>
          <InputField type="text" value={userDetails.name} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.userName}</p>
          <InputField type="text" value={userDetails.userName} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.email}</p>
          <InputField type="email" value={userDetails.email} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.password}</p>
          <InputField type="password" value={userDetails.password} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.dateOfBirth}</p>
          <InputField type="text" value={userDetails.dateOfBirth} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.presentAddress}</p>
          <InputField type="text" value={userDetails.presentAddress} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.permanentAddress}</p>
          <InputField type="text" value={userDetails.permanentAddress} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.city}</p>
          <InputField type="text" value={userDetails.city} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.postalCode}</p>
          <InputField type="text" value={userDetails.postalCode} />
        </div>
        <div className="inputGroup">
          <p>{settingsPageContent.country}</p>
          <InputField type="text" value={userDetails.country} />
        </div>
      </div>
    </EditProfileTabContainer>
  );
};

export default EditProfileTab;

const EditProfileTabContainer = styled.form`
  display: flex;
  gap: 60px;

  .formGroup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 30px;
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
`;

const ProfilePictureCard = styled.div`
  position: relative;
  height: 90px;

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
