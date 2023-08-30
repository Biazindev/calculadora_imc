const Calcular = ({ peso1, altura1, setResultado }) => {
    const calcularIMC = () => {
        if (altura1 > 0) {
            const imc = peso1 / (altura1 * altura1);
            setResultado(imc);
        }
    }
    return (
        <div className="calcular">
            <button onClick={calcularIMC}>Calcular</button>
        </div>
    );
};

export default Calcular;