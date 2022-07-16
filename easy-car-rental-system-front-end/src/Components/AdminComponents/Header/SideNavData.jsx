import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import ManIcon from '@mui/icons-material/Man';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";

export default function SideNavData() {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", link: "/", icon: <HomeIcon/>},
        {label: "Manage Car", link: "/manageCar", icon: <DirectionsCarIcon/>},
        {label: "Manage Driver", link: "/manageDriver", icon: <AirlineSeatReclineNormalIcon/>},
        {label: "Manage Customer", link: "/manageCustomer", icon: <ManIcon/>},
    ]
    return (<List>
            {listItemData.map((item, i) => (<ListItem
                    component={NavLink}
                    to={item.link}
                    className={classes.navLinks}
                    activeClassName={classes.activeNavLinks}
                    key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>))}
        </List>);
}
