import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Body = (props) => {
    return (
        <div class="tablas" style={{ display: "flex", flexDirection: "" }}>
            <div className="tablita1">
                <h4 >Materias</h4>
                <Table striped bordered hover  >
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Materia</th>
                            <th>Hora</th>
                            <th>Grupo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.materia.map((a, index) =>
                                <tr key={index}>
                                    <td>{a.clave}</td>
                                    <td>{a.materia}</td>
                                    <td>{a.hora}</td>
                                    <td>{a.grupo}</td>
                                    <td><Button onClick={() => props.guardarCambios(a)} variant="success" disabled={props.verificar(a)}>+</Button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </Table>
            </div>
            <div className="tablita2">
                <h4>Horario</h4>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Materia</th>
                            <th>Hora</th>
                            <th>Grupo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((r, index) =>
                                <tr key={index} >
                                    <td>{r.clave}</td>
                                    <td>{r.materia}</td>
                                    <td>{r.hora}</td>
                                    <td>{r.grupo}</td>
                                    <td><Button onClick={() => props.eliminar(r)} variant="danger" >-</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>

    )
}
export default Body;