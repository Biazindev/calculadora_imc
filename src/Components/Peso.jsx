const Peso = ({ peso1, setPeso }) => {
    return (
        <div className="peso">
                <input placeholder="Peso" type="text" value={peso1} onChange={(e) => setPeso(e.target.value)} />
        </div>
    )
};


export default Peso;
