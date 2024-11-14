"use client";

import { useEffect, useState } from "react";
import { AlunoFormProps } from "../types/types"

const AlunoForm = (props:AlunoFormProps) => {

    const [name, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    useEffect(() => {
        if (props.alunoSelecionado) {
            setNome(props.alunoSelecionado.name);
            setEmail(props.alunoSelecionado.email);
            setAge(props.alunoSelecionado.age);
        } else {
            setNome("");
            setEmail("");
            setAge(0);
        }
    }, [props.alunoSelecionado]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSave({ name, email, age });
        setNome("");
        setEmail("");
        setAge(0);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
            <input
                type="text"
                placeholder="Nome"
                className="border p-2 mb-2 w-80"
                value={name}
                onChange={(e) => setNome(e.target.value)} />
            <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-80"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input
                type="number"
                placeholder="Idade"
                className="border p-2 mb-2 w-80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))} />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded
hover:bg-blue-700">
                Salvar
            </button>
        </form>
    );
}

export default AlunoForm;