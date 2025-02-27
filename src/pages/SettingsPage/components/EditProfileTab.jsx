import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import { settingsPageContent } from "@/constants/content";
import { handleUpdateUserData } from "@/redux/reducers/user";
import { validateEmail, validatePassword } from "@/services/helpers/string";

import { Button } from "@components/atoms";
import LoadingSpinner from "@components/atoms/Spinner";
import InputGroup from "@components/molecules/InputGroup";

import ProfilePictureImage from "@assets/images/profile.png";
import EditIcon from "@assets/icons/edit.svg?react";

import { EditProfileTabContainer, ProfilePictureCard } from "./styles";

const EditProfileTab = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(userSelector);

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

  useEffect(() => {
    if (profile && Object.keys(profile).length > 0) {
      setUserData(profile);
    }
  }, [profile]);

  const [isSaved, setIsSaved] = useState(false);

  const hasFormChanged = () => {
    return Object.keys(userData).some((key) => userData[key] !== profile[key]);
  };

  const isFormComplete = () => {
    return Object.values(userData).every((value) => value.trim() !== "");
  };

  const isFormValid = () => {
    return (
      validateEmail(userData.email) &&
      validatePassword(userData.password) &&
      hasFormChanged() &&
      isFormComplete()
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert(settingsPageContent.formValidationMessage);
      return;
    }

    dispatch(handleUpdateUserData(userData));
    setIsSaved(true);
  };

  if (Object.keys(profile).length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <EditProfileTabContainer onSubmit={handleSubmit}>
      <ProfilePictureCard>
        <img
          src={ProfilePictureImage}
          alt="profile picture"
          className="profilePicture"
        />
        <EditIcon className="editIcon" />
      </ProfilePictureCard>

      <div className="formWrapper">
        <div className="inputGroupWrapper">
          {formFields.map((field) => (
            <InputGroup
              key={field.name}
              type={field.type}
              label={field.label}
              name={field.name}
              value={userData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <Button
          className="saveButton"
          variant="secondary"
          size="large"
          type="submit"
          disabled={!isFormValid()}
        >
          {isSaved ? settingsPageContent.saved : settingsPageContent.save}
        </Button>
      </div>
    </EditProfileTabContainer>
  );
};

const formFields = [
  { label: settingsPageContent.yourName, name: "name", type: "text" },
  { label: settingsPageContent.userName, name: "userName", type: "text" },
  { label: settingsPageContent.email, name: "email", type: "email" },
  { label: settingsPageContent.password, name: "password", type: "password" },
  { label: settingsPageContent.dateOfBirth, name: "dateOfBirth", type: "text" },
  {
    label: settingsPageContent.presentAddress,
    name: "presentAddress",
    type: "text",
  },
  {
    label: settingsPageContent.permanentAddress,
    name: "permanentAddress",
    type: "text",
  },
  { label: settingsPageContent.city, name: "city", type: "text" },
  { label: settingsPageContent.postalCode, name: "postalCode", type: "text" },
  { label: settingsPageContent.country, name: "country", type: "text" },
];

export default EditProfileTab;
