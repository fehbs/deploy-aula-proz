import './MyButton.css'

export default function MyButton() {
    function handleReact() {
        alert('Hello World!')
    }
    return (
        <>
            <button onClick={handleReact}>Contatct</button>

        </>
    );
}
