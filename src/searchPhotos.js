import React, { useState } from 'react'
import { Container } from '@material-ui/core';



const searchPhotos = () => {


    return (
        <>

            <div className="container">
                <div className="my">
                    <h1>Mystagram</h1>
                </div>
                <hr />

                <div class="control" style={{ width: "50%", marginLeft: "25%" }}>
                    <input
                        class="input is-rounded is-hovered"
                        type="text"
                        placeholder="Hovered input"
                    />
                </div>

                <br />
                <div class="card" style={{ width: "30%", marginLeft: "35%" }}>
                    <div class="card-content" >
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Name</p>
                            </div>
                        </div>
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <br />
                        <div class="content">
                        <label class="title is-6">like</label>
                            <div class="media-content">
                                <label class="title is-6">name</label>
                                <label>......................</label>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <br />

        </>
    )
}

export default searchPhotos



