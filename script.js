'use strict';

let cTextLei = "Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000"

const DATA = {
  estados: [
    { uf: 'AL', nome: 'Alagoas' }, { uf: 'AM', nome: 'Amazonas' }, { uf: 'BA', nome: 'Bahia' }, { uf: 'CE', nome: 'Ceará' }, { uf: 'DF', nome: 'Distrito Federal' }, { uf: 'ES', nome: 'Espírito Santo' }, { uf: 'MA', nome: 'Maranhão' }, { uf: 'MG', nome: 'Minas Gerais' }, { uf: 'MS', nome: 'Mato Grosso do Sul' }, { uf: 'PA', nome: 'Pará' }, { uf: 'PB', nome: 'Paraíba' }, { uf: 'PE', nome: 'Pernambuco' }, { uf: 'PI', nome: 'Piauí' }, { uf: 'PR', nome: 'Paraná' }, { uf: 'RJ', nome: 'Rio de Janeiro' }, { uf: 'RN', nome: 'Rio Grande do Norte' }, { uf: 'RS', nome: 'Rio Grande do Sul' }, { uf: 'SE', nome: 'Sergipe' }, { uf: 'SP', nome: 'São Paulo' }
  ],
  prioridade: [
    { uf: 'AL', cidade: 'Maceió', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/al/maceio/Alagoas - Estadual.png'] },
    { uf: 'AM', cidade: 'Manaus', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/am/manaus/Manaus.png', './assets/img/estados/am/manaus/Manaus 2.png'] },
    // { uf: 'BA', cidade: 'Feira de Santana', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/ba/Feira de Santana/Municipal - Feira de Santana.png'] },
    { uf: 'BA', cidade: 'Salvador', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs:[]},
    { uf: 'CE', cidade: 'Fortaleza', texto: '', imgs: ['./assets/img/estados/ce/atendimento_prioritario_CE.jpg', './assets/img/estados/ce/Fortaleza/Fortaleza - Municipal.png'] },
    { uf: 'DF', cidade: 'Brasília', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/df/Brasília/Atendimento Preferencial Distrito Federal.png', './assets/img/estados/df/Brasília/Distrito Federal - Estadual.png'] },
    { uf: 'ES', cidade: 'Vila Velha', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/es/Espírito Santo - Estadual.png', './assets/img/estados/es/Vila Velha/Vila Velha - Municipal.png', './assets/img/estados/es/Vila Velha/vila-velha-municipal.png'] },
    { uf: 'ES', cidade: 'Vitória', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/es/Espírito Santo - Estadual.png', './assets/img/estados/es/Vitoria/Vitória - Municipal.png', './assets/img/estados/es/Vitoria/Vitória - Municipal 2.png'] },
    { uf: 'MA', cidade: 'São Luís', texto: cTextLei, imgs: ['./assets/img/estados/ma/Maranhão - Estadual.png', './assets/img/estados/ma/sao_luis/Atendimento prioritario.png', './assets/img/estados/ma/sao_luis/São Luís - Municipal.png'] },
    // { uf: 'MS', cidade: 'Campo Grande', texto: cTextLei, imgs: [ './assets/img/estados/ms/Campo Grande/atendimento_prioritario_MT.png'] },
    { uf: 'MG', cidade: 'Belo Horizonte', texto: cTextLei, imgs: [ './assets/img/estados/mg/bh-estadual.png', './assets/img/estados/mg/Belo Horizonte/atendimento_prioritario_MG.png'] },
    { uf: 'MG', cidade: 'Juiz de Fora', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'MG', cidade: 'Montes Claros', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'MG', cidade: 'Uberlândia', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    // { uf: 'MT', cidade: 'Cuiabá', texto: cTextLei, imgs: ['./assets/img/estados/mt/atendimento_prioritario_MT.png'] },
    { uf: 'PA', cidade: 'Belém', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/pa/Estadual-para.png', './assets/img/estados/pa/Belém - Municipal.png'] },
    { uf: 'PB', cidade: 'Campina Grande', texto: cTextLei, imgs: ['./assets/img/estados/pb/1. Atendimento Prioritário.jpg'] },
    { uf: 'PB', cidade: 'João Pessoa', texto: cTextLei, imgs: ['./assets/img/estados/pb/1. Atendimento Prioritário.jpg', './assets/img/estados/pb/João Pessoa/João Pessoa 1 - Estadual.png', './assets/img/estados/pb/João Pessoa/João Pessoa 2 - Estadual.png','./assets/img/estados/pb/João Pessoa/João Pessoa 3 - Municipal.png'] },
    { uf: 'PE', cidade: 'Recife', texto: cTextLei, imgs: ['./assets/img/estados/pe/1. Atendimento prioritário.webp','./assets/img/estados/pe/Recife/Recife - Municipal.png'] },
    { uf: 'PI', cidade: 'Teresina', texto: cTextLei, imgs: ['./assets/img/estados/pi/teresina.png','./assets/img/estados/pi/Municipal - Teresina.png','./assets/img/estados/pi/Municipal - Teresina 2.png','./assets/img/estados/pi/Municipal - Teresina 3.png'] },
    { uf: 'PR', cidade: 'Curitiba', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/pr/Curitiba/Curitiba.png'] },
    { uf: 'PR', cidade: 'Londrina', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/pr/Londrina/Londrina.png', './assets/img/estados/pr/Londrina/Londrina 2.png'] },
    { uf: 'RJ', cidade: 'Niterói', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'Nova Iguaçu', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'Rio de Janeiro', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'São João de Meriti', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RN', cidade: 'Natal', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/rn/estadual.png'] },
    { uf: 'RS', cidade: 'Porto Alegre', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SE', cidade: 'Aracaju', texto: '', imgs: ['./assets/img/estados/se/1. Atendimento prioritário.png','./assets/img/estados/se/Municipal - Aracajú.png','./assets/img/estados/se/Municipal - Aracaju 2.png','./assets/img/estados/se/Municipal - Aracaju 3.png','./assets/img/estados/se/Municipal - Aracaju 4.png'] },
    { uf: 'SP', cidade: 'Barueri', texto: '', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/Barueri/atendimento_prioritario_SP.png'] },
    { uf: 'SP', cidade: 'Campinas', texto: '', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/Campinas/atendimento_prioritario_SP.jpg'] },
    { uf: 'SP', cidade: 'Guarulhos', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/sp-estadual.png'] },
    { uf: 'SP', cidade: 'Jundiaí', texto: '', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/Jundiai/Atendimento prioritário Fibromialgia.jpg'] },
    { uf: 'SP', cidade: 'Mogi das Cruzes', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/Mogi/Mogi das Cruzes.png'] },
    { uf: 'SP', cidade: 'Ribeirão Preto', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/Ribeirão Preto/Ribeirão Preto.png'] },
    { uf: 'SP', cidade: 'Santo André', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/sp-estadual.png'] },
    // { uf: 'SP', cidade: 'Santos', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'São Bernardo do Campo', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'São Paulo', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/sp-estadual.png','./assets/img/estados/sp/São Paulo/LEI MUNICIPAL SP.png'] }
    // { uf: 'SP', cidade: 'Taubaté', texto: cTextLei, imgs: [] }
  ],
  procon: [
    { uf: 'AL', cidade: 'Maceió', nome: 'Procon Maceió', fone: 'Disque 151 / (82) 98883-7586', url: '', imgs: [] },
    { uf: 'AM', cidade: 'Manaus', nome: 'Procon Manaus', fone: '0800 092 1512 / (92) 3215-4009', url: 'https://www.procon.am.gov.br', imgs: [] },
    { uf: 'BA', cidade: 'Feira de Santana', nome: 'Procon Feira de Santana', fone: '(75) 3617-1969', url: 'http://www.feiradesantana.ba.gov.br/procon/index_home.asp', imgs: [] },
    { uf: 'BA', cidade: 'Salvador', nome: 'Procon Salvador', fone: '(71) 3116-8521', url: 'https://www.ba.gov.br/justica/84/postos-de-atendimento-procon-ba', imgs: [] },
    { uf: 'CE', cidade: 'Fortaleza', nome: 'Procon Fortaleza', fone: '(85) 3277-3800 / (85) 3277-3801', url: 'https://procon.al.ce.gov.br', imgs: [] },
    { uf: 'DF', cidade: 'Brasília', nome: 'Procon Brasília', fone: 'Disque 151', url: 'https://www.procon.df.gov.br/', imgs: [] },
    { uf: 'ES', cidade: 'Vila Velha', nome: 'Procon Vila Velha', fone: 'Disque 162 / (27) 3149-7358', url: 'https://procon.vilavelha.es.gov.br', imgs: ['./demais/Placas%20PROCON/Esp%C3%ADrito%20Santo/Vit%C3%B3ria/3.%20Placa%20com%20os%20dados%20do%20Procon.ES.png'] },
    { uf: 'ES', cidade: 'Vitória', nome: 'Procon Vitória', fone: '(27) 3382-5484 / (27) 3382-5545', url: 'https://procon.vitoria.es.gov.br', imgs: ['./demais/Placas%20PROCON/Esp%C3%ADrito%20Santo/Vit%C3%B3ria/3.%20Placa%20com%20os%20dados%20do%20Procon.ES.png'] },
    { uf: 'MA', cidade: 'São Luís', nome: 'Procon São Luís', fone: 'Disque 151 / (98) 3261-5100', url: 'https://www.procon.ma.gov.br', imgs: [] },
    { uf: 'MG', cidade: 'Belo Horizonte', nome: 'Procon Belo Horizonte', fone: '(31) 3277-1616', url: 'https://www.cmbh.mg.gov.br/servicos/procon', imgs: [] },
    { uf: 'MG', cidade: 'Juiz de Fora', nome: 'Procon Juiz de Fora', fone: '(32) 3690-7610 / 3690-7611', url: 'https://www.pjf.mg.gov.br/administracao_indireta/procon/atendimento.php', imgs: [] },
    { uf: 'MG', cidade: 'Montes Claros', nome: 'Procon Montes Claros', fone: '(38) 2211-3360', url: 'https://www.montesclaros.mg.gov.br/procon-abertura-direta-de-reclamacao', imgs: [] },
    { uf: 'MG', cidade: 'Uberlândia', nome: 'Procon Uberlândia', fone: 'Disque 151 / (34) 3291-1600', url: 'https://www.uberlandia.mg.gov.br/prefeitura/orgaos-municipais/procon', imgs: [] },
    { uf: 'MS', cidade: 'Campo Grande', nome: 'Procon Campo Grande', fone: 'Disque 151 / (67) 3316-9800', url: 'https://www.procon.ms.gov.br', imgs: [] },
    { uf: 'PA', cidade: 'Belém', nome: 'Procon Belém', fone: 'Disque 151 / (91) 3073-2827', url: 'https://www.procon.pa.gov.br/', imgs: [] },
    { uf: 'PB', cidade: 'Campina Grande', nome: 'Procon Campina Grande', fone: 'Disque 151 / (83) 98185-8168 / (83) 98186-3609', url: 'https://procon.campinagrande.pb.gov.br/', imgs: ['./demais/Placas%20PROCON/Para%C3%ADba/3.%20Contatos%20Procon.jpg'] },
    { uf: 'PB', cidade: 'João Pessoa', nome: 'Procon João Pessoa', fone: '(83) 98654-4965', url: 'https://procon.joaopessoa.pb.gov.br', imgs: ['./demais/Placas%20PROCON/Para%C3%ADba/3.%20Contatos%20Procon.jpg'] },
    { uf: 'PE', cidade: 'Recife', nome: 'Procon Recife', fone: '0800-282-1512 / (81) 3181-7000', url: 'https://www.procon.pe.gov.br', imgs: [] },
    { uf: 'PI', cidade: 'Teresina', nome: 'Procon Teresina', fone: '(86) 3216-3041', url: 'https://www.mppi.mp.br/internet/procon', imgs: [] },
    { uf: 'PR', cidade: 'Curitiba', nome: 'Procon Curitiba', fone: '0800 041 1512', url: 'https://www.procon.pr.gov.br', imgs: [] },
    { uf: 'PR', cidade: 'Londrina', nome: 'Procon Londrina', fone: 'Disque 151 / (43) 3372-4824', url: '', imgs: [] },
    { uf: 'RJ', cidade: 'Niterói', nome: 'Procon Niterói', fone: '(21) 3254-8593', url: 'https://procon.niteroi.rj.gov.br', imgs: ['./demais/Placas%20PROCON/Rio%20de%20Janeiro/Placa%20Procon.png', './demais/Placas%20PROCON/Rio%20de%20Janeiro/3.%20Contato%20Procon.jpg'] },
    { uf: 'RJ', cidade: 'Nova Iguaçu', nome: 'Procon Nova Iguaçu', fone: 'Disque 151 / (21) 98104-5445', url: 'https://www.rj.gov.br/procon/', imgs: ['./demais/Placas%20PROCON/Rio%20de%20Janeiro/Placa%20Procon.png', './demais/Placas%20PROCON/Rio%20de%20Janeiro/3.%20Contato%20Procon.jpg'] },
    { uf: 'RJ', cidade: 'Rio de Janeiro', nome: 'Procon Rio de Janeiro', fone: 'Disque 151 / (21) 2216-8686', url: 'https://www.rj.gov.br/procon', imgs: ['./demais/Placas%20PROCON/Rio%20de%20Janeiro/Placa%20Procon.png', './demais/Placas%20PROCON/Rio%20de%20Janeiro/3.%20Contato%20Procon.jpg'] },
    { uf: 'RJ', cidade: 'São João de Meriti', nome: 'Procon São João de Meriti', fone: 'Disque 151 / (21) 2216-8686', url: 'https://www.rj.gov.br/procon/', imgs: ['./demais/Placas%20PROCON/Rio%20de%20Janeiro/Placa%20Procon.png', './demais/Placas%20PROCON/Rio%20de%20Janeiro/3.%20Contato%20Procon.jpg'] },
    { uf: 'RN', cidade: 'Natal', nome: 'Procon Natal', fone: 'Disque 151', url: 'https://www.natal.rn.gov.br/procon', imgs: [] },
    { uf: 'RS', cidade: 'Porto Alegre', nome: 'Procon Porto Alegre', fone: '(51) 3289-1774', url: 'https://www.procon.rs.gov.br/inicial', imgs: [] },
    { uf: 'SE', cidade: 'Aracaju', nome: 'Procon Aracaju', fone: 'Disque 151 / (79) 3179-6040', url: 'https://procon.aracaju.se.gov.br/', imgs: ['./demais/Placas%20PROCON/Sergipe/Placa%20Telefone%20Procon.png'] },
    { uf: 'SP', cidade: 'Barueri', nome: 'Procon Barueri', fone: '(11) 4199-1324', url: 'https://portal.barueri.sp.gov.br/cidadao/procon-barueri', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Campinas', nome: 'Procon Campinas', fone: 'Disque 151 / (19) 3734-2000', url: 'https://procon.campinas.sp.gov.br', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Guarulhos', nome: 'Procon Guarulhos', fone: 'Disque 151 / (11) 2468-7560 / 2472-6995', url: 'https://www.guarulhos.sp.gov.br/categories/protecao-e-defesa-do-consumidor', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Jundiaí', nome: 'Procon Jundiaí', fone: 'E-mail: proconjundiai@jundiai.sp.gov.br', url: 'https://procon.jundiai.sp.gov.br/', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Mogi das Cruzes', nome: 'Procon Mogi das Cruzes', fone: 'Disque 151 / (11) 4798-5090', url: 'https://www.mogidascruzes.sp.gov.br/pagina/procon/servico/procon-transparencia-e-ouvidoria/procon-atendimento-ao-consumidor-presencial', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Praia Grande', nome: 'Procon Praia Grande', fone: '(13) 3473-6810', url: 'https://www.procon.sp.gov.br/', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Ribeirão Preto', nome: 'Procon Ribeirão Preto', fone: 'Disque 151 / 0800 772 9198', url: 'https://www.procon.sp.gov.br/ribeirao-preto', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Santo André', nome: 'Procon Santo André', fone: '(11) 3356-9200', url: 'https://www.procon.sp.gov.br/santo-andre', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Santos', nome: 'Procon Santos', fone: '(13) 3201-5601 / (13) 99101-5792', url: 'https://www.procon.sp.gov.br/santo-andre', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'São Bernardo do Campo', nome: 'Procon São Bernardo do Campo', fone: '0800 7708 156 / (11) 2630-7350', url: 'https://www.saobernardo.sp.gov.br/web/secretaria-de-justica-sej/procon', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'São Paulo', nome: 'Procon-SP (Sede Estadual)', fone: 'Disque 151 / (11) 3824-0446', url: 'https://www.procon.sp.gov.br', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] },
    { uf: 'SP', cidade: 'Taubaté', nome: 'Procon Taubaté', fone: '(12) 3624-6610 / 3624-2708', url: 'https://www.procon.sp.gov.br/taubate', imgs: ['./demais/Placas%20PROCON/São%20Paulo/3.%20Contato%20Procon.webp'] }
  ],
  privacidade: [
    { shopping: 'Shopping Center Norte', cidade: 'São Paulo', uf: 'SP', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury' },
    { shopping: 'Shopping Ibirapuera', cidade: 'São Paulo', uf: 'SP', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa' },
    { shopping: 'Barra Shopping', cidade: 'Rio de Janeiro', uf: 'RJ', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-fukui' }
  ],
  outros: [
    { title: 'Ambiente Sendo Filmado', desc: 'O estabelecimento possui monitoramento por câmeras para sua segurança e proteção do patrimônio.', placa: 'cameras' },
    { title: 'Proibido Fumar', desc: 'É proibido fumar em todas as áreas internas e fechadas do estabelecimento, conforme legislação vigente.', placa: 'fumar' },
    { title: 'Sonegar é Crime', desc: 'A sonegação fiscal é crime. Exija sempre o seu documento fiscal no momento da compra.', placa: 'fiscal' },
    { title: 'Descarte Consciente de Eletrônicos', desc: 'Oferecemos pontos de coleta para o descarte adequado de aparelhos eletrônicos, baterias e pilhas em conformidade com a Política Nacional de Resíduos Sólidos.', tela: 'residuos', actionLabel: 'Descarte de Equipamentos Eletrônicos' },
    { title: 'Proibido Uso de Capacete', desc: 'Para a segurança de todos, é obrigatória a retirada de capacetes e coberturas que ocultem a face ao entrar no estabelecimento.', placa: 'capacete' },
    { title: 'Fornecimento de Sacolas Plásticas', desc: 'De acordo com a legislação, adotamos medidas para redução do uso de sacolas plásticas convencionais, incentivando o uso de sacolas retornáveis.', placa: 'sacolas' },
    { title: 'Emissão de Nota Fiscal', desc: 'A Nota Fiscal é emitida eletronicamente e é o seu comprovante legal da operação de compra.', placa: 'nota' },
    { title: 'Discriminação é Crime', desc: 'É expressamente proibida qualquer forma de discriminação em nosso estabelecimento. Todos têm direito a tratamento igualitário.', placa: 'discriminacao' }
  ]
};

const OUTROS_PASTAS_ESTADOS = {
  AL: 'Alagoas', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceara', DF: 'Distrito Federal',
  ES: 'Espirito Santo', MA: 'Maranhão', MG: 'Minas Gerais',
  PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piaui', PR: 'Paraná',
  RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
  SE: 'Sergipe', SP: 'São Paulo'
};

const OUTROS_PLACAS = {
  cameras: {
    AL: '2. Ambiente sendo filmado.png', AM: '2. Ambiente sendo filmado.png', BA: '2. Ambiente filmado.webp',
    CE: '2. Ambiente sendo filmado.png', DF: '2. Ambiente sendo filmado.png', ES: '2. Ambiente sendo filmado.png',
    MA: '2. Ambiente sendo filmado.png', MG: 'Ambiente filmado.webp',
    PA: '2. Ambiente sendo filmado.png', PB: '2. Ambiente sendo filmado.png', PE: '2. Ambiente sendo filmado.png',
    PI: '2. Ambiente sendo filmado.png', PR: '2. Ambiente sendo filmado.png', RJ: 'Ambiente filmado.webp',
    RN: '2. Ambiente sendo filmado.png', RS: '2. Ambiente sendo filmado.png', SE: '2. Ambiente sendo filmado.png',
    SP: 'Ambiente Filmado.jpg'
  },
  fumar: {
    AL: '4. Proibido fumar (lei federal).gif', BA: '3. Proibido fumar (lei federal).gif',
    CE: '4. Proibido fumar (lei federal).gif', DF: '4. Proibido fumar (lei federal).gif', ES: '4. Proibido fumar (lei federal).gif',
    MA: '4. Proibido fumar (lei federal).gif', MG: 'Proibido fumar lei estadual.png',
    PA: '4. Proibido fumar (lei federal).gif', PB: '5. Proibido Fumar.jpg', PE: '4. Proibido fumar (lei federal).gif',
    PI: '4. Proibido fumar (lei federal).gif', PR: '4. Proibido fumar (lei federal).gif', RJ: 'Proibido Fumar.pdf',
    RN: '4. Proibido fumar (lei federal).gif', RS: '4. Proibido fumar (lei federal).gif', SE: '4. Proibido fumar (lei federal).gif',
    SP: 'Proibido Fumar.pdf'
  },
  fiscal: {
    AL: '3. Sonegar é crime.png', AM: '3. Sonegar é crime.png', BA: '4. Proibido sonegação fiscal.png',
    CE: '5. Proibido sonegação fiscal.png', DF: '3. Sonegar é crime.png',
    MA: '3. Sonegar é crime.png', MG: 'Proibido sonegação fiscal.png',
    PA: '3. Sonegar é crime.png', PB: '3. Sonegar é crime.png', PE: '5. Proibido sonegação fiscal.png',
    PI: '3. Sonegar é crime.png', PR: '5. Proibido sonegação fiscal.png', RJ: 'Proibido Sonegar.png',
    RN: '3. Sonegar é crime.png', RS: '3. Sonegar é crime.png', SE: '3. Sonegar é crime.png',
    SP: 'Sonegar é crime.png'
  },
  capacete: {
    AL: '6. Proibido uso de capacete.png', AM: '6. Proibido uso de capacete.png', BA: '5. Proibido uso de capacete .png',
    CE: '6. Proibido uso de capacete.webp', DF: '6. Proibido uso de capacete.png', ES: '5. Proibido uso de capacete.webp',
    MA: '6. Proibido uso de capacete.png', MG: 'Proibido uso de capacete.png',
    PA: '6. Proibido uso de capacete.png', PB: '6. Proibido Uso de Capacete.jpg', PE: '6. Proibido uso de capacete.png',
    PI: '6. Proibido uso de capacete.png', PR: '6. Proibido uso de capacete.png', RJ: 'Proibido capacete.webp',
    RN: '6. Proibido uso de capacete.png', RS: '6. Proibido uso de capacete.png', SE: '6. Proibido uso de capacete.png',
    SP: 'Proibido uso de capacete.png'
  },
  sacolas: {
    AL: '8. Proibido Sacolas Plasticas.png', AM: '8. Proibido Sacolas Plasticas.png', BA: '7. Proibido Sacolas Plasticas.png',
    CE: '8. Proibido Sacolas Plasticas.png', DF: '8. Proibido Sacolas Plasticas.png', ES: '7. Proibido Sacolas Plasticas.png',
    MA: '8. Proibido Sacolas Plasticas.png', MG: 'Proibido Sacolas Plasticas.png',
    PA: '8. Proibido Sacolas Plasticas.png', PB: '8. Proibido Sacolas Plasticas.png', PE: '8. Proibido Sacolas Plasticas.png',
    PI: '8. Proibido Sacolas Plasticas.png', PR: '8. Proibido Sacolas Plasticas.png', RJ: 'Proibido Sacolas Plásticas.jpg',
    RN: '8. Proibido Sacolas Plasticas.png', RS: '8. Proibido Sacolas Plasticas.png', SE: '8. Proibido Sacolas Plasticas.png',
    SP: 'Proibido Sacolas Plasticas.png'
  },
  nota: { RS: 'Emissão de NF.pdf', SP: 'Exija nota fiscal.png' },
  discriminacao: {
    AL: '7. Proibido discriminação.png', BA: '6. Proibido discriminação.png',
    CE: '7. Proibido discriminação.png', DF: '7. Proibido discriminação.png', ES: '6. Proibido discriminação.png',
    MA: '7. Proibido discriminação.png', MG: 'Proibido discriminação.png',
    PA: '7. Proibido discriminação.png', PB: '7. Poribido discriminação.png', PE: '7. Proibido discriminação.png',
    PR: '7. Proibido discriminação.png', RJ: 'Poribido discriminação.png',
    RN: '7. Proibido discriminação.png', RS: '7. Proibido discriminação.png', SE: '7. Proibido discriminação.png',
    SP: 'Vedação de discriminação.png',  PI: '7. Proibido discriminação.png'
  }
};

const app = {
  history: ['home'],
  currentScreen: 'home',
  
  navigate: (screenId) => {
      if (app.currentScreen === screenId) return;
      
      document.getElementById(`screen-${app.currentScreen}`).classList.remove('active');
      
      if(screenId !== 'home') app.history.push(app.currentScreen);
      
      app.currentScreen = screenId;
      document.getElementById(`screen-${screenId}`).classList.add('active');
      
      document.querySelectorAll('.nav-btn').forEach(btn => {
          const target = btn.getAttribute('data-target');
          if (target === screenId) {
              btn.classList.add('active');
              if(target === 'procon') { btn.classList.add('text-[#002D72]'); btn.classList.remove('text-gray-400'); } 
              else if(target === 'prioridade') { btn.classList.add('text-[#9B59B6]'); btn.classList.remove('text-gray-400'); }
              else { btn.classList.add('text-brand'); btn.classList.remove('text-gray-400'); }
          } else {
              btn.classList.remove('active', 'text-brand', 'text-[#002D72]', 'text-[#9B59B6]');
              btn.classList.add('text-gray-400');
          }
      });
  },

  goBack: () => {
      if (app.history.length > 0) {
          const prev = app.history.pop();
          document.getElementById(`screen-${app.currentScreen}`).classList.remove('active');
          app.currentScreen = prev;
          document.getElementById(`screen-${prev}`).classList.add('active');
      } else {
          app.navigate('home');
      }
  }
};


// FILTERS & DIRECTORY
function setupFilters(type) {
  const stateSel = document.getElementById(`${type}-state`);
  const citySel = document.getElementById(`${type}-city`);
  if (!stateSel || !citySel) return;

  const items = DATA[type];
  const availableUfs = [...new Set(items.map(i => i.uf))].sort();
  
  availableUfs.forEach(uf => {
    const estadoObj = DATA.estados.find(e => e.uf === uf);
    const nome = estadoObj ? estadoObj.nome : uf;
    stateSel.innerHTML += `<option value="${uf}">${nome} (${uf})</option>`;
  });

  stateSel.addEventListener('change', () => {
    const uf = stateSel.value;
    citySel.innerHTML = '<option value="">Todas as Cidades</option>';
    if (uf) {
      const cidades = [...new Set(items.filter(i => i.uf === uf).map(i => i.cidade))].sort();
      cidades.forEach(c => { citySel.innerHTML += `<option value="${c}">${c}</option>`; });
    }
    renderResults(type);
  });
  citySel.addEventListener('change', () => renderResults(type));
}

function renderResults(type) {
  const uf = document.getElementById(`${type}-state`).value;
  const city = document.getElementById(`${type}-city`).value;
  const list = document.getElementById(`${type}-results`);
  const empty = document.getElementById(`${type}-empty`);
  
  if (!uf && !city) { empty.style.display = 'block'; list.innerHTML = ''; return; }
  
  empty.style.display = 'none';
  const matches = DATA[type].filter(i => (!uf || i.uf === uf) && (!city || i.cidade === city));

  if (matches.length === 0) {
    list.innerHTML = `<div class="bg-white rounded-2xl p-4 shadow-soft border border-gray-100"><p class="text-sm text-text-muted">Nenhum resultado encontrado.</p></div>`;
    return;
  }

  list.innerHTML = matches.map((m, i) => {
    if (type === 'prioridade') {
      return `
        <div class="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 flex flex-col gap-3 animate-[slideInFade_0.3s_ease-out_${i*0.05}s_both]">
          <h3 class="font-bold text-sm text-[#9B59B6] uppercase tracking-wider">${m.cidade} - ${m.uf}</h3>
          <p class="text-sm text-text-main">${m.texto}</p>
          ${m.imgs.map(src => `<img src="${src}" alt="Placa ${m.cidade}" class="w-full rounded-lg mt-2 border border-gray-100" loading="lazy">`).join('')}
        </div>`;
    } else {
      const plateMarkup = Array.isArray(m.imgs) && m.imgs.length
        ? `<div class="mt-3 space-y-2">${m.imgs.map(src => `<img src="${src}" alt="Placa Procon ${m.cidade}" class="w-full rounded-lg border border-gray-100 bg-white" loading="lazy">`).join('')}</div>`
        : '';
      return `
        <div class="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 flex flex-col gap-2 animate-[slideInFade_0.3s_ease-out_${i*0.05}s_both]">
          <span class="text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full self-start">${m.uf}</span>
          <h3 class="font-bold text-sm text-[#002D72] mt-1">${m.nome}</h3>
          <p class="text-xs text-text-muted">${m.cidade} - ${m.uf}</p>
          <div class="bg-surface rounded-lg p-3 mt-2 flex items-center justify-between">
              <span class="text-xs font-semibold text-text-main"><i class="ph-fill ph-phone text-gray-400 mr-1"></i> ${m.fone}</span>
              ${m.url ? `<a href="${m.url}" target="_blank" class="text-[10px] font-bold text-[#002D72] bg-white border border-gray-200 px-2 py-1.5 rounded-md shadow-sm active:scale-95">Site</a>` : ''}
          </div>
          ${plateMarkup}
        </div>`;
    }
  }).join('');
}


// PRIVACIDADE & OUTROS
function setupPrivacidade() {
  const searchInput = document.getElementById('privacidade-search');
  const resultsDiv = document.getElementById('privacidade-results');
  const emptyDiv = document.getElementById('privacidade-empty');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { emptyDiv.style.display = 'block'; resultsDiv.innerHTML = ''; return; }
    emptyDiv.style.display = 'none';

    const matches = DATA.privacidade.filter(m => m.shopping.toLowerCase().includes(q) || m.cidade.toLowerCase().includes(q));

    if (matches.length === 0) {
      resultsDiv.innerHTML = `<div class="bg-white rounded-2xl p-4 shadow-soft border border-gray-100"><p class="text-sm text-text-muted">Nenhum shopping encontrado.</p></div>`;
      return;
    }

    resultsDiv.innerHTML = matches.map((m, i) => `
      <div class="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 flex flex-col gap-2 animate-[slideInFade_0.3s_ease-out_${i*0.05}s_both]">
        <h3 class="font-bold text-sm text-[#27AE60]">${m.shopping}</h3>
        <p class="text-xs text-text-muted mb-2">${m.cidade} - ${m.uf}</p>
        <a href="${m.url}" target="_blank" class="text-xs text-center font-bold text-white bg-[#27AE60] px-3 py-2 rounded-lg shadow-sm active:scale-95">Ver Aviso LGPD</a>
      </div>
    `).join('');
  });
}

function setupOutros() {
  const stateSelect = document.getElementById('outros-state');
  const citySelect = document.getElementById('outros-city');
  const states = [...DATA.estados].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

  states.forEach(state => {
    const option = document.createElement('option');
    option.value = state.uf;
    option.textContent = `${state.nome} (${state.uf})`;
    stateSelect.appendChild(option);
  });

  stateSelect.addEventListener('change', () => {
    citySelect.innerHTML = '<option value="">Todas as Cidades</option>';
    const uf = stateSelect.value;
    if (uf) {
      const cities = [...new Set([...DATA.prioridade, ...DATA.procon]
        .filter(item => item.uf === uf)
        .map(item => item.cidade))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
    renderOutros();
  });
  citySelect.addEventListener('change', renderOutros);
  renderOutros();
}

function renderOutros() {
  const uf = document.getElementById('outros-state').value;
  const city = document.getElementById('outros-city').value;
  const state = DATA.estados.find(item => item.uf === uf);
  const locationLabel = city && state ? `${city} - ${state.uf}` : state ? `${state.nome} (${state.uf})` : '';

  document.getElementById('outros-results').innerHTML = DATA.outros.map(item => {
    const src = uf && item.placa ? getOutrosPlate(item.placa, uf) : '';
    const isPdf = src && /\.pdf$/i.test(src);
    const location = locationLabel
      ? `<p class="text-[10px] font-semibold text-[#78909C] uppercase tracking-wider mb-2">${locationLabel}</p>`
      : '';
    const plate = src
      ? (isPdf
        ? `<div class="mt-3 overflow-hidden rounded-lg border border-gray-100 bg-white">
            <object data="${src}" type="application/pdf" class="w-full" style="height: 520px; min-height: 300px; background: #fff;">
              <iframe src="${src}" title="Placa: ${item.title} — ${locationLabel}" class="w-full" style="height: 520px; min-height: 300px; border: 0; background: #fff;"></iframe>
            </object>
            <a href="${src}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-xs font-semibold text-[#78909C] underline">Abrir PDF em nova aba</a>
          </div>`
        : `<img src="${src}" alt="Placa: ${item.title} — ${locationLabel}" class="w-full rounded-lg mt-3 border border-gray-100 object-contain" loading="lazy">`)
      : uf && item.placa
        ? '<p class="text-xs text-text-muted mt-2"></p>'
        : '';
    const content = `${location}<h3 class="font-bold text-sm text-[#78909C] mb-1">${item.title}</h3><p class="text-xs text-text-muted leading-relaxed">${item.desc}</p>${plate}`;

    if (item.tela) {
      return `<button type="button" aria-label="${item.actionLabel}" onclick="app.navigate('${item.tela}')" class="w-full bg-white rounded-2xl p-4 shadow-soft border border-gray-100 text-left hover:border-[#78909C] focus:outline-none focus:ring-2 focus:ring-[#78909C]/50">
        ${content}<span class="inline-flex items-center gap-1 text-xs font-bold text-[#78909C] mt-3">${item.actionLabel} <i class="ph-bold ph-arrow-right"></i></span>
      </button>`;
    }
    return `<article class="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">${content}</article>`;
  }).join('');
}

function getOutrosPlate(category, uf) {
  const stateFolder = OUTROS_PASTAS_ESTADOS[uf];
  const filename = OUTROS_PLACAS[category] && OUTROS_PLACAS[category][uf];
  if (!stateFolder || !filename) return '';
  const categoryFolder = {
    cameras: '1. Ambiente sendo filmado',
    fumar: '2. Proibido fumar',
    fiscal: '4. Sonegar é crime',
    capacete: '3. Proibido uso de capacete',
    sacolas: '5. Uso de Sacolas plásticas',
    nota: '7. Emissão de Nota fiscal',
    discriminacao: '8. Vedação de discriminação'
  }[category];
  if (!categoryFolder) return '';
  return `./demais/${encodeURIComponent(categoryFolder)}/${encodeURIComponent(stateFolder)}/${encodeURIComponent(filename)}`;
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  setupFilters('prioridade');
  setupFilters('procon');
  setupPrivacidade();
  setupOutros();
});
