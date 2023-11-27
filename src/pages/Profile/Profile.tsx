import React, { useState, ChangeEvent } from "react";
import { Box, Button, Input } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const initialFormData = {
    name: "Olimjon",
    sure: "Nishanaliyev",
    number: "+998903713153",
    age: "19",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsFormChanged(true);
  };

  const handleButtonClick = () => {
    // Handle the logic when the button is clicked, e.g., send the updated data to the server
    console.log("Updated Data:", formData);
    setIsFormChanged(false); // Reset the form changed state after handling the click
  };

  return (
    <Box className="w-full">
      <Box
        boxSizing="border-box"
        className="max-w-[1200px] w-full border-2 border-gray-500 shadow-2xl rounded-2xl max-h-[500px] h-[200px] bg-[#138d80]"
      >
        <Box>
          <Box className="flex flex-wrap justify-between text-white">
            <span>
              <AccountCircleIcon style={{ fontSize: "200px" }} />
            </span>

            <Box
              className="flex flex-col max-w-[400px] w-full text-white"
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
                text: "white",
              }}
              noValidate
              autoComplete="on"
            >
              <Input
                name="name"
                value={formData.name}
                placeholder="John"
                inputProps={{ "aria-label": "description" }}
                onChange={handleChange}
              />
              <Input
                name="sure"
                value={formData.sure}
                placeholder="Doe"
                inputProps={{ "aria-label": "description" }}
                onChange={handleChange}
              />
              <Input
                name="number"
                value={formData.number}
                disabled
              />
              <Input
                name="age"
                value={formData.age}
                placeholder=""
                sx={{ text: "white" }}
                inputProps={{ "aria-label": "description" }}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Button
            className="mt-5 border-2 border-gray"
            onClick={handleButtonClick}
            disabled={!isFormChanged}
          >
            O'zgartirish
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
