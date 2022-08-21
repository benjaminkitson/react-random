import React from "react";
import Header from "../components/Header";
import Generate from "../components/atoms/Generate";
import Options from "../components/molecules/Options";
import AddOption from "../components/atoms/AddOption";
import { useState, useEffect } from "react";
import RandomContext from "../contexts/random";

export default function Main() {
    const [selected, setSelected] = useState("");
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("options"));
        console.log(stored);
        if (stored) setOptions(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("options", JSON.stringify(options));
    });

    const resetOptions = () => {
        setOptions([]);
    };

    const addOption = (option) => {
        if (option && !options.includes(option)) {
            setOptions(options.concat(option));
            setSelected("Add some more stuff!");
        } else if (options.includes(option)) {
            setSelected("No duplicates please!");
        }
    };

    const deleteOption = (option) => {
        setOptions(options.filter((item) => item !== option));
    };

    // const clearGenerated = () => {
    //   setSelected('Nothing yet.');
    // };

    const generate = () => {
        const num = Math.floor(Math.random() * options.length);
        setSelected(options[num]);
    };

    const utils = {
        deleteOption,
    };

    return (
        <RandomContext.Provider value={utils}>
            <div className="container flex h-screen max-h-screen flex-col justify-between">
                <Header />
                <Options options={options} resetOptions={resetOptions} />
                <div className="flex h-72 w-full flex-col items-center justify-center bg-blue-600 p-5">
                    <AddOption options={options} addOption={addOption} />
                    <h1 className="selection">{selected}</h1>
                    <Generate
                        hasOptions={options.length > 0}
                        generate={generate}
                    />
                </div>
            </div>
        </RandomContext.Provider>
    );
}
