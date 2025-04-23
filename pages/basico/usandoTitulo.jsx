import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        primario="Pagina de cadastro"
        secundario="Incluir, alterar e excluir cadastro"
      />
      <Titulo
        primario="Pagina de login"
        secundario="Informe o seu email e senha"
        pequeno
      />
    </div>
  );
}
