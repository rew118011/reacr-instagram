import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Showimg = ({ id }) => {
    const [img, setImg] = useState([])
    const key = "J8VpqV81zxQdR_9JL5knh3kMW0jo9N9OqiXz3kGxzYw"
    const urlimg = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&client_id=" + key; //api

    console.log(id)  //เอาไอดีออกมาดู
    console.log(urlimg) //เอารูปออกมาดูว่ามากี่รูป
    useEffect(() => {
        axios.get(urlimg) //ตัวเชื่อม api จากบรรทัดที่ 6
            .then((response) => {
                setImg(response.data); //เก็บค่าไว้ที่ img
                console.log(response.data) //เอาค่าออกมาดู
            })
    }, [id]);  //คือค่าที่รับเข้ามา ให้มันทำซ้ำถ้ามีการเปลี่ยนแปลงจากไอดี

    return (
        <>
            <div >
                <div class="row" >
                    <div className="imag">

                        {img.map((pic) => (     //วนลูปรูปออกมา โดยใช้ตัวแปล pic
                            <>
                                <center><img className="boximg" src={pic.urls.raw} /></center>
                            </>
                         ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Showimg
