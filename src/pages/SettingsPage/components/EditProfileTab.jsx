import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { settingsPageContent } from "@/constants/content";
import { formatDate } from "@/services/helpers/date";

import { InputField } from "@components/molecules";
import { Button } from "@components/atoms";

import ProfilePictureImage from "@assets/images/profile.png";
import EditIcon from "@assets/icons/edit.svg";
import { userSelector } from "../../../redux/reducers/user";
import { handleUpdateUserData } from "../../../redux/reducers/user";
import LoadingSpinner from "../../../components/atoms/Spinner";

const EditProfileTab = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(userSelector);

  // Initialize form state with profile data
  const [userData, setUserData] = useState({
    name: profile.name || "",
    email: profile.email || "",
    userName: profile.userName || "",
    password: profile.password || "",
    dateOfBirth: profile.dateOfBirth || "",
    presentAddress: profile.presentAddress || "",
    permanentAddress: profile.permanentAddress || "",
    city: profile.city || "",
    postalCode: profile.postalCode || "",
    country: profile.country || "",
  });

  // Update form state when profile data is available
  useEffect(() => {
    if (profile && Object.keys(profile).length > 0) {
      setUserData(profile);
    }
  }, [profile]);

  // If profile data is not available yet, show a loading message
  if (Object.keys(profile).length === 0) {
    return (
      <div>
        <p>Loading profile data...</p>
        <LoadingSpinner />
      </div>
    );
  }

  // Track if the form has been modified
  const [isFormModified, setIsFormModified] = useState(false);

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate password format (at least 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      validateEmail(userData.email) &&
      validatePassword(userData.password) &&
      isFormModified
    );
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setIsFormModified(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert(
        "Please ensure all fields are valid and there are changes to save."
      );
      return;
    }

    // Dispatch the updated user data to Redux
    dispatch(handleUpdateUserData(userData));
    setIsFormModified(false); // Reset form modification state
  };

  return (
    <EditProfileTabContainer onSubmit={handleSubmit}>
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
            {!validateEmail(userData.email) && (
              <p style={{ color: "red" }}>Invalid email format.</p>
            )}
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.password}</p>
            <InputField
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
            />
            {!validatePassword(userData.password) && (
              <p style={{ color: "red" }}>
                Password must be at least 6 characters.
              </p>
            )}
          </div>
          <div className="inputGroup">
            <p>{settingsPageContent.dateOfBirth}</p>
            <InputField
              name="dateOfBirth"
              type="text"
              value={formatDate(userData.dateOfBirth)}
              onChange={handleChange}
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
          type="submit"
          disabled={!isFormValid()} // Disable button if form is invalid or unchanged
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
