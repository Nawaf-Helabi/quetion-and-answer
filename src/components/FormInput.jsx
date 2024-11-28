import { Button, Col } from "react-bootstrap"
import { Form, Row } from "react-bootstrap"

import {quetion} from './data'
import { useState } from "react"
const FormInput = ({addItem,notify}) => {
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')
   const addNewItem= () => {
    if (qu==='' ||an==='') {
        notify('من فضلك اكمل البيانات','Error')
        return
    }
    quetion.push({id:Math.random(),q:qu,a:an})
    setQu('')
    setAn('')
    addItem()
    }
    
    return ( 
        <Row className="my-3">
           <Col sm='5'>
           <Form.Control value={qu} onChange={(e)=>setQu(e.target.value)} type = "text"placeholder = "ادخل السوال" / >
           </Col>

           <Col sm='5'>
           <Form.Control value={an} onChange={(e)=>setAn(e.target.value)} type = "text" placeholder = "ادخل الاجابة" / >
           </Col>

           <Col sm='2'>
           <button onClick={addNewItem} className="btn-style w-100" type='submit'>أضافة</button>
           </Col>


   </Row> 
    )
}

export default FormInput