import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from "@mui/icons-material/Share";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
// import { Collapse } from '@mui/material/Collapse';

const PostCard = () => {
  return (
    <Card className="">
      <CardHeader
        avatar={<Avatar aria-label="recipe">K</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Khalid Bin Selim"
        subheader="@khalidbinselim"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <CardMedia
          component="img"
          width="10%"
          image="src\assets\images\Dummy post image 1.jpeg"
          alt="NASA"
        />
        <CardActions className="flex justify-between" disableSpacing>
          <div>
            <IconButton>
              {true ? (
                <StarRoundedIcon color="success" />
              ) : (
                <StarBorderRoundedIcon />
              )}
            </IconButton>

            <IconButton>
              <CommentRoundedIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              {true ? <BookmarkAddRoundedIcon /> : <BookmarkAddedRoundedIcon />}
            </IconButton>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PostCard;
