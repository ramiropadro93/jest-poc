import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from '@/pages/game';

describe('Game component', () => {
    it('Renderiza el titulo y la imagen correctamente', () => {
        render(<Game />);

        expect(
            screen.getByText('Felicidades, estás logueado')
        ).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
