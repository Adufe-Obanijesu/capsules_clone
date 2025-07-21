interface Props {
    id: string,
    name: string,
}

export default function DateInput({id, name}: Props) {
    return (
        <>
            <label htmlFor={id} className="sr-only">{name}</label>
            <input id={id} type="date"
                   className="border-b border-lightBrown pb-2 placeholder:text-lightBrown text-lightBrown"
            />
        </>
    )
}