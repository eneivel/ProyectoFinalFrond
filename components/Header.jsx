import React from 'react';

const Header = () => {
    return (
        <header className="nuevo-header">
            <div className="nuevo-header-content nuevo-container">
                <div className="nuevo-header-txt">
                    <h1>Bienvenidos a La Trattoria del Chef</h1>
                    <p>
                        • La Trattoria del Chef es un restaurante especializado en la venta de pizzas excepcionales.
                    </p>
                    <p>
                        • Situado en un encantador rincón de la ciudad, este establecimiento se ha ganado una excelente
                        reputación por ofrecer algunas de las pizzas más deliciosas y auténticas que se pueden encontrar.
                    </p>
                </div>
                <div className="nuevo-header-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6YjYRI8OIti5L1yBid2NfeA1HKyq81zDGQ&usqp=CAU" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;