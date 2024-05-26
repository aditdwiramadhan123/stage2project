interface cardProps {
    name: string,
    image:string,
    quote:string
}

function Card(props : cardProps) {
    return (
        <div>
            <p>{props.image}</p>
            <p>{props.name}</p>
            <p>{props.quote}</p>
        </div>
    )
}

export default Card