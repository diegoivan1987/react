import {moneyFormat} from "../helpers"

const SingleItem = ({price,type,id,eliminarItem,editarItem}) => {
    const urlImage = `/src/images/${type}.png`;

    const handleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm("Borrar suscripcion a ");
        if(answer){
            eliminarItem(id);
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        editarItem(id);
    }

    return (
       <div className="single-item">
        <img src={urlImage} alt="Services" />
        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href="" className="delete" onClick={handleDelete}>Borrar</a>
        <a href="" className="edit" onClick={handleEdit}>Editar</a>
       </div>
    );
}
export {SingleItem};