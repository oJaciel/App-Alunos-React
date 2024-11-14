"use client";

import { AlunoListProps } from "../types/types";

const AlunoList = (props: AlunoListProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Idade</th>
                        <th className="px-4 py-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.alunos.map((aluno, index) => {
                        return <tr className="border-t" key={aluno.id || index}>
                            <td className="px-4 py-2">{aluno.name}</td>
                            <td className="px-4 py-2">{aluno.email}</td>
                            <td className="px-4 py-2">{aluno.age}</td>
                            <td className="px-4 py-2 text-center">
                                <div className="flex justify-center space-x-2">
                                    <button onClick={() => props.onEdit(aluno)} className="bg-yellow-500 text-white px-4 py-2 rounded
hover:bg-yellow-600">
                                        Editar
                                    </button>
                                    <button onClick={() => props.onDelete(aluno.id || '')} className="bg-red-500 text-white px-4 py-2 rounded
hover:bg-red-600">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default AlunoList;