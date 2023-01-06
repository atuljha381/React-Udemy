import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/new'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/fav'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
