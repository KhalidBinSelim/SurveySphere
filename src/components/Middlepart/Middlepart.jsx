import { Card, Avatar, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";

const posts = [1, 1, 1, 1, 1];

const Middlepart = () => {
  const handleOpenCreatePostModal = () => {
    console.log("open post modal...");
  };

  return (
    <div>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            readOnly
            type="text"
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <AddPhotoAlternateIcon />
            </IconButton>
            <span>media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideoFileIcon />
            </IconButton>
            <span>video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>article</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {posts.map((item) => (
          <PostCard />
        ))}
        <PostCard />
      </div>
    </div>
  );
};

export default Middlepart;
