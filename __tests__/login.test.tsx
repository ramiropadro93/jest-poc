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
  
describe('Login Component', () => {
    beforeEach(() => {
        mockRouter.push.mockClear();
    });

    it('renderiza el formulario de login correctamente', () => {
        render(<Login />);

        expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });

    it('navega a /game cuando las credenciales son correctas', async () => {
        render(<Login />);

        // Ingresar credenciales correctas
        await userEvent.type(screen.getByPlaceholderText('Usuario'), 'admin');
        await userEvent.type(screen.getByPlaceholderText('Password'), 'admin');

        // Enviar el formulario
        const submitButton = screen.getByText('Ingresar');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockRouter.push).toHaveBeenCalledWith('/game');
        });
    });

    it('permite ingresar datos en los campos', async () => {
        render(<Login />);

        const usuarioInput = screen.getByPlaceholderText('Usuario');
        const passwordInput = screen.getByPlaceholderText('Password');

        // Verificar que se pueden ingresar datos
        await userEvent.type(usuarioInput, 'test');
        await userEvent.type(passwordInput, 'password');

        expect(usuarioInput).toHaveValue('test');
        expect(passwordInput).toHaveValue('password');
    });
});
