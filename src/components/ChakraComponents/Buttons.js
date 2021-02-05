import { Button } from "@chakra-ui/react"
import { IoMdPeople, IoIosLogIn, IoIosBook, IoIosConstruct } from "react-icons/io";

export const Buttons = ({ name, onClick }) => {
    const icon = name === "Book Mentor" ? <IoMdPeople /> : name === "My Bookings" ? <IoIosBook /> : name === "Request" ? <IoIosConstruct /> : <IoIosLogIn />;
    return (
        <Button color="black" maxW="sm" leftIcon={icon} onClick={onClick}>
            {name}
        </Button>

    );
}