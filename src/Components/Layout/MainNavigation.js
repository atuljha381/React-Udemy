import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
    return (
        <header>
            <div>React Meetups</div>
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
