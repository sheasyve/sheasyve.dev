function MyButton() {
    const handleClick = () => {
        alert("Thanks for clicking this button.");
    };

    return (
        <button id="theButton" onClick={handleClick}>
            <span className="italic">Thanks.</span>
        </button>
    );
}

const container = document.getElementById('button-root');
const root = ReactDOM.createRoot(container);
root.render(<MyButton />);