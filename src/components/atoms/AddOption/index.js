import React, { useContext, useState } from "react";
import MainContext from "../../../contexts/Main";
import Button from "../Button";
import TextInput from "../TextInput";

export default function AddOption() {
    const { addOption } = useContext(MainContext);

    const [toAdd, setToAdd] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        if (isInvalid) {
            setIsInvalid(false);
        }
        const { value } = e.target;
        setToAdd(value);
    };

    const add = (e) => {
        e.preventDefault();
        if (!toAdd.length) {
            setIsInvalid(true);
        } else {
            addOption(toAdd);
        }
        setToAdd("");
    };

    return (
        <>
            <form onSubmit={(e) => add(e)} className="mb-5 flex items-center">
                <TextInput
                    name="option"
                    value={toAdd}
                    onChange={(e) => handleChange(e)}
                    isInvalid={isInvalid}
                />
                <Button
                    className="mx-5 h-12 w-32 text-2xl text-white"
                    colour="blue"
                >
                    Add
                </Button>
            </form>
        </>
    );
}
