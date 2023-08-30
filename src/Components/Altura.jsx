const Altura = ({ altura1, setAltura }) => {
    return (
        <div className="altura">
                <input placeholder="Altura" type="text" value={altura1} onChange={(e) => setAltura(e.target.value)} />
        </div>
    )
};

export default Altura;