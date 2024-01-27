import { useState } from "react";

const FormAddMoney = () => {

const [input, setInput] = useState();

    return(
        <div className="form-add-money">
            <form action="">
                <p>Agregar presupuesto</p>
                <input type="number" placeholder="$300" onChange={e => setInput(e.target.value)}/>
                <input type="submit" value="Agregar"/>
            </form>
        </div>
    );
}
export{FormAddMoney};