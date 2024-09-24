import { CardHeader, Avatar, IconButton, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size="small">
            Connect
          </Button>
        }
        title="Therap BD Ltd."
        subheader="@TherapBD"
      />
    </div>
  );
};

export default PopularUserCard;
