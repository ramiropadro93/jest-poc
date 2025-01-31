export default function Game() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">
                Felicidades, estás logueado
            </h1>
            <img src="/images/success.png" alt="Felicidades" className="w-64 h-64" />
        </div>
    );
}
