


// Custom AuthButton with onClick and content props
export default function AuthButton ( {onClick, content} ) {

    return (
        <button onClick={onClick}>{content}</button>
    )
}
