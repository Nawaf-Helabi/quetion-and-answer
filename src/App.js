import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAlist from "./components/QAlist";
import { quetion } from "./components/data";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [data, setData] = useState(quetion)
 const addItem= () => {
  localStorage.setItem('items',JSON.stringify([...quetion]))
    setData([...quetion])
    notify('تمت الاضافة بنجاح','Success')
  }
  const deleteAllItems=() => {
    localStorage.removeItem('items')
    quetion.splice(0,quetion.length)
    setData([])
    notify('تمت حذف الكل بنجاح','Success')

  }
  const deleteOneItem=(items) => {
    localStorage.setItem('items',JSON.stringify([...items]))
    setData([...items])
    notify('تمت حذف العنصر بنجاح ','Success')

    if (items<=0) {
      deleteAllItems()
    }
  }
  
  const notify = (message,type) =>{
    if (type==='Error') {
      toast.error(message)
      
    }else if(type==='Success'){
      toast.success(message)
    }
  } 

  
  return <div className="font text-center color-body">
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col sm='4'> <div className="fs-3 text-center py-2">أسئله واجوبة شائعة</div> </Col>
        <Col sm='8'> 
         <FormInput addItem={addItem} notify={notify}/>
         <QAlist data={data} deleteOneItem={deleteOneItem}/>
         {localStorage.getItem('items') != null?<button onClick={deleteAllItems} className="btn-style w-100 my-2">مسح الكل</button>:null}
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  </div>;
}

export default App;
