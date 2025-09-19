import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Paper,
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { ContentCopy, ContentPaste } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const LeavePage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <InfoOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "My Info",
      links: ["Entitlement", "My Leave Register", "LTC Status", "Leave Rules"],
    },
    {
      icon: <EditNoteOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Leave",
      links: [
        "Apply",
        "Apply By Manager",
        "Approve",
        "Cancellation",
        "Cancellation - HR",
      ],
    },
    {
      icon: <SwapHorizOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Comp. Off",
      links: [
        "Apply",
        "Apply By Manager",
        "Approve",
        "Cancellation",
        "Reports - Manager",
        "Reports - HR",
      ],
    },
    {
      icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Leave Adjustment",
      links: [
        "Entry",
        "Request",
        "Request By Manager",
        "Approve",
        "Reports - HR",
      ],
    },
    {
      icon: <SummarizeOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Leave Reports",
      links: [
        "Reports - Manager",
        "Reports - HR",
        "Leave Register Report - Manager",
        "Leave Register Report - HR",
      ],
    },
    {
      icon: <SettingsOutlinedIcon sx={{ fontSize: 40 }} />,
      title: "Configuration",
      links: ["Settings", "Leave Category Master", "Leave Application Import"],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
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
        sx={{
          flexGrow: 1,
          bgcolor: "#f9f9f9",
          p: 3,
          ml: `${drawerWidth}px`, // Push content right of Drawer
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Admin
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Dashboard Grid */}
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  height: "100%",
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  {section.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "green" }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {section.links.map((link, i) => (
                    <React.Fragment key={i}>
                      <Link
                        href="#"
                        underline="hover"
                        sx={{ color: "text.primary", fontSize: "0.9rem" }}
                      >
                        {link}
                      </Link>
                      {i < section.links.length - 1 && " | "}
                    </React.Fragment>
                  ))}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeavePage;
