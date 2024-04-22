const pacientes = ['Jose', 'Pedro', 'Maria', 'João', 'Ana', 'Barbara', 'Joana'];

const atendimento = (lista, tipoOperacao, nomePaciente) => {
    if (tipoOperacao === 'atender') {
        lista.shift();
    }
    if (tipoOperacao === 'agendar') {
        lista.push(nomePaciente);
    }

    console.log(lista.join(', '));
}

const agendarPaciente = (lista, nomePaciente) => {
    lista.push(nomePaciente);
    console.log(lista.join(', '));
} 

const atenderPaciente = (lista) => {
    lista.shift();
}

const cancelarAtendimento = (lista, nomePaciente) => {
    lista.splice(lista.indexOf(nomePaciente), 1);
    console.log(lista.join(', '))
}

atendimento(pacientes, 'atender');
atendimento(pacientes, 'agendar', 'Guido');

agendarPaciente(pacientes, 'Valerio');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'João');