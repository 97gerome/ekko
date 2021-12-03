
interface ChatBubbleProps {
    text: string;
    subClass: string;
}

const ChatBubble = (props: ChatBubbleProps) => {

    const { text, subClass } = props;

    return (
        <div className={`chat-bubble.${subClass}`}>
            {text}
        </div>
    )
}

export default ChatBubble;
