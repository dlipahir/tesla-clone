import './car-item.styles.scss'
const CarItem = ({ car }) => {
    console.log("hi");
    return (
        <div className="carItem" >
            <img src={car.image} alt="" />
            <div className="carHeading" >

                <div className="carName">{car.name}</div>
                <div className="info">{car.subHead}</div>
              <div className="buttons">
                {
                    car.buttons.map((button, index) => {
                        return <div className={`button-${index}`}>{button}</div>
                    })
                }
            </div>
            </div>
        </div >
    )
}

export default CarItem;