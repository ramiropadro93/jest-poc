import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Home from '../pages/index';
import '@testing-library/jest-dom';

// Definir el tipo para el mock
const mockRouter = {
  push: jest.fn(),
};

// Mock usando jest.mock con el tipo correcto
jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter
}));

describe('Home Component', () => {
  beforeEach(() => {
    // Limpiar el mock antes de cada test
    mockRouter.push.mockClear();
  });

  it('renderiza correctamente el componente', () => {
    render(<Home />);
    
    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    expect(screen.getByText('Registrar')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('navega a /register cuando se hace clic en el botón Registrar', () => {
    render(<Home />);
    
    const registerButton = screen.getByText('Registrar');
    fireEvent.click(registerButton);
    
    expect(mockRouter.push).toHaveBeenCalledWith('/register');
  });

  it('navega a /login cuando se hace clic en el botón Login', () => {
    render(<Home />);
    
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });
});