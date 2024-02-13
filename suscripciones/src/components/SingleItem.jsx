import {moneyFormat} from "../helpers"

const SingleItem = ({price,type,id,eliminarItem}) => {
    const urlImage = `/src/images/${type}.png`;

    const handleDelete = () => {
        eliminarItem(id);
    }

    return (
       <div className="single-item">
        <img src={urlImage} alt="Services" />
        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href="" className="delete" onClick={handleDelete}>Borrar</a>
        <a href="" className="edit">Editar</a>
       </div>
    );
}
export {SingleItem};