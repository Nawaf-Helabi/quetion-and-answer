import { Accordion, Row } from "react-bootstrap"
import { quetion } from "./data"
const QAlist = ({data,deleteOneItem}) => {
  const dataLocal=JSON.parse(localStorage.getItem('items'))
 const oneDeleteItem= (ID) => {
    if (localStorage.getItem('items') !=null) {
      const index=quetion.findIndex((item)=>item.id===ID)
      quetion.splice(index,1)
      deleteOneItem(quetion)
    }
  }
  
  return (
   <Row>
     <Accordion>
        {localStorage.getItem('items') !=null?( dataLocal.map((item,index)=>{ return(
            <Accordion.Item key={index} eventKey={item.id}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body>
            {item.a}
            <button onClick={()=>oneDeleteItem(item.id)} className="btn-style mx-2">مسح السوال</button>
            </Accordion.Body>
            </Accordion.Item>)
        })) :<h2>لا توجد اسئلة الان</h2>}
    
   
      
    </Accordion>
   </Row>)
}

export default QAlist
