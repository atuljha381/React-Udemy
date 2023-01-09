import React, { useState, useEffect } from 'react'
import MeetupList from '../Components/meetups/MeetupList'


export default function AllMeetups(props) {
    const [isLoaded, setIsLoaded] = useState(true)
    const [loadedMeetups, setLoadedMeetup] = useState([])

    useEffect(() => {
        setIsLoaded(true)
        fetch(
            "https://react-getting-started-510cd-default-rtdb.firebaseio.com/meetups.json"
        ).then((response) => {
            return response.json();
        }).then(
            (data) => {
                const meetups = []

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }

                setIsLoaded(false)
                setLoadedMeetup(meetups)
            }
        )
    }, [])



    if (isLoaded) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}
