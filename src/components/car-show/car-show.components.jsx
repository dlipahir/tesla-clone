import Model3 from '../../images/model-3.jpg';
import ModelY from '../../images/model-y.jpg';
import ModelS from '../../images/model-s.jpg';
import ModelX from '../../images/model-x.jpg';
import SolarPanel from '../../images/solar-panels.jpg';
import SolarRoof from '../../images/solar-roof.jpg';
import Accessories from '../../images/accessories.jpg'

import CarItem from '../car-item/car-item.components'
const carData = [
    {
        name: "MODEL 3",
        image: Model3,
        subHead: "Order Online for Touchless Delivery",
        buttons: ["CUSTOM ORDER", "EXISTING INVENTORY"]
    },
    {
        name: "MODEL Y",
        image: ModelY,
        subHead: "Order Online for Touchless Delivery",
        buttons: ["CUSTOM ORDER", "EXISTING INVENTORY"]
    },
    {
        name: "MODEL S",
        image: ModelS,
        subHead: "Order Online for Touchless Delivery",
        buttons: ["CUSTOM ORDER", "EXISTING INVENTORY"]
    },
    {
        name: "MODEL X",
        image: ModelX,
        subHead: "Order Online for Touchless Delivery",
        buttons: ["CUSTOM ORDER", "EXISTING INVENTORY"]
    },
    {
        name: "Solar Panels",
        image: SolarPanel,
        subHead: "Lowest Cost Solar Panels in Americay",
        buttons: ["ORDER NOW", "LEARN MORE"]
    },
    {
        name: "Solar Roof",
        image: SolarRoof,
        subHead: "Produce Clean Energy From Your Roof",
        buttons: ["ORDER NOW", "LEARN MORE"]
    },
    {
        name: "Accessories",
        image: Accessories,
        subHead: "",
        buttons: ["SHOP NOW"]
    },
]
const CarShow = () => {
    return (
        <>
            {
                carData.map((car) => {
                    console.log(car);
                    return <CarItem car={car} />
                })
            }
        </>
    )

}

export default CarShow;