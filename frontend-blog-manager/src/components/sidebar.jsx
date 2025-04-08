import React from 'react';
import { NavLink } from "react-router-dom";


const SidebarNav = () => {
    return (
        <div style={styles.sidebar}>
            <h2 style={styles.title}>Blog Manager</h2>
            <nav style={styles.list}>
                <NavLink to="/" style={styles.listItem}>All Blogs</NavLink>
                <NavLink to="/PersonalBlogs" style={styles.listItem}>Personal Blogs</NavLink>
                <NavLink to="/FavouriteBlogs" style={styles.listItem}>Favourite Blogs</NavLink>
            </nav>
        </div>
    );
};

const styles = {
    sidebar: {
        width: '250px',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '10px',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
    },
    title: {
        marginBottom: '20px',
        color:'grey', 
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        margin: '30px 0 0 10px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
    },
};

export default SidebarNav;