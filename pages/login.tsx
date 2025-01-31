import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
		if (data.usuario !== 'admin' || data.password !== 'admin') {
			alert('Usuario o contraseña incorrectos');
			return;
		}

        router.push('/game');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
            >
                <input
                    {...register('usuario')}
                    type="text"
                    placeholder="Usuario"
                    className="border p-2 rounded"
                />
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
}
