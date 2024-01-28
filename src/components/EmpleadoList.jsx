import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
    return (
        <div>
            {
                empleados.map((empleado, posicion) => <EmpleadoRow key={posicion} empleado={empleado}></EmpleadoRow>)
            }
        </div>
    );
};

export default EmpleadoList;