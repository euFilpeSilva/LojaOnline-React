type ActionButtonProps = {
    icon: any,
onTap: () => void, 
}

export default function ActionButton(props: ActionButtonProps) {
    return (
        <div>
            {/*atraves da prop onTap o oncklic recebe sua função*/}
            <button onClick={props.onTap}>
                <>{props.icon}</>
            </button>
        </div>
    )
}