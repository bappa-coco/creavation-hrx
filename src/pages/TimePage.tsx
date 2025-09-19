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
} from "@mui/material";
import { ContentCopy, ContentPaste } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const TimePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
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
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Admin
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" color="primary">
              Dashboard
            </Typography>
            <Typography variant="body2">Leave | Attendance</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" color="primary">
              User Management
            </Typography>
            <Typography variant="body2">
              Manage User Profile | Assign Role | Page Access Control
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" color="primary">
              Workflow
            </Typography>
            <Typography variant="body2">
              Approver Level | Assign Approver | Workflow Definition | Approver
              List Report | Update Pending Applications
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimePage;
