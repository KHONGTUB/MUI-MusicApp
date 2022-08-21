import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import CustomCard from "./components/card";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import NativeSelect from "@mui/material/NativeSelect";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isHigh, setIsHigh] = useState(false);
  const [isQualityLow, setIsQualityLow] = useState(false);

  return (
    <main>
      <Header title="My Music App" />
      <div className="App">
        {isLoggedIn === false ? (
          <form className="form">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button onClick={() => setIsLoggedIn(true)} variant="contained">
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            <div className="Cards">
              <CustomCard
                state={isToggled}
                setState={setIsToggled}
                title="Online Mode"
                body="Is this application connected to the internet?"
                component={Switch}
              />
              <CustomCard
                state={isHigh}
                setState={setIsHigh}
                title="Master Volume"
                body="Overrides all other sound settings in this application"
                component={Slider}
              />
              <CustomCard
                state={isQualityLow}
                setState={setIsQualityLow}
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection"
                component={NativeSelect}
              />
            </div>

            <h4>System Notifications:</h4>
            <div className="Notifications">
              {isToggled === true && (
                <span>
                  Your application is offline. You wont be able to share or
                  stream music to other devices.
                </span>
              )}
              <br></br>
              {isHigh === true && (
                <span>
                  Listening to music at a high volume could cause long-term
                  hearing loss.
                </span>
              )}
              <br></br>
              {isQualityLow === true && (
                <span>
                  Music quality is degraded. Increase quality if your connection
                  allows it.
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
