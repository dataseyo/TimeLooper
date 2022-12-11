import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'

import './styles.css'
import icons from '../../assets/icons.png'

const drawerWidth = 240;

interface Props {
  window?: () => Window,
  children: React.ReactElement
}

type Task = {
    id: number,
    name: string,
    xp: number
}

type TestData = {
    id: number,
    name: string,
    asset: string,
    level: number,
    tasks: Task[]
}

const Sidebar = ({
    window,
    children
}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // replace test data with redux state
    const [testData, setTestData] = useState<TestData[]>(
        [{
            id: 1,
            name: "Strength",
            asset: "-128px -32px",
            level: 1,
            tasks: [
                {
                    id: 1,
                    name: "task 1",
                    xp: 10
                },
    
                {
                    id: 2,
                    name: "task 2",
                    xp: 20
                }
            ]
        },
    
        {
            id: 2,
            name: "Arcane",
            level: 1,
            asset: "-128px -576px",
            tasks: [
                {
                    id: 1,
                    name: "task 1",
                    xp: 10
                },
    
                {
                    id: 2,
                    name: "task 2",
                    xp: 20
                }
            ]
        },
    
        {
            id: 3,
            name: "Mind",
            level: 1,
            asset: "-448px -96px",
            tasks: [
                {
                    id: 1,
                    name: "task 1",
                    xp: 10
                },
    
                {
                    id: 2,
                    name: "task 2",
                    xp: 20
                }
            ]
        },
    
        {
            id: 4,
            name: "Tinkering",
            level: 9,
            asset: "-128px -128px",
            tasks: [
                {
                    id: 1,
                    name: "task 1",
                    xp: 10
                },
    
                {
                    id: 2,
                    name: "task 2",
                    xp: 20
                }
            ]
        },
    
        {
            id: 5,
            name: "Exploring",
            level: 22,
            asset: "-382px -416px",
            tasks: [
                {
                    id: 1,
                    name: "task 1",
                    xp: 10
                },
    
                {
                    id: 2,
                    name: "task 2",
                    xp: 20
                }
            ]
        }]
    )

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* {test_data.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {
            ["Char", "Shop"].map((text, index) => {
                return (
                    <Link to={`${text.toLowerCase()}`} className="sidebar-link" key={index}>
                        <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {/* <div style={{
                                    background: `url(${icons}) `,
                                    height: '32px', 
                                    width: '32px'
                                }}
                                /> */}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                        </ListItem>
                    </Link>
                )
            })
        }
      </List>
      <Divider />
      <List>
        {/* {test_data.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {
            testData.map((data) => {
                return (
                    <Link 
                        to={`${data.id}`} 
                        state={data} 
                        className="sidebar-link" 
                        key={data.id} 
                    >
                        <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <div style={{
                                    background: `url(${icons}) ${data.asset}`,
                                    height: '32px', 
                                    width: '32px'
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={data.name} />
                        <ListItemText 
                            disableTypography
                            secondary={`Lv. ${data.level}`} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                color: 'rgba(255, 250, 255, 1)',
                                fontSize: '.8em'
                            }}
                        />
                        </ListItemButton>
                        </ListItem>
                    </Link>
                )
            })
        }
      </List>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#363537" }}
      >
        <Toolbar>
            <Box sx={{ mr: 2, display: { sm: 'none' } }} className="sidebar-menu-container">
                <FaBars 
                    className="sidebar-menu" 
                    onClick={() => handleDrawerToggle()}
                />
            </Box>
          <Typography variant="h6" noWrap component="div">
            TimeLooper
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClick={() => handleDrawerToggle()} // close sidebar when clicking sidebar button
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#363537"  },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#363537"  },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
            flexGrow: 1, 
            pt: 5.5, 
            pl: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            display: 'flex',
            height: '100vh',
            backgroundColor: "rgba(54, 53, 55, .5)"         
        }}

      >
          {children}
      </Box>
    </Box>
  );
}

export default Sidebar