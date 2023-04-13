import React, { useState, useEffect }from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters").required("This is required")

})

const Form = (props) => {
    const [form, setForm] = useState({ name: '', Size: '', Toppings: false, Special: '' });
    const [errors, setErrors] = useState({ name: '', Size: '', Toppings: false, Special: '' });

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { value, name, type } = event.target
        console.log(value, 'what we are looking at', name, event.target)
        setFormErrors(name, value )
        setForm({...form, [name]: value})
    }

    useEffect(() => {
        schema.isValid()
    }, [form])

    return (
        
        <form id="pizza-form">
           <div style={{ color: 'red'}}>
            <div>{errors.name}</div>
            </div>
            <h1>Build Your Own Pizza</h1>
            <label>Name
                <input 
                id="name-input"
                placeholder='Name'
                name='name'
                type='text'
                onChange={change}
                value={form.name}
                /> 
            </label>
            <label>Size
                <select id="size-dropdown">
                    <option value='1'>Small</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Large</option>
                </select>
            </label>
            <label>Toppings:
                Spinach<input type='checkbox' id='topping1' name='spinach'/>
                Mushrooms<input type='checkbox' id='topping2' name='mushroom'/>
                Pineapple<input type='checkbox' id='topping3' name='pineapple'/>
                Jalapeno<input type='checkbox' id='topping4' name='jalapeno'/>
            </label>
            <label>Special-Instructions
                <input 
                id="special-text"
                type='text'
                placeholder='Speacial Instructions'
                />   
            </label>

            <input type='submit' id="order-button" />

        
        </form>
    )
}

export default Form;

//NEED TO IMPORT USESTATE? AND CREATE 4 SLICES OF STATE? THEN ADD ONCHANGE={EVT => SET__(EVT.TARGET.VALUE)} INTO INPUT?

//FOR SUBMIT PIZZA-FORM DATA TO API? (LAST X)
//function onSubmit () => {
//    return (
//    <h3>
//            name: '',
//            size: '',
//            topping1: true,
//            topping2: true,
//            special: '',
//        </h3>
//    )
//}

// (2ND X) DOES NAVIGATE TO /PIZZA FROM /? RIGHT?

// yup.string().required().min(2, 'name must be at least 2 characters')