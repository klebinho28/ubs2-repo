export class Paciente {

  public codigo:number = 0;

    public nomeCompleto: string = "";
    public nomeSocial: string = "";
    public nomeMae?:string = "";
    public nomePai?:string = "";

    public dataNascimento: Date = new Date();
    public sexo: 'Masculino' | 'Feminino' | 'Outro' = 'Masculino'; // Sexo

    public nacionalidade:string="";
    public municipioNascimento:string = "";

    public racaCor?: 'Branca' | 'Preta' | 'Parda' | 'Amarela' | 'Indígena' = 'Branca'; // Raça/Cor
    public frequentaEscola?: 'Sim' | 'Não'; // Frequenta escola (opcional)

    public contatoCelular: string = "";
    public contatoResidencial:string = "";
    public contatoEmail:string = "";

    constructor(init?:Partial<Paciente>){
      Object.assign(this, init);
    }
  }

  const pacienteExemplo = new Paciente({

    codigo:1,
    nomeCompleto:'Carlos Silva',
    dataNascimento: new Date('2005-11-01'),
    sexo:'Masculino',
    nacionalidade:'Brasileiro',
    municipioNascimento:'São Paulo',
    racaCor:'Branca',
    contatoCelular:'11987654321',
    contatoEmail: 'carlos.silva@example.com',

  })


