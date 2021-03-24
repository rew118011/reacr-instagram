import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = ({ id }) => {
    const [result, setResult] = useState([]) 
    const key = "J8VpqV81zxQdR_9JL5knh3kMW0jo9N9OqiXz3kGxzYw" //aserkey ของอันสแปส
    const urlacc = "https://api.unsplash.com/search/users?page=1&query=" + id + "&client_id=" + key; //ตั้งตัวแปล รับไอดีที่พอบมา 

    useEffect(() => {  //ตัวเป็นตัวเเรก
        axios.get(urlacc)  //ตัวเชื่อม api จากบรรทัดที่ 6
            .then((response) => {
                setResult(response.data.results);   //เก็บค่าไว้ที่ result
                console.log(response.data.results)
            })
       }, [id]); //คือค่าที่รับเข้ามา ให้มันทำซ้ำถ้ามีการเปลี่ยนแปลงจากไอดี

    return (
        <div>
            <br />
            <div className="container" >
                {result.map((user) => (
                    <div>
                        <div class="card" >
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={user.profile_image.large} />
                                        </figure>
                                    </div>
                                    <div class="content" style={{ marginTop: "2%" }}>
                                        <label class="title ">{user.username}</label> &emsp;
                                        <span class="button is-small is-static is-rounded">message</span><p></p>
                                        <label class=""><b>{user.total_photos} Post</b></label> &emsp;
                                        <label class=""><b>12 m followers </b></label> &emsp;
                                        <label class=""><b> 30 following</b> </label><br />
                                        <label class=""><b> Portfolio  </b>{user.links.portfolio}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
            </div>
        </div>
    )
}
export default Profile
