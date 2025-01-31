import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../pages/register';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const mockRouter = {
  push: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter
}));


describe('Register component', () => {
  beforeEach(() => {
    mockRouter.push.mockClear();
  });

  it('Renderiza el formulario correctamente', () => {
    render(<Register />);
    
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Apellido')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Edad')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument();
    expect(screen.getByText('Registrar')).toBeInTheDocument();
  });

  it('Navega al home cuando el formulario se envía correctamente', async () => {
    render(<Register />);
    
    await userEvent.type(screen.getByPlaceholderText('Nombre'), 'John');
    await userEvent.type(screen.getByPlaceholderText('Apellido'), 'Doe');
    await userEvent.type(screen.getByPlaceholderText('Usuario'), 'johndoe');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password123');
    await userEvent.type(screen.getByPlaceholderText('Edad'), '25');
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await userEvent.type(screen.getByPlaceholderText('Dirección'), 'Calle 123');

    const submitButton = screen.getByText('Registrar');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith('/');
    });
  });

  it('Permite ingresar datos en todos los campos', async () => {
    render(<Register />);
    
    const nombreInput = screen.getByPlaceholderText('Nombre');
    await userEvent.type(nombreInput, 'John');
    expect(nombreInput).toHaveValue('John');

    const apellidoInput = screen.getByPlaceholderText('Apellido');
    await userEvent.type(apellidoInput, 'Doe');
    expect(apellidoInput).toHaveValue('Doe');

    const usuarioInput = screen.getByPlaceholderText('Usuario');
    await userEvent.type(usuarioInput, 'johndoe');
    expect(usuarioInput).toHaveValue('johndoe');

    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'password123');
    expect(passwordInput).toHaveValue('password123');

    const edadInput = screen.getByPlaceholderText('Edad');
    await userEvent.type(edadInput, '25');
    expect(edadInput).toHaveValue(25);

    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@example.com');
    expect(emailInput).toHaveValue('john@example.com');

    const direccionInput = screen.getByPlaceholderText('Dirección');
    await userEvent.type(direccionInput, 'Calle 123');
    expect(direccionInput).toHaveValue('Calle 123');
  });
});