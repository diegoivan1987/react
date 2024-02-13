import { SingleItem } from "./SingleItem";

const DisplayItems = ({subs,eliminarItem}) => {
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item =>(
                    <SingleItem key={item.id} id={item.id} price={item.price} type={item.type} eliminarItem={eliminarItem}/>
                ))
            }
        </>
    );
}
export {DisplayItems};