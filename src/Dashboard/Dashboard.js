import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FcBusiness } from "react-icons/fc";
import { TbPlus } from "react-icons/tb";
import Box from "@mui/material/Box";
import { grey, lightGreen, green, teal } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { fontSize } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

const color = grey[100];
const color2 = lightGreen[100];
const darkGreen = green[500];
const color3 = teal[50];
const options = {
  shouldForwardProp: (prop) => prop !== "rounded",
};
const ColorButton = styled(
  Button,
  options
)(({ theme, rounded }) => ({
  backgroundColor: lightGreen[900],
  borderRadius: rounded ? "24px" : null,
}));

const Dashboard = () => {
  const pTags = [];
  const label = { inputProps: { "aria-label": "Switch demo" } };

  Array.from({ length: 10 }).forEach((_, index) => {
    pTags.push(
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
        key={index}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography>
          Employee Name
          <Typography>Role</Typography>
        </Typography>
        <Typography>
          Joining Date
          <Typography>Employee Code</Typography>
        </Typography>
        <Typography>
          Designation <Typography> Department</Typography>
        </Typography>
        <Typography>
          Phone No <Typography> Email</Typography>
        </Typography>
        <Typography>
          Location <Typography> Business Function</Typography>
        </Typography>
        <Typography>
          Status <Typography> Full time</Typography>
        </Typography>
      </div>
    );
  });

  return (
    <>
      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <AiOutlineDoubleLeft size={"25px"} />
          </div>
          <div>
            <Box
              sx={{
                width: 300,
                height: 80,
                backgroundColor: color,
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div style={{ paddingTop: "22px", paddingLeft: "15px" }}>
                  {" "}
                  <Avatar></Avatar>
                </div>
                <p style={{ paddingTop: "18px" }}>Ananya Singh</p>
              </div>{" "}
            </Box>
          </div>
          <Typography sx={{ fontSize: "14px", padding: "30px 0" }}>
            <b> PEOPLE CARE SYSTEM</b>
          </Typography>

          <div>
            <Box
              sx={{
                width: 300,
                height: 55,
                backgroundColor: color3,
                borderRadius: 3,
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingTop: "15px",
                  marginLeft: "60px",
                }}
              >
                <b style={{ color: "#4caf50" }}>Home</b>
              </Typography>{" "}
            </Box>
          </div>

          <div>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              subheader={
                <ListSubheader>
                  <Typography sx={{ fontWeight: "15px", paddingTop: "40px" }}>
                    <b>Management</b>
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText id="switch-list-label-wifi" primary="Employee" />
                <MdOutlineKeyboardArrowRight />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Attendance"
                />
                <MdOutlineKeyboardArrowRight />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Leaves"
                />
                <MdOutlineKeyboardArrowRight />
              </ListItem>{" "}
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Payroll"
                />
                <MdOutlineKeyboardArrowRight />
              </ListItem>{" "}
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Separation"
                />
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "3rem 0" }}>
              {" "}
              <BsSearch size={25} />
            </div>

            <div style={{ paddingTop: "40px" }}>
              <Avatar sx={{ backgroundColor: darkGreen }}>A</Avatar>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div>
                {" "}
                <Typography variant="h5">Job Offers</Typography>
              </div>
              <div style={{ padding: "20px 0", display: "flex" }}>
                {" "}
                <div>
                  {" "}
                  <Typography variant="p">Dashboard</Typography>
                </div>
                <div>
                  <ul
                    style={{
                      display: "flex",
                      gap: "2rem",
                      marginTop: "-0.1px",
                    }}
                  >
                    <li>Job</li>
                    <li style={{ color: "grey" }}>Offers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#4caf50",
                  borderRadius: 2,
                  padding: "10px 20px",
                }}
                variant="contained"
                size="medium"
                startIcon={<TbPlus />}
              >
                <b>NewOffer</b>
              </Button>
            </div>
          </div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1400,
                height: 300,
              },
            }}
          >
            {" "}
            <Paper elevation={2} style={{ borderRadius: "15px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>{" "}
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>{" "}
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h5">Total Offered</Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography>$1,205.75</Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1400,
                height: 1250,
              },
            }}
          >
            <Paper elevation={2} style={{ borderRadius: "15px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", padding: "20px" }}
                >
                  20 Total Offered
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "20px",
                  }}
                >
                  20 Total Offered
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "20px",
                  }}
                >
                  20 Total Offered
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "20px",
                  }}
                >
                  20 Total Offered
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "20px",
                  }}
                >
                  20 Total Offered
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", padding: "20px" }}
                >
                  20 Total Offered
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">All</InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        Start Date
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">End Date</InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "30ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Search</InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Typography>
                  Name
                  <Typography>Role</Typography>
                </Typography>
                <Typography>
                  Joining Date
                  <Typography>Offering Date</Typography>
                </Typography>
                <Typography>
                  Designation <Typography> Department</Typography>
                </Typography>
                <Typography>
                  Phone No <Typography> Email</Typography>
                </Typography>
                <Typography>
                  Location <Typography> Business Function</Typography>
                </Typography>
                <Typography>
                  Status <Typography> Employment Type</Typography>
                </Typography>
              </div>
              <div>{pTags}</div>
              <br></br>
              <br></br> <br></br>
              <Divider />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                  }}
                >
                  {" "}
                  <Switch {...label} />
                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    Dense
                  </Typography>
                </div>
                <div style={{ display: "flex", padding: "20px" }}>
                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    Row per page
                  </Typography>
                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    10
                  </Typography>
                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    1-5 of 24
                  </Typography>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
