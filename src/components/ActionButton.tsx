type ActionButtonProps = {
    icon: any,
    onTap: () => void,
}

export default function ActionButton(props: ActionButtonProps) {
    return (
        <div>
            <button onClick={props.onTap}>
                <>{props.icon}</>
            </button>
        </div>
    )
}