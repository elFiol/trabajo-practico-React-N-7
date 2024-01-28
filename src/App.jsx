import EmpleadoList from "./components/EmpleadoList";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageEmpleado from "./empleado.jpg"

function App() {
  const empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: imageEmpleado },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: imageEmpleado },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: imageEmpleado },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: imageEmpleado },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: imageEmpleado },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: imageEmpleado },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: imageEmpleado },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: imageEmpleado },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: imageEmpleado },
  ]
  return (
    <Container className="my-5">
      <EmpleadoList empleados={empleados}></EmpleadoList>
    </Container>
  )
}

export default App
