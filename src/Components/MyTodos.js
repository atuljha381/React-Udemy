import React, { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

export default function MyTodos(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function deleteHandler() {
        setModalIsOpen(true)
    }

    function closeModalHandler() {
        setModalIsOpen(false)
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>DELETE</button>
            </div>
            {/* Both the lines are same: first is the shorter way of second one  */}
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
        </div>
    )
}
