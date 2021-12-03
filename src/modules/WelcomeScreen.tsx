import Button from "../components/Button";
import Logo from "../components/Logo";

const WelcomeScreen = () => {
    return (
        <div id="welcome_screen">
            <Logo />
            <Button label="Send an echo" onClick={() => console.log("Clicked")} />
        </div>
    )
}

export default WelcomeScreen;
