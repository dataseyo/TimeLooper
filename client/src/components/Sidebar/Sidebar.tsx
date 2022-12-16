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
import { 
    NavLoop
} from '..';
import icons from '../../assets/icons.png'
import {
    useAppSelector
} from '../../state/hooks'

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
    // mobile menu state
    const [mobileOpen, setMobileOpen] = useState(false);

    // redux store state
    const loop = useAppSelector(state => state.loop)
    const skills = useAppSelector(state => state.char.skills)

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
            ["Loop", "Char", "Shop"].map((text, index) => {
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
            skills.map((data) => {
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
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgba(54, 53, 55)" }}
      >
        <Toolbar
            sx={{
                display: 'flex'
            }}
        >
            <Box sx={{ mr: 2, display: { sm: 'none' } }} className="sidebar-menu-container">
                <FaBars 
                    className="sidebar-menu" 
                    onClick={() => handleDrawerToggle()}
                    style={{
                        cursor: "pointer"
                    }}
                />
            </Box>
          <Typography variant="h4" component="div" sx={{userSelect: "none", fontFamily: "fantasy", fontWeight: "bold"}} >
            Time
            <span style={{color: "rgba(0, 117, 32)"}}>
            Looper
            </span>
          </Typography>
          <NavLoop
            {...loop}
          />
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "rgba(54, 53, 55)"  },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "rgba(54, 53, 55)"  },
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
            backgroundColor: "rgba(232, 241, 242)",
            justifyContent: 'center',
        }}
      >
          {children}
      </Box>
    </Box>
  );
}

export default Sidebar