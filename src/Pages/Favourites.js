import React, { useContext } from 'react'
import FavouritesContext from '../Store/favourites-context'
import MeetupList from '../Components/meetups/MeetupList'

export default function Favourites() {
  const favouritesCtx = useContext(FavouritesContext)
  let content

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no Favourites at the moment. Please Add One</p>
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
}
