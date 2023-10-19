import React, { useState} from 'react';
import { useUserContext } from "../context/UserContext.jsx";
import CardPizza from "../components/CardPizza.jsx";
import Header from "../components/Header.jsx";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function Products() {
    const { pizzas, error } = useUserContext();
    if (error) {
        return (
            <div className="container p-5 mt-5">
                <div>
                    <h3 className="text-center error-message">{error}</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="products-container">
            <Header />
            <div className="carousel-section">
                <Carousel showArrows={true}>
                    <div>
                        <img
                            className="carousel-image"
                            src="https://tofuu.getjusto.com/orioneat-prod-resized/6cSs62SvRGGKFWcRL-1200-1200.webp"
                            alt="Imagen 1"
                        />
                        <p className="legend">
                            PROMO
                            PIZZA +
                            BEBIDA
                        </p>
                    </div>
                    <div>
                        <img
                            className="carousel-image"
                            src="https://tofuu.getjusto.com/orioneat-prod-resized/rmffjntbBf6Stmx8o-1200-1200.webp"
                            alt="Imagen 2"
                        />
                        <p className="legend">
                            PROMO
                            4 PIZZA FAMILIARES
                        </p>
                    </div>
                    <div>
                        <img
                            className="carousel-image"
                            src="https://tofuu.getjusto.com/orioneat-prod-resized/uDbjx2NoXMWoho38K-1200-1200.webp"
                            alt="Imagen 3"
                        />
                        <p className="legend">
                            PROMO 
                            2 PIZAS, BEBIDAS, PALOS DE AJO
                        </p>
                    </div>
                </Carousel>
            </div>
            <div className="container p-5 mt-5">
                <div className="row">
                    {pizzas.map((item) => (
                        <CardPizza pizza={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}