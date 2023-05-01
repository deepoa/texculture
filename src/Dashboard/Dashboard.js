import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FcBusiness } from "react-icons/fc";
import { TbPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdArrowUpward } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
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
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "20px",
          }}
          key={index}
        >
          <div>
            {" "}
            <Avatar alt="image"></Avatar>
          </div>

          <Typography>
            Employee Name
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              Role
            </Typography>
          </Typography>
          <Typography>
            Joining Date
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              Employee Code
            </Typography>
          </Typography>
          <Typography>
            Designation{" "}
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              {" "}
              Department
            </Typography>
          </Typography>
          <Typography>
            Phone No{" "}
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              {" "}
              Email
            </Typography>
          </Typography>
          <Typography>
            Location{" "}
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              {" "}
              Business Function
            </Typography>
          </Typography>
          <Typography>
            <span
              style={{
                backgroundColor: "#c8e6c9",
                padding: "5px 15px ",
                borderRadius: "5%",
                color: "#2e7d32",
              }}
            >
              joined{" "}
            </span>
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0" }}
              color="text.secondary"
            >
              {" "}
              Full time
            </Typography>
          </Typography>
        </div>
      </>
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
                <MdOutlineKeyboardArrowRight size={20} />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Attendance"
                />
                <MdOutlineKeyboardArrowRight size={20} />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Leaves"
                />
                <MdOutlineKeyboardArrowRight size={20} />
              </ListItem>{" "}
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Payroll"
                />
                <MdOutlineKeyboardArrowRight size={20} />
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
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Job Offers
                </Typography>
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
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Total Offered
                    </Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#64b5f6",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
                  </div>
                </div>
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Pending Offers{" "}
                    </Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff7043",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
                  </div>
                </div>
                <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Pending OnBoarding{" "}
                    </Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff7043",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
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
                <div
                  style={{
                    padding: "30px",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Joining Overdue
                    </Typography>
                    <Typography>
                      <b>20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#f44336",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
                  </div>
                </div>{" "}
                <div
                  style={{
                    padding: "30px",
                    display: "flex",
                    gap: "20px",
                    marginRight: "7%",
                  }}
                >
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Joined
                    </Typography>
                    <Typography color="">
                      <b>20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#81c784",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
                  </div>
                </div>{" "}
                <div
                  style={{
                    padding: "30px",
                    display: "flex",
                    gap: "20px",
                    marginRight: "7%",
                  }}
                >
                  {" "}
                  <FcBusiness size={"50px"} />
                  <div>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Not Joined
                    </Typography>
                    <Typography>
                      <b> 20 </b> invoices
                    </Typography>
                    <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      $1,205.75
                    </Typography>
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
                height: 1450,
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
                  sx={{ fontSize: 16, padding: "20px", fontWeight: "bold" }}
                >
                  <b
                    style={{
                      backgroundColor: "#64b5f6",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#0277bd",
                      margin: "0 10px",
                    }}
                  >
                    20{" "}
                  </b>{" "}
                  Total Offered
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    padding: "20px",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  <b
                    style={{
                      backgroundColor: "#ffcc80",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#ef6c00",
                      margin: "0 10px",
                    }}
                  >
                    {" "}
                    20
                  </b>{" "}
                  Pending Offers{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    padding: "20px",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  <b
                    style={{
                      backgroundColor: "#ffab91",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#d84315",
                      margin: "0 10px",
                    }}
                  >
                    {" "}
                    20
                  </b>{" "}
                  Pending OnBoarding{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    padding: "20px",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  <b
                    style={{
                      backgroundColor: "#c8e6c9",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#2e7d32",
                      margin: "0 10px",
                    }}
                  >
                    {" "}
                    20
                  </b>{" "}
                  Joining Overdue{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    padding: "20px",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  <b
                    style={{
                      backgroundColor: "#c8e6c9",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#2e7d32",
                      margin: "0 10px",
                    }}
                  >
                    {" "}
                    20
                  </b>{" "}
                  Joined{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    padding: "20px",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  <b
                    style={{
                      backgroundColor: "#eeeeee",
                      padding: "5px 5px ",
                      borderRadius: "20%",
                      color: "#9e9e9e",
                      margin: "0 10px",
                    }}
                  >
                    {" "}
                    20
                  </b>{" "}
                  NotJoined{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "around",
                  marginLeft: "50px",
                }}
              >
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  defaultValue="All"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <BiChevronDown size={30} />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  defaultValue="StartDate"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BsFillCalendarFill size={25} />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  defaultValue="End Date"
                  sx={{ m: 1, width: "20ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BsFillCalendarFill size={25} />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  // label="With normal TextField"
                  id="outlined-start-adornment"
                  defaultValue="Search"
                  sx={{ m: 1, width: "70ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CiSearch size={30} />
                      </InputAdornment>
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
                <div></div>
                <Typography>
                  Name
                  <span>
                    {" "}
                    <MdArrowUpward />
                  </span>
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
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                    marginRight: "30px",
                    gap: "30px",
                  }}
                >
                  <Typography sx={{ padding: "8px" }}>Row per page</Typography>
                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    10
                  </Typography>
                  <div style={{ paddingTop: "10px" }}>
                    {" "}
                    <BiChevronDown size={20} />
                  </div>

                  <Typography sx={{ padding: "8px", fontWeight: "bold" }}>
                    1-5 of 24
                    <span>
                      {" "}
                      <BiChevronLeft size={20} />
                    </span>
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
