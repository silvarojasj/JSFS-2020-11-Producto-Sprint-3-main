import { render, screen, fireEvent } from '@testing-library/react';
import {LoginPage} from './components/LoginPage';

test('al dar click en el boton Login cambiar de componente', ()=> {
    const Login = jest.fn(); 
    const {container} = render(<Login onChangeComponent={Login} />);

    fireEvent.click(container.firstChild);

    expect(Login).toHaveBeenCalled();
})