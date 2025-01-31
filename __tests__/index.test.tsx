import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Home from '../pages/index';
import '@testing-library/jest-dom';

const mockRouter = {
  push: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter
}));

describe('Home component', () => {
  beforeEach(() => {
    mockRouter.push.mockClear();
  });

  it('renderiza correctamente el componente', () => {
    render(<Home />);
    
    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    expect(screen.getByText('Registrar')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('Navega a /register cuando se hace clic en el botón Registrar', () => {
    render(<Home />);
    
    const registerButton = screen.getByText('Registrar');
    fireEvent.click(registerButton);
    
    expect(mockRouter.push).toHaveBeenCalledWith('/register');
  });

  it('Navega a /login cuando se hace clic en el botón Login', () => {
    render(<Home />);
    
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });
});