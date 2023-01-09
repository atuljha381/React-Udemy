import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouritesContext from '../../Store/favourites-context'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/new'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/fav'>
                            My Favourites
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
