import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NativeSelect, Slider, Switch } from "@mui/material";
import FormControl from "@mui/material/FormControl";

// import Switch from "@mui/material/Switch";

export default function CustomCard({
  state,
  setState,
  title,
  body,
  component: Component,
}) {
  if (Component === Switch) {
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <div className="card-title-container">
            <Typography variant="body2">{body}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Component defaultChecked onChange={() => setState(!state)} />
        </CardActions>
      </Card>
    );
  }
  if (Component === Slider) {
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <div className="card-title-container">
            <Typography variant="body2">{body}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Component
            aria-label="Temperature"
            defaultValue={30}
            // onChange={() => console.log(Event.target.value)}
            valueLabelDisplay="auto"
            step={10}
            onChange={(e) => {
              if (e.target.value >= 80) {
                setState(true);
              } else {
                setState(false);
              }
            }}
            marks
            min={0}
            max={100}
          />
        </CardActions>
      </Card>
    );
  }
  if (Component === NativeSelect) {
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <div className="card-title-container">
            <Typography variant="body2">{body}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <FormControl fullWidth>
            <Component defaultValue={2}>
              <option value={1}>Low</option>
              <option value={2}>Normal</option>
              <option value={3}>High</option>
            </Component>
          </FormControl>
        </CardActions>
      </Card>
    );
  }
}
