const ResultadoFinal = ({ resultado }) => {
    return (
        <div className="resultado">
            <p>Resultado: {resultado.toFixed(4)}</p>
        </div>
    )
};

export default ResultadoFinal;