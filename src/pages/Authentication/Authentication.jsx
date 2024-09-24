/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Card, Grid2 } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <>
      {/* <Card> */}
      <div className="rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="h-screen overflow-hidden flex flex-nowrap items-center bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-lg">
          <img
            className="w-full"
            src="src\assets\images\login.jpg"
            alt="login page image"
          />
        </div>

        <div>
          <div className="px-20 flex flex-nowrap flex-col justify-center h-full">
            <Card className="card p-8 items-center">
              <div className="flex flex-col justify-center mb-10 mt-3 space-y-10">
                <img
                  className="w-auto object-cover"
                  src="src\assets\Logos\survey-sphere-logo.png"
                  alt="surveysphere logo"
                ></img>
              </div>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>

              {/* <Register /> */}
            </Card>
          </div>
        </div>
      </div>

      {/* </Card> */}
    </>
  );
};

export default Authentication;
