import React, { createContext, useState } from 'react'

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { }
})

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([])

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevFavourite) => {
            return (prevFavourite.concat(favouriteMeetup))
        })
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites((prevFavourite) => {
            return prevFavourite.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext
