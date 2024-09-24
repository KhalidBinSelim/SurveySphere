import { useParams } from "react-router-dom";
import { Avatar, Button, Box, Tabs, Tab, Card } from "@mui/material";
import React from "react";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" }
];

const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1];

const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfiVyvHV7jmr77og_AAAf25L3d6r_LRG_0A&s"
            alt="cover photo"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/461119301_539516215105119_5166375507193257237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhJIfsJqBbvUrZtqeea4S3zCrANCgLQtrMKsA0KAtC2gSGIBQiC0wGEqFnnwzLUrII2_k9_k6cc5QPb0Q9y1Mg&_nc_ohc=R9bSZBcNDeUQ7kNvgFB0mMr&_nc_ht=scontent.fdac151-1.fna&oh=00_AYBygYZAhhrxw1mHMfkdT10JKFBNfGqJfWC3FMsznUG4PQ&oe=66F72D9A"
          />

          {true ? (
            <Button variant="outlined">Edit Profile</Button>
          ) : (
            <Button variant="outlined">Connect</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">Khalid Bin Selim</h1>
            <p>@khalidbinselim</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>22 post</span>
            <span>44 followers</span>
            <span>2 followings</span>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              beatae blanditiis eaque facere? Ratione sunt ex blanditiis
              voluptas tempore odit ab dolores, debitis vel? Qui eius
              repellendus adipisci maiores dolorum?
            </p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((items) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((items) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
