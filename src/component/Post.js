import React from 'react'
import { FcLike } from "react-icons/fc";

const Showimage = ({id}) => {
    return (
        <>
            {id.map((datail) => (
                <>
                     <div class="card mb-3" style={{ width: "40%", marginLeft: "30%", marginRight: "30%" }}>
                        <div class="card-content" >
                            <div class="media">
                                <div class="media-left is-rounded " style={{ borderRadius: '-10px' }}>
                                    <figure class="image is-48x48 " >
                                        <img src={datail.user.profile_image.small} />
                                    </figure>
                                </div>
                                <div class="content">
                                <a href={"/account/" + datail.user.username} >
                                        <p class="title is-4">{datail.user.first_name}</p>
                                    </a>
                                </div>
                            </div>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={datail.urls.full} alt="Placeholder image" />
                                </figure>
                            </div>
                            <br />
                            <div class="content">
                                <FcLike />&nbsp;<label class="title is-6">{datail.user.total_likes} like </label>
                                <div class="media-content">
                                    <label class="title is-6">{datail.user.name}</label> &nbsp;
                                    <label>{datail.description} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            )}
        </>
    )
}

export default Showimage
