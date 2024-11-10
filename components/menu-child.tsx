interface Props{
    title :string
}
export default function MenuChild(props:Props) {
    return <div className="px-4 hover:underline cursor-pointer">{props.title}</div>
};
