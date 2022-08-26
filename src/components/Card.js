import React from 'react'

const Card = (props) => {

    return (
        <>
            <div className="card" id={props.cardid}>
                <div className="cardimg"><img src={props.cardimg} alt="" /></div>
                <div className="carddetail">
                    <p className="cardname">{props.cardname}</p>
                    <div className="cardmid">
                        <p className="cardprice">${props.cardprice}</p>
                        <button className={props.btnclass} onClick={() => props.btnfunction(props.cardid)}>{props.btntext}</button>
                    </div>
                    <p className="carddesc">{props.carddesc}</p>
                </div>
            </div>
        </>
    )
}

export default Card;