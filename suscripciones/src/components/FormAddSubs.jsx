import { useState, useEffect} from "react";

const FormAddSubs = ({type,price,setType,setPrice,subs,setSubs,editId,setEditId,spent,count}) => {

    const [error,setError] = useState(false);
    const [errorMoney,setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        if(price ==="" || Number(price)<0 || type ===""){
            setError(true);
            return;
        }

        if((count-spent) < Number(price)){
            setErrorMoney(true);
            return;
        }

        setError(false);
        setErrorMoney(false);

        //edicion de item
        if(editId != ""){
            setEditId("");
            const newSubs = subs.map(item=>{
                if(item.id === editId){
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        }else{//guardado de item
            const data = {
                type : type,
                price: price,
                id: Date.now(),
            }
            setSubs([...subs,data]);
        }

        setType("");
        setPrice("");
    }

    return (
        <div className="add-suscriptions">
            <h3>Agregar suscripion</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={ e=> setType(e.target.value)} value={type}>
                    <option value="">-- Elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO MAX</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primevideo">Prime video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTV">Apple TV</option>
                </select>
                <p>Cantidad:</p>
                <input type="number" placeholder="$20" onChange={ e=> setPrice(e.target.value)} value={price}/>
                {editId != ""? <input type="submit" value="Guardar"/>:<input type="submit" value="Agregar"/>}
                
            </form>
            {error? <p className="error">Campos invalidos</p>:null}
            {errorMoney? <p className="error">No tienes presupuesto</p>:null}
        </div>
    );
}
export {FormAddSubs};