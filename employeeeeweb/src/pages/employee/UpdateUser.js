import './UpdateUser.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const UpdateUser = ()=>{
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""

    });
    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };
    useEffect(()=>{
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`https://localhost:8080/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching user:", error.message);
            }
        }
        fetchEmployee();
    },[id])

    return(
        <>
        <div className="center-form">
            <h1>Edit Employee</h1>
            <Form>
                <Form.Group controlId="fromBasicName">
                    <Form.Control
                    type = "text"
                    name = "name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />

                </Form.Group>
                <Form.Group controlId="fromBasicName">
                    <Form.Control
                    type = "email"
                    name = "email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />

                </Form.Group>
                <Form.Group controlId="fromBasicName">
                    <Form.Control
                    type = "text"
                    name = "phone"
                    placeholder="Enter phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    />

                </Form.Group>
                <Form.Group controlId="fromBasicName">
                    <Form.Control
                    type = "text"
                    name = "department"
                    placeholder="Enter department"
                    value={formData.department}
                    onChange={handleInputChange}
                    />

                </Form.Group>
               <Button variant="primary" type="submit" className="w-100">
                Edit Employee

               </Button>
            </Form>
        </div>
        </>
    )
}

export default UpdateUser;