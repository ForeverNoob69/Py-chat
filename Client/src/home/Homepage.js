import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export default function Homepage() {
  return (
    <div className="homepage">
        {/* navbar  */}
        <div className="navbar">
            <Link to={'/account'}><img className='logo' src="https://storage.googleapis.com/replit/images/1619463941047_28a6f517e4f681b81327fe4db77c99bd.png" alt="Pychat Logo" /></Link>
            <Link to={'/account'} className={'login-btn'}>Sign up</Link>
        </div>
        {/* first row  */}
        <div className="first_row">
            <img className='coverIMG' src="https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=NF_LNvKxNdQAX-nDQjL&_nc_ht=scontent.whatsapp.net&oh=01_AdT2rp0p6KpvPxxt7SjZ8A9Ia2uvshpsgO-QcoA1pkTVdg&oe=641D4B25" alt="" />
            <div className="cover_contents">
                <div className="content_texts">
                    <h1>Message</h1>
                    <h1> Privately</h1>
                    <p>Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                    <Link to={'/account'} className='login-btn'>Login</Link>

                </div>

                <div className="content_images">
                    <img src="https://scontent.whatsapp.net/v/t39.8562-34/329792464_534173148815054_3736500652022655929_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=ELiO6hG20kMAX8igwtY&_nc_ht=scontent.whatsapp.net&oh=01_AdTTzJMxI4REr5EVy9GJEyYIHsir8lEZhia09__wE8PlWg&oe=641E5303" width={'400rem'} alt="" />
                    <img src="https://scontent.whatsapp.net/v/t39.8562-34/318567080_617695970110803_5923371384204745052_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=q_qR2zdmCCkAX8H0_SW&_nc_ht=scontent.whatsapp.net&oh=01_AdTtwUc-a4HdAZ8XyaRVhDSlzFyTtn9UOiJfd0zGBYwhZw&oe=641D1F66" width={'400rem'} alt="" />
                    <img src="https://scontent.whatsapp.net/v/t39.8562-34/327063196_5800887573364035_3294745791563659576_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=acrrF5s9V0gAX-OqUtM&_nc_ht=scontent.whatsapp.net&oh=01_AdQPqQHXvSaMQaNlB372xjSLlelJYXKm6WCeAZE88Coryg&oe=641CB98E" width={'400rem'} alt="" />
                    <img src="https://scontent.whatsapp.net/v/t39.8562-34/327713084_566495871797259_1779906837439389762_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=5LGzI3ckc10AX9Dn6BR&_nc_oc=AQkthzkKx2AqLCbKohVQPldqTDRihXadBHVGF5ixy6jYOYb6VnX_OiLBx7rnd7bCAbM&_nc_ht=scontent.whatsapp.net&oh=01_AdTze_IwZEPYqQzzZ97x5WYjZtteiGcsw8dke-jVt0KCcg&oe=641D289B" width={'400rem'} alt="" />
                </div>
            </div>
        </div>

        {/* 2nd row  */}
        <div className="second_row">
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=cEYO1Uv_ZHEAX9jb2Y6&_nc_oc=AQmh84RP9NHczg4WPlOJ6nhZHGm2e27e1ne_b1WJAuxx6uMQ3VqbL511dseLQRyaTLU&_nc_ht=scontent.whatsapp.net&oh=01_AdR3mvc2Tm7YkQ19LOUoIdH34SxZetGYCbm-zHVR9p0XVQ&oe=641DF28C" width={'95%'} alt="" />
            <p>With private messaging and calling, you can be yourself, speak
                 freely and feel close to the most important people in
                  your life no matter where they are.</p>
                  <img src="https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=BlIwwnYEXz0AX_AntYn&_nc_ht=scontent.whatsapp.net&oh=01_AdRa7PN8bRyC0vMjx8jjHfAyjC0-s_SO9O_r1ndowhDTNQ&oe=641CB70D" width={'95%'} alt="" />
        </div>

    </div>
    )
}
