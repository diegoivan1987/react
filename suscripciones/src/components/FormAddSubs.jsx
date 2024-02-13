import { useState } from "react";

const FormAddSubs = ({type,price,setType,setPrice,subs,setSubs}) => {

    const [error,setError] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        if(price ==="" || Number(price)<0 || type ===""){
            setError(true);
            return;
        }
        setError(false);

        const data = {
            type : type,
            price: price,
            id: Date.now(),
        }
    
        setSubs([...subs,data]);
        setType("");
        setPrice("");
        console.log(subs);
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
                <input type="submit" value="Agregar"/>
            </form>
            {error? <p className="error">Campos invalidos</p>:null}
        </div>
    );
}
export {FormAddSubs};