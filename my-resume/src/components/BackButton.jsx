export default function BackButton(){
    return (
        <button class="p-2 mt-5 ms-5 border outline-2 outline-offset-2"
            onClick={() => {window.location.href = "/";}}
        >
            Back
        </button>
    )
}