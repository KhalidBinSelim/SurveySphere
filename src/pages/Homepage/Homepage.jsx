import { Grid2 } from "@mui/material";
import Middlepart from "../../components/Middlepart/Middlepart";
import Reels from "../../components/Reels/Reels";
import CreateReelsForm from "../../components/Reels/CreateReelsForm";
import Profile from "../Profile/Profile";
// import HomeRight from '../../components/HomeRight/HomeRight';
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRight from "./../../components/HomeRight/HomeRight";
import Sidebar from "./../../components/Sidebar/Sidebar";

const Homepage = () => {
  const location = useLocation();

  return (
    // <div className="px-20">

    //     <Grid2 container spacing={0}>

    //         <Grid2 item xs={0} lg={3}>

    //             <div className='sticky top-0'>

    //                 <Sidebar />

    //             </div>

    //         </Grid2>

    //         <Grid2 lg={location.pathname==="/"?6:9} item className='px-5 flex justify-center' xs={12}>

    //             <Routes>

    //                 <Route path='/' element={<Middlepart/>} />

    //                 <Route path='/reels' element={<Reels/>} />

    //                 <Route path='/create-reels' element={<CreateReelsForm/>} />

    //                 <Route path='/profile/:id' element={<Profile/>} />

    //             </Routes>

    //         </Grid2>

    //         {location.pathname==="/" && <Grid2 item lg={3} className="relative">

    //             <div className='sticky top-0 w-full'>

    //                 <HomeRight />

    //             </div>

    //         </Grid2>}

    //     </Grid2>

    // </div>

    <div className="grid grid-flow-col justify-stretch gap-x-3 m-0 columns-3">
      <div className="grid justify-items-end pr-0 m-0 sticky top-0 w-full">
        <Sidebar />
      </div>

      <div className="grid justify-items-center w-full m-0">
        <Routes>
          <Route path="/" element={<Middlepart />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/create-reels" element={<CreateReelsForm />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>

      <div>
        <div className="grid justify-items-end pr-0 m-0 sticky top-0 w-full">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
