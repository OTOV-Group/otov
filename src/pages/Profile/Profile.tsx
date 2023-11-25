import { Box, Input } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const ariaLabel = { "aria-label": "description", };
  return (
    <Box className="w-full ">
      <Box boxSizing="border-box" className="max-w=[1200px] w-full border-2 border-gray-500 shadow-2xl rounded-2xl max-h-[500px] h-[200px] bg-[#138d80]">
        <Box className="flex flex-wrap justify-between text-white">
          <Box
          className="flex flex-col max-w-[400px] w-full text-white"
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              text : "white"
            }}
            noValidate
            autoComplete="on"
          >
            <Input placeholder="John" inputProps={ariaLabel} />
            <Input placeholder="Doe" inputProps={ariaLabel} />
            <Input placeholder="+998900000000" />
            <Input placeholder="" sx={{text: "white"}}  inputProps={ariaLabel} />
          </Box>
          <span>
            <AccountCircleIcon
              style={{
                fontSize: "200px",
              }}
            />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
