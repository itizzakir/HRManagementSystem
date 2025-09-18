import React, { useState } from "react";

const UserProfile = () => {
  const [activeMenu, setActiveMenu] = useState("Personal Details");
  const [menuItems, setMenuItems] = useState([
    "Personal Details",
    "Contact Details",
    "Education Qualifications",
  ]);

  const handleRemoveItem = (item) => {
    if (item !== "Education Qualifications") {
      setMenuItems((prevItems) =>
        prevItems.filter((menuItem) => menuItem !== item)
      );
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Personal Details":
        return <div>Personal Details Content</div>;
      case "Contact Details":
        return <div>Contact Details Content</div>;
      case "Education Qualifications":
        return <div>Education Qualifications Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        {menuItems
          .filter(
            (item) => item !== "Financial Details" && item !== "Job Details"
          )
          .map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`text-blue-500 hover:text-blue-700 ${
                activeMenu === item ? "text-blue-700" : ""
              }`}
            >
              {item}
            </button>
          ))}
      </div>
      <div>{renderContent()}</div>
      <div>
        {menuItems
          .filter(
            (item) => item !== "Financial Details" && item !== "Job Details"
          )
          .map((item) => (
            <button
              key={item}
              onClick={() => handleRemoveItem(item)}
              className="text-red-500 hover:text-red-700"
            >
              Remove {item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default UserProfile;
