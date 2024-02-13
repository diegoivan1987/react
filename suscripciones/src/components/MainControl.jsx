import { useState } from 'react';
import { Balance } from './Balance'
import { FormAddSubs } from './FormAddSubs';
import { DisplayItems } from './DisplayItems';

const MainControl = ({count})  => {
const [type,setType] = useState("");
const [price,setPrice] = useState("");
const [subs,setSubs] = useState([]);
const [editId,setEditId] = useState("");
const [spent,setSpent] = useState(0);

const eliminarItem = id =>{
    let newSubs = [...subs];
    let index = newSubs.findIndex(item => item.id === id);
    if (index !== -1) {
        newSubs.splice(index, 1);
    }
    setSubs(newSubs);
}

const editarItem = id =>{
    setEditId(id);
    subs.map(item => {
        if(item.id === id){
            setType(item.type);
            setPrice(item.price); 
        }
    })
}

    return (
        <>
            <div className="main-form">
                <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
                <FormAddSubs 
                type={type} 
                setType = {setType} 
                price={price} 
                setPrice={setPrice}
                subs={subs}
                setSubs={setSubs}
                editId={editId}
                setEditId={setEditId}
                spent={spent}
                count={count}/>
            </div>
            <DisplayItems subs={subs} eliminarItem={eliminarItem} editarItem={editarItem}/>
        </>
    )
}

export {MainControl};