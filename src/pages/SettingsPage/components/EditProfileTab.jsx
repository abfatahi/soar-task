import { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserDetails } from "@/services/apis/user";

import { settingsPageContent } from "@/constants/content";
import { formatDate } from "@/services/helpers/date";

import { InputField } from "@components/molecules";
import { Button } from "@components/atoms";

import ProfilePictureImage from "@assets/images/profile.png";
import EditIcon from "@assets/icons/edit.svg";

const EditProfileTab = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    getUserDetails().then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((user) => ({ ...user, [name]: value }));
  };

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

      <div className="formWrapper">
        <div className="inputGroupWrapper">
          <div className="inputGroup">
            <p>{settingsPageContent.yourName}</p>
            <InputField
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.userName}</p>
            <InputField
              name="userName"
              type="text"
              value={userData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.email}</p>
            <InputField
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.password}</p>
            <InputField
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.dateOfBirth}</p>
            <InputField
              name="dateOfBirth"
              type="text"
              value={formatDate(userData.dateOfBirth)}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.presentAddress}</p>
            <InputField
              name="presentAddress"
              type="text"
              value={userData.presentAddress}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.permanentAddress}</p>
            <InputField
              name="permanentAddress"
              type="text"
              value={userData.permanentAddress}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.city}</p>
            <InputField
              name="city"
              type="text"
              value={userData.city}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.postalCode}</p>
            <InputField
              name="postalCode"
              type="text"
              value={userData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.country}</p>
            <InputField
              name="country"
              type="text"
              value={userData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          className="saveButton"
          variant="secondary"
          size="large"
          onClick={(e) => {
            e.preventDefault();
            console.log(userData);
          }}
        >
          {settingsPageContent.save}
        </Button>
      </div>
    </EditProfileTabContainer>
  );
};

export default EditProfileTab;

const EditProfileTabContainer = styled.form`
  display: flex;
  gap: 60px;

  .formWrapper {
    width: 100%;

    .inputGroupWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
      column-gap: 30px;
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
    margin-top: 2rem;
    float: right;
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
