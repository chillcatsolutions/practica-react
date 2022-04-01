
import { screen } from '@testing-library/dom'

import Tasks from './Tasks';

const renderTasks = () => <Tasks />;

describe('GIVEN the tasks component', () => {

    describe('WHEN is rendered', () => {

        it('THEN is equal to a list of tasks', () => {
            // setup
            renderTasks();
            const { getByText } = screen;

            expect(getByText('Lista de tareas')).toBe('lista de tareas');

        });

    });

});


// Setup
    // configuración variables/constantes
    // Mockeo de data / compontes / librerias

// expects 


//Guerkin language

// GIVEN
// WHEN
// THEN









