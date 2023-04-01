
import React, { useEffect, useState,TableCell } from 'react'

const View = () => {
    return 
    var[update,setUpdate] = useState(false)
    var[Selectd,setSelectd] =useState([])
    var[product,setproduct]= useState([])
    useEffect(()=>{
        axios.get(" http://localhost:3005/student")
        .then(response=>{
            setproduct(product=response.data)
            console.log(product)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/student/"+id)
        .then(response=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelectd(value)
        setUpdate(true)

    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
                <Tablecell>Price</Tablecell>
            </TableRow>
        </TableHead>
        <TableBody>
            {product.map((value,index)=>{
                return <TableRow key={index}>
                    <TableCell>{value.Name}</TableCell>
                    <TableCell>{value.Brand}</TableCell>
                    <TableCell>{value.Quantity}</TableCell>
                    <Tablecell>{value.Price}</Tablecell>
                    <TableCell>
                        <Button></Button>
                        <Button onClick={()=>deleteValue(value.Name)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updateValue(value)}>Upadte</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

if(update)
finalJSX=<Add data={Selectd} method ="put"/>
  return (
    finalJSX
  )
  return (
    <div>
      
    </div>
  )
}

export default View
