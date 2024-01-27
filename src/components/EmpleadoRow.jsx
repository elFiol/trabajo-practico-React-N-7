import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({ empleado }) => {
    return (
        <div>
            <EmpleadoAvatar></EmpleadoAvatar>
            <div>
                <h4>{empleado.fullName}</h4>
                <div className='d-flex'>
                    <p>{empleado.title}</p>
                    <p className='ms-2 btn btn-primary'>{empleado.department}</p>
                </div>
            </div>
        </div>
    );
};

export default EmpleadoRow;