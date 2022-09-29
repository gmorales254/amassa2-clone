import React from 'react'
import "./Hero.css"

const Hero = () => {
return (
    <div>

        <div className="container-fluid ola">
            <div className="container__ola">
                <div className="content__ola">
                    <h1 className="titleHero tracking-in-expand">¡Bienvenido a Amassa2.pe!</h1>
                    <p className="subTitleHero tracking-in-expand">♥ Productos hechos con amor ♥</p>
                </div>
                <div className="waves">
                    <div className="wave circulo a"></div>
                    <div className="wave circulo b"></div>
                    <div className="wave circulo c"></div>
                </div>
            </div>
        </div> 

    </div>
)
}

export default Hero