import { Avatar, Divider, MenuItem, Button, Menu, Card } from "@mui/material";
import { navigationMenu } from "./SidebarNavigation";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="card h-screen flex flex-col justify-between py-5 px-0">
      <div className="space-y-8 pl-5 px-0 mx-0">
        <div className="">
          <span className="logo front-bold text-xl">SurveySphere</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer flex space-x-3 items-center"
            >
              <item.icon /> {/* Use JSX to render the component */}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="src\assets\images\khalid-photo.jpg" />
            <div>
              <p className="font-bold">Khalid Bin Selim</p>
              <p className="opacity-70">@khalidbinselim </p>
            </div>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon color="action" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
