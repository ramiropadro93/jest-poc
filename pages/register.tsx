import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Register() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm();

    const onSubmit = (data: any) => {
        if (!isValid) return;
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Registro</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
            >
                <input
                    {...register('nombre', { required: true })}
                    type="text"
                    placeholder="Nombre"
                    className="border p-2 rounded"
                />
                <input
                    {...register('apellido', { required: true })}
                    type="text"
                    placeholder="Apellido"
                    className="border p-2 rounded"
                />
                <input
                    {...register('usuario', { required: true })}
                    type="text"
                    placeholder="Usuario"
                    className="border p-2 rounded"
                />
                <input
                    {...register('password', { required: true })}
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                <input
                    {...register('edad', { required: true })}
                    type="number"
                    placeholder="Edad"
                    className="border p-2 rounded"
                />
                <input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                />
                <input
                    {...register('direccion', { required: true })}
                    type="text"
                    placeholder="Dirección"
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
}
