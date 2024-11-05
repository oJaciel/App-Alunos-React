"use client";

import axios from "axios";
import AlunoForm from "../components/AlunoForm";
import AlunoList from "../components/AlunoList";
import { useEffect } from "react";

export default function AlunosPage() {
    
    useEffect(() => {
        getAlunos()
    }, [])

    const getAlunos = async () => {
        const response = await axios.get("http://localhost:3000/api/students")
        console.log(response.data);
    }
    
    return (



        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-6">
                Gerenciamento de Alunos
            </h1>
            <AlunoForm />
            <AlunoList />
        </div>
    )
}