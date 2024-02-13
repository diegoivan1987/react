import { useState } from 'react';
import { Balance } from './Balance'
import { FormAddSubs } from './FormAddSubs';
import { DisplayItems } from './DisplayItems';

const MainControl = ({count})  => {
const [type,setType] = useState("");
const [price,setPrice] = useState("");
const [subs,setSubs] = useState([]);

const eliminarItem = id =>{
    let newSubs = [...subs];
    let index = newSubs.findIndex(item => item.id === id);
    if (index !== -1) {
        newSubs.splice(index, 1);
      }
      setSubs(newSubs);
    }

    return (
        <>
            <div className="main-form">
                <Balance count={count}/>
                <FormAddSubs 
                type={type} 
                setType = {setType} 
                price={price} 
                setPrice={setPrice}
                subs={subs}
                setSubs={setSubs}/>
            </div>
            <DisplayItems subs={subs} eliminarItem={eliminarItem}/>
        </>
    )
}

export {MainControl};