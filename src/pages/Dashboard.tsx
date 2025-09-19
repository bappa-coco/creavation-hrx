import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Paper,
  MenuList,
  MenuItem,
} from "@mui/material";
import { ContentCopy, ContentPaste } from "@mui/icons-material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

// Sample Data
const employees = [
  { name: "John Doe", dob: "1990-09-14", doj: "2015-09-14" },
  { name: "Jane Smith", dob: "1992-05-10", doj: "2018-06-20" },
];

const drawerWidth = 240;

const Dashboard = () => {
  const [time, setTime] = useState(new Date());
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();

  // Update Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Random Quote
  useEffect(() => {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Success is not final, failure is not fatal.",
      "Hard work beats talent when talent doesn’t work hard.",
      "Your limitation—it's only your imagination.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Today’s date
  const todayStr = new Date().toISOString().slice(5, 10);
  const birthdays = employees.filter(
    (emp) => emp.dob.slice(5, 10) === todayStr
  );
  const anniversaries = employees.filter(
    (emp) => emp.doj.slice(5, 10) === todayStr
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "primary.main",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Admin Panel
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "white" }} />
        <MenuList>
          <MenuItem onClick={() => navigate("/admin")}>
            <ListItemIcon>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Admin</ListItemText>
            <KeyboardDoubleArrowRightIcon />
          </MenuItem>

          <MenuItem onClick={() => navigate("/leave")}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Leave</ListItemText>
            <KeyboardDoubleArrowRightIcon />
          </MenuItem>

          <MenuItem onClick={() => navigate("/time")}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Time</ListItemText>
            <KeyboardDoubleArrowRightIcon />
          </MenuItem>
        </MenuList>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f0f0f0" }}
      >
        {/* Top Row: Four Cards */}
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
          {/* Motivation Card */}
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: "25%" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Motivation
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" fontStyle="italic">
                {quote}
              </Typography>
            </Paper>
          </Box>

          {/* Birthdays Today */}
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: "25%" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Birthdays Today
              </Typography>
              <Divider sx={{ my: 1 }} />
              {birthdays.length > 0 ? (
                <List>
                  {birthdays.map((emp) => (
                    <ListItem key={emp.name}>
                      <ListItemText primary={emp.name} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No birthdays today 🎉</Typography>
              )}
            </Paper>
          </Box>

          {/* Current Time */}
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: "25%" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Current Time
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h4" color="success.main">
                {time.toLocaleTimeString()}
              </Typography>
              <Typography variant="body2">{time.toDateString()}</Typography>
            </Paper>
          </Box>

          {/* Work Anniversaries */}
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: "25%" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Work Anniversaries
              </Typography>
              <Divider sx={{ my: 1 }} />
              {anniversaries.length > 0 ? (
                <List>
                  {anniversaries.map((emp) => (
                    <ListItem key={emp.name}>
                      <ListItemText primary={`${emp.name} 🎊`} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No anniversaries today 🎉</Typography>
              )}
            </Paper>
          </Box>
        </Box>

        {/* Calendar Card Below */}
        <Box sx={{ mt: 8 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              height: "auto",
              boxShadow: 3,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Calendar & Shift
            </Typography>
            <Divider sx={{ my: 1 }} />
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height="auto"
              events={[
                { title: "Shift SM", date: "2025-09-14" },
                { title: "Shift SO", date: "2025-09-16" },
                { title: "Shift SO", date: "2025-09-17" },
                { title: "Shift SO", date: "2025-09-18" },
                { title: "Shift SO", date: "2025-09-19" },
              ]}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
