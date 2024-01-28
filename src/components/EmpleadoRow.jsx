import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({ empleado }) => {
    return (
        <div className='d-flex align-items-center my-3'>
            <EmpleadoAvatar img={empleado.pic}></EmpleadoAvatar>
            <div>
                <h4>{empleado.fullName}</h4>
                <div className='d-flex'>
                    <p className='fs-3'>{empleado.title}</p>
                    <p className='ms-2 btn btn-primary fs-6'>{empleado.department}</p>
                </div>
            </div>
        </div>
    );
};

export default EmpleadoRow;