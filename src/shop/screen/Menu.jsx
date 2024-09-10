import React, { useState } from "react";
import CatalogScreen from "./Catalog";
import { Button } from "./Footer";
import { Box, List, ListItem, SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
    {title: 'Catalog', link:'/'},
    {title: 'Cart', link:'/cart'},
    {title: 'Checkout', link:'/checkout'},
    {title: 'Product Card', link:'/product/0'},
    {title: 'Log In', link:'/login'},
    
];


export default function Menu(){
    const [open, setOpen] = useState(false);


    return  <>
        <div 
            className={'footer_button'} 
            onClick={() => setOpen(true)}
            >
                <Button 
                    icon='/img/menu.svg' 
                    title='Menu' 
                />
        </div>
        <SwipeableDrawer
            open={open}
            onClose={()=>setOpen(false)}
            onOpen={()=>setOpen(true)}
            >

            <div className="menu">
            <List
                style={{width:'340px', justifySelf:'center'}}
            >
                {links.map(
                    el => <ListItem component={Link} to={el.link}>
                        {el.title}
                    </ListItem>
            )}
            </List>
            </div>
        </SwipeableDrawer>
    </>
}