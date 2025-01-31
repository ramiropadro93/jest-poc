import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/login';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const mockRouter = {
	push: jest.fn(),
  };
  
  jest.mock('next/navigation', () => ({
	useRouter: () => mockRouter
  }));
  
describe('Login component', () => {
    beforeEach(() => {
        mockRouter.push.mockClear();
    });

    it('Renderiza el formulario de login correctamente', () => {
        render(<Login />);

        expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });

    it('Navega a /game cuando las credenciales son correctas', async () => {
        render(<Login />);

        await userEvent.type(screen.getByPlaceholderText('Usuario'), 'admin');
        await userEvent.type(screen.getByPlaceholderText('Password'), 'admin');

        const submitButton = screen.getByText('Ingresar');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockRouter.push).toHaveBeenCalledWith('/game');
        });
    });

    it('Permite ingresar datos en los campos', async () => {
        render(<Login />);

        const usuarioInput = screen.getByPlaceholderText('Usuario');
        const passwordInput = screen.getByPlaceholderText('Password');

        await userEvent.type(usuarioInput, 'test');
        await userEvent.type(passwordInput, 'password');

        expect(usuarioInput).toHaveValue('test');
        expect(passwordInput).toHaveValue('password');
    });
});
