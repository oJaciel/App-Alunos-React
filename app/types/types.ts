export interface Aluno {
    id?: string;
    name: string;
    email: string;
    age: number;
}

export interface AlunoListProps {
    alunos: Aluno[];
    onDelete: (id: string) => void;
    onEdit: (aluno:Aluno) => void;
}

export interface AlunoFormProps {
    alunoSelecionado: Aluno | null;
    onSave: (aluno: Aluno) => void;
}