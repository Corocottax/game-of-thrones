import { generatePath,Link } from "react-router-dom"
import "./LinajesGallery.scss";

export default function LinajesGallery({list}){
    console.log(list)
    return <div className="Gallery">
        {list.map(item => <figure key={item._id}>
            <Link to={generatePath("/linajes/:name", { name: item.name })}>
            {item.logoURL ? (<img src={item.logoURL} alt={item.name}/>) :
              (<img src="/got-house.png" alt="imagen rota"/>) }
            </Link>
            <figcaption className="Nombrecito">
                {item.name}
            </figcaption>
        </figure>)}
    </div>
}