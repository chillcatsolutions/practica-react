import { Link, useParams, useSearchParams } from 'react-router-dom';


const Tasks = () => {

    const { param1, param2 } = useParams();
    const [searchParams, _setSearchParams] = useSearchParams({});

    console.log([...searchParams]);

    return (<div>
        <h4>Lista de tareas {param1} {param2}</h4>
        <ul>
            <li>Correr</li>
            <li>Comer</li>
            <li>Trabajar</li>
        </ul>
        <Link to='/'>Ir atras</Link>
    </div>);
};

export default Tasks;