import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Tasks from '../routes/Tasks';

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<App />}/>
        <Route path='tasks' element={<Tasks />}>
            <Route index element={<div>No existen tareas</div>}/>
            <Route path='task' element={<div>tarea</div>}/>
        </Route>
        </Routes>
    </BrowserRouter>
);

export default MainRouter;