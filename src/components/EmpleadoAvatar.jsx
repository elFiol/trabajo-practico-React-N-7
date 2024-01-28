import "./Empleado.css"
const EmpleadoAvatar = ({img}) => {
    return (
        <img src={img} alt="foto perfil" className='empleado rounded-circle'/>
    );
};

export default EmpleadoAvatar;