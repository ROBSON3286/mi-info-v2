'use strict';

const DATA = {
  estados: [
    { uf: 'AL', nome: 'Alagoas' }, { uf: 'AM', nome: 'Amazonas' }, { uf: 'BA', nome: 'Bahia' }, { uf: 'CE', nome: 'Ceará' }, { uf: 'DF', nome: 'Distrito Federal' }, { uf: 'ES', nome: 'Espírito Santo' }, { uf: 'MA', nome: 'Maranhão' }, { uf: 'MG', nome: 'Minas Gerais' }, { uf: 'MS', nome: 'Mato Grosso do Sul' }, { uf: 'MT', nome: 'Mato Grosso' }, { uf: 'PA', nome: 'Pará' }, { uf: 'PB', nome: 'Paraíba' }, { uf: 'PE', nome: 'Pernambuco' }, { uf: 'PI', nome: 'Piauí' }, { uf: 'PR', nome: 'Paraná' }, { uf: 'RJ', nome: 'Rio de Janeiro' }, { uf: 'RN', nome: 'Rio Grande do Norte' }, { uf: 'RS', nome: 'Rio Grande do Sul' }, { uf: 'SE', nome: 'Sergipe' }, { uf: 'SP', nome: 'São Paulo' }
  ],
  prioridade: [
    { uf: 'AL', cidade: 'Maceió', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/al/atendimento_preferencial_AL.png', './assets/img/estados/al/maceio/Alagoas - Estadual.png'] },
    { uf: 'AM', cidade: 'Manaus', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/am/atendimento_preferencial_AM.png', './assets/img/estados/am/manaus/Manaus.png', './assets/img/estados/am/manaus/Manaus 2.png'] },
    { uf: 'BA', cidade: 'Feira de Santana', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/ba/Feira de Santana/Municipal - Feira de Santana.png'] },
    { uf: 'BA', cidade: 'Salvador', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/ba/atendimento_preferencial_BA.png'] },
    { uf: 'CE', cidade: 'Fortaleza', texto: '', imgs: ['./assets/img/estados/ce/atendimento_prioritario_CE.jpg', './assets/img/estados/ce/Fortaleza/Fortaleza - Municipal.png', './assets/img/estados/ce/Fortaleza/atendimento_prioritario_CE.jpg'] },
    { uf: 'DF', cidade: 'Brasília', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/df/Brasília/Atendimento Preferencial Distrito Federal.png', './assets/img/estados/df/Brasília/Distrito Federal - Estadual.png'] },
    { uf: 'ES', cidade: 'Vila Velha', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'ES', cidade: 'Vitória', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/es/Espírito Santo - Estadual.png'] },
    { uf: 'MA', cidade: 'São Luís', texto: '', imgs: ['./assets/img/estados/ma/Atendimento prioritario.png', './assets/img/estados/ma/Maranhão - Estadual.png', './assets/img/estados/ma/sao_luis/Atendimento prioritario.png', './assets/img/estados/ma/sao_luis/São Luís - Municipal.png'] },
    { uf: 'MS', cidade: 'Campo Grande', texto: '', imgs: ['./assets/img/estados/ms/atendimento_preferencial_MS.png', './assets/img/estados/ms/Campo Grande/atendimento_prioritario_MT.png'] },
    { uf: 'MG', cidade: 'Belo Horizonte', texto: '', imgs: ['./assets/img/estados/mg/atendimento_prioritario_MG.png', './assets/img/estados/mg/bh-estadual.png', './assets/img/estados/mg/Belo Horizonte/atendimento_prioritario_MG.png'] },
    { uf: 'MG', cidade: 'Juiz de Fora', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'MG', cidade: 'Montes Claros', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'MG', cidade: 'Uberlândia', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'MT', cidade: 'Cuiabá', texto: '', imgs: ['./assets/img/estados/mt/atendimento_prioritario_MT.png'] },
    { uf: 'PA', cidade: 'Belém', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/pa/atendimento_preferencial_PA.png'] },
    { uf: 'PB', cidade: 'Campina Grande', texto: '', imgs: [] },
    { uf: 'PB', cidade: 'João Pessoa', texto: '', imgs: ['./assets/img/estados/pb/1. Atendimento Prioritário.jpg'] },
    { uf: 'PE', cidade: 'Recife', texto: '', imgs: ['./assets/img/estados/pe/1. Atendimento prioritário.webp'] },
    { uf: 'PI', cidade: 'Teresina', texto: '', imgs: ['./assets/img/estados/pi/teresina.png'] },
    { uf: 'PR', cidade: 'Curitiba', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/pr/atendimento_preferencial_PR.png'] },
    { uf: 'PR', cidade: 'Londrina', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'Niterói', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'Nova Iguaçu', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RJ', cidade: 'Rio de Janeiro', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/rj/atendimento_preferencial_RJ.png'] },
    { uf: 'RJ', cidade: 'São João de Meriti', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'RN', cidade: 'Natal', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/rn/1. Atendimento prioritário.png', './assets/img/estados/rn/atendimento_preferencial_RN.png'] },
    { uf: 'RS', cidade: 'Porto Alegre', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/rs/atendimento_preferencial_RS.png'] },
    { uf: 'SE', cidade: 'Aracaju', texto: '', imgs: ['./assets/img/estados/se/1. Atendimento prioritário.png'] },
    { uf: 'SP', cidade: 'Barueri', texto: '', imgs: [] },
    { uf: 'SP', cidade: 'Campinas', texto: '', imgs: [] },
    { uf: 'SP', cidade: 'Guarulhos', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'Jundiaí', texto: '', imgs: [] },
    { uf: 'SP', cidade: 'Mogi das Cruzes', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'Ribeirão Preto', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'Santo André', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'Santos', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'São Bernardo do Campo', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: [] },
    { uf: 'SP', cidade: 'São Paulo', texto: 'Atendimento Preferencial e Prioritário apenas de acordo com a Lei Federal nº 10.048/2000', imgs: ['./assets/img/estados/sp/Atendimento priorizado - pessoas ostomizadas.PNG', './assets/img/estados/sp/Atendimento prioritário Fibromialgia.JPG', './assets/img/estados/sp/atendimento_prioritario_SP.jpg', './assets/img/estados/sp/atendimento_prioritario_SP.png'] },
    { uf: 'SP', cidade: 'Taubaté', texto: '', imgs: [] }
  ],
  procon: [
    { uf: 'SP', cidade: 'São Paulo', nome: 'Procon-SP (Sede Estadual)', fone: 'Disque 151 / (11) 3824-0446', url: 'https://www.procon.sp.gov.br' },
    { uf: 'SP', cidade: 'Campinas', nome: 'Procon Campinas', fone: 'Disque 151 / (19) 3734-2000', url: 'https://procon.campinas.sp.gov.br' },
    { uf: 'RJ', cidade: 'Rio de Janeiro', nome: 'Procon-RJ (Estadual)', fone: 'Disque 151 / (21) 2212-7000', url: 'https://www.procon.rj.gov.br' },
    { uf: 'MG', cidade: 'Belo Horizonte', nome: 'Procon-MG', fone: 'Disque 151 / (31) 3277-4400', url: 'https://www.procon.mg.gov.br' }
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
  ES: 'Espirito Santo', MA: 'Maranhão', MG: 'Minas Gerais', MS: 'Mato Grosso do Sul',
  PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piaui', PR: 'Paraná',
  RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
  SE: 'Sergipe', SP: 'São Paulo'
};

const OUTROS_PLACAS = {
  cameras: {
    AL: '2. Ambiente sendo filmado.png', AM: '2. Ambiente sendo filmado.png', BA: '2. Ambiente filmado.webp',
    CE: '2. Ambiente sendo filmado.png', DF: '2. Ambiente sendo filmado.png', ES: '2. Ambiente sendo filmado.png',
    MA: '2. Ambiente sendo filmado.png', MS: '2. Ambiente sendo filmado.png', MG: 'Ambiente filmado.webp',
    PA: '2. Ambiente sendo filmado.png', PB: '2. Ambiente sendo filmado.png', PE: '2. Ambiente sendo filmado.png',
    PI: '2. Ambiente sendo filmado.png', PR: '2. Ambiente sendo filmado.png', RJ: 'Ambiente filmado.webp',
    RN: '2. Ambiente sendo filmado.png', RS: '2. Ambiente sendo filmado.png', SE: '2. Ambiente sendo filmado.png',
    SP: 'Ambiente Filmado.jpg'
  },
  fumar: {
    AL: '4. Proibido fumar (lei federal).gif', BA: '3. Proibido fumar (lei federal).gif',
    CE: '4. Proibido fumar (lei federal).gif', DF: '4. Proibido fumar (lei federal).gif', ES: '4. Proibido fumar (lei federal).gif',
    MA: '4. Proibido fumar (lei federal).gif', MS: '4. Proibido fumar (lei federal).gif', MG: 'Proibido fumar lei estadual.png',
    PA: '4. Proibido fumar (lei federal).gif', PB: '5. Proibido Fumar.jpg', PE: '4. Proibido fumar (lei federal).gif',
    PI: '4. Proibido fumar (lei federal).gif', PR: '4. Proibido fumar (lei federal).gif', RJ: 'Proibido Fumar.pdf',
    RN: '4. Proibido fumar (lei federal).gif', RS: '4. Proibido fumar (lei federal).gif', SE: '4. Proibido fumar (lei federal).gif',
    SP: 'Proibido Fumar.pdf'
  },
  fiscal: {
    AL: '3. Sonegar é crime.png', AM: '3. Sonegar é crime.png', BA: '4. Proibido sonegação fiscal.png',
    CE: '5. Proibido sonegação fiscal.png', DF: '3. Sonegar é crime.png',
    MA: '3. Sonegar é crime.png', MS: '3. Sonegar é crime.png', MG: 'Proibido sonegação fiscal.png',
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
    MA: '8. Proibido Sacolas Plasticas.png', MS: '8. Proibido Sacolas Plasticas.png', MG: 'Proibido Sacolas Plasticas.png',
    PA: '8. Proibido Sacolas Plasticas.png', PB: '8. Proibido Sacolas Plasticas.png', PE: '8. Proibido Sacolas Plasticas.png',
    PI: '8. Proibido Sacolas Plasticas.png', PR: '8. Proibido Sacolas Plasticas.png', RJ: 'Proibido Sacolas Plásticas.jpg',
    RN: '8. Proibido Sacolas Plasticas.png', RS: '8. Proibido Sacolas Plasticas.png', SE: '8. Proibido Sacolas Plasticas.png',
    SP: 'Proibido Sacolas Plasticas.png'
  },
  nota: { RS: 'Emissão de NF.pdf', SP: 'Exija nota fiscal.png' },
  discriminacao: {
    AL: '7. Proibido discriminação.png', BA: '6. Proibido discriminação.png',
    CE: '7. Proibido discriminação.png', DF: '7. Proibido discriminação.png', ES: '6. Proibido discriminação.png',
    MA: '7. Proibido discriminação.png', MS: '7. Proibido discriminação.png', MG: 'Proibido discriminação.png',
    PA: '7. Proibido discriminação.png', PB: '7. Poribido discriminação.png', PE: '7. Proibido discriminação.png',
    PR: '7. Proibido discriminação.png', RJ: 'Poribido discriminação.png',
    RN: '7. Proibido discriminação.png', RS: '7. Proibido discriminação.png', SE: '7. Proibido discriminação.png',
    SP: 'Vedação de discriminação.png'
  }
};

const app = {
  history: ['home'],
  currentScreen: 'home',
  
  navigate: (screenId) => {
      if (app.currentScreen === screenId) return;
      
      document.getElementById(`screen-${app.currentScreen}`).classList.remove('active');
      
      if(screenId !== 'chat' && screenId !== 'home') app.history.push(app.currentScreen);
      
      app.currentScreen = screenId;
      document.getElementById(`screen-${screenId}`).classList.add('active');
      
      document.querySelectorAll('.nav-btn').forEach(btn => {
          const target = btn.getAttribute('data-target');
          if (target === screenId) {
              btn.classList.add('active');
              if(target === 'procon') { btn.classList.add('text-[#002D72]'); btn.classList.remove('text-gray-400'); } 
              else if(target === 'prioridade') { btn.classList.add('text-[#9B59B6]'); btn.classList.remove('text-gray-400'); }
              else if(target !== 'chat') { btn.classList.add('text-brand'); btn.classList.remove('text-gray-400'); }
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
      return `
        <div class="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 flex flex-col gap-2 animate-[slideInFade_0.3s_ease-out_${i*0.05}s_both]">
          <span class="text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full self-start">${m.uf}</span>
          <h3 class="font-bold text-sm text-[#002D72] mt-1">${m.nome}</h3>
          <p class="text-xs text-text-muted">${m.cidade} - ${m.uf}</p>
          <div class="bg-surface rounded-lg p-3 mt-2 flex items-center justify-between">
              <span class="text-xs font-semibold text-text-main"><i class="ph-fill ph-phone text-gray-400 mr-1"></i> ${m.fone}</span>
              ${m.url ? `<a href="${m.url}" target="_blank" class="text-[10px] font-bold text-[#002D72] bg-white border border-gray-200 px-2 py-1.5 rounded-md shadow-sm active:scale-95">Site</a>` : ''}
          </div>
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
        ? `<a href="${src}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#78909C] underline">Abrir placa da região (PDF)</a>`
        : `<img src="${src}" alt="Placa: ${item.title} — ${locationLabel}" class="w-full rounded-lg mt-3 border border-gray-100 object-contain" loading="lazy">`)
      : uf && item.placa
        ? '<p class="text-xs text-text-muted mt-2">Não há placa digitalizada cadastrada para esta região.</p>'
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

// ASSISTENTE LOCAL: consulta à base DATA, sem serviço externo ou chave de API.
// As respostas reproduzem a base do projeto; não interpretam o conteúdo das placas.
const assistantEngine = {
  context: { topics: [], location: null, shopping: null, awaiting: null, question: '' },
  normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  },
  escape(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  has(text, phrase) {
    return (` ${text} `).includes(` ${this.normalize(phrase)} `);
  },
  // Corrige somente palavras longas com uma edição ou inversão de letras.
  near(a, b) {
    if (a === b) return true;
    if (a.length < 5 || b.length < 5 || Math.abs(a.length - b.length) > 1) return false;
    if (a.length === b.length) {
      const diff = [...a].map((c, i) => c === b[i] ? -1 : i).filter(i => i >= 0);
      return diff.length === 1 || (diff.length === 2 && diff[1] === diff[0] + 1 &&
        a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]);
    }
    const shorter = a.length < b.length ? a : b;
    const longer = a.length < b.length ? b : a;
    let i = 0;
    while (i < shorter.length && shorter[i] === longer[i]) i++;
    return shorter.slice(i) === longer.slice(i + 1);
  },
  lexicon: {
    fumar: ['fumar', 'fumo', 'fuma', 'fumando', 'cigarro', 'cigarros', 'tabaco', 'tabagismo', 'vape', 'vaper', 'pod', 'cigarro eletronico', 'fumante', 'fumantes'],
    fiscal: ['sonegacao', 'sonegar', 'sonegando', 'sonega', 'sonegam', 'sonegou', 'fiscal', 'nota', 'notinha', 'nf', 'nfe', 'nfce', 'imposto', 'impostos', 'tributo', 'cupom', 'recibo', 'comprovante de compra'],
    cameras: ['camera', 'cameras', 'filmado', 'filmada', 'filmagem', 'filmagens', 'filmando', 'monitoramento', 'vigilancia', 'gravacao', 'gravacoes', 'circuito interno'],
    descarte: ['descarte', 'descartar', 'descarto', 'descarta', 'descartando', 'reciclar', 'reciclagem', 'recicla', 'bateria', 'baterias', 'pilha', 'pilhas', 'lixo eletronico', 'jogar fora', 'jogo fora', 'coleta', 'celular velho', 'celular antigo', 'eletronicos usados'],
    procon: ['procon', 'reclamar', 'reclamacao', 'reclamacoes', 'reclamo', 'denuncia', 'denunciar', 'denuncio', 'defesa do consumidor', 'telefone', 'contato', 'contatos', 'ligar', 'numero do procon'],
    prioridade: ['prioridade', 'prioritario', 'prioritaria', 'prioritarios', 'preferencial', 'preferencia', 'fila', 'idoso', 'idosa', 'idosos', 'gestante', 'gravida', 'autista', 'autismo', 'tea', 'pcd', 'deficiencia', 'deficiente', 'lactante', 'amamentando', 'bebe', 'crianca de colo', 'fibromialgia', 'ostomizado', 'ostomizada', 'mobilidade reduzida', '10048', '10 048'],
    privacidade: ['privacidade', 'lgpd', 'dados pessoais', 'meus dados', 'meu cpf', 'protecao de dados', 'aviso de privacidade', 'politica de privacidade', 'consentimento', 'excluir dados', 'apagar dados', 'encarregado', 'dpo'],
    outros: ['outras informacoes', 'outros assuntos', 'outros avisos', 'avisos gerais', 'regras da loja', 'placas da loja', 'obrigacoes legais']
  },
  detectTopics(text) {
    const tokens = text.split(' ');
    return Object.entries(this.lexicon).filter(([, terms]) => terms.some(term =>
      this.has(text, term) || (!term.includes(' ') && tokens.some(t => this.near(t, term)))
    )).map(([key]) => key);
  },
  reset() { this.context = { topics: [], location: null, shopping: null, awaiting: null, question: '' }; },
  section(type, label) {
    return `<p class="mt-2 text-xs text-text-muted">Fonte: base do projeto · <button type="button" class="text-brand font-semibold" data-mi-topic="${type}">${this.escape(label)}</button></p>`;
  },
  paragraph(text) { return `<p>${this.escape(text)}</p>`; },
  link(url, label) {
    if (!/^https:\/\//i.test(url || '')) return this.escape(label);
    return `<a href="${this.escape(url)}" target="_blank" rel="noopener noreferrer" class="text-brand font-semibold">${this.escape(label)}</a>`;
  },
  locations(text, raw = text) {
    const records = [...DATA.prioridade, ...DATA.procon, ...DATA.privacidade];
    const aliases = { 'sampa': 'São Paulo', 'bh': 'Belo Horizonte', 'rio': 'Rio de Janeiro', 'floripa': 'Florianópolis' };
    let expanded = text;
    Object.entries(aliases).forEach(([alias, city]) => {
      if (this.has(text, alias) && !this.has(text, city)) expanded += ` ${this.normalize(city)}`;
    });
    const states = DATA.estados.filter(e => {
      const name = this.normalize(e.nome);
      const named = this.has(text, e.nome) && (name !== 'para' || /Pará/i.test(raw) ||
        text === 'para' || /estado (do |de )?para\b/.test(text));
      const abbreviation = this.has(text, e.uf) && (e.uf !== 'SE' ||
        /\bSE\b/.test(raw) || text === 'se' || /(?:estado|uf|em|de) (?:de )?se$/.test(text));
      return named || abbreviation;
    });
    const cities = [...new Map(records.map(r => [r.cidade, { city: r.cidade, uf: r.uf }])).values()]
      .filter(r => this.has(expanded, r.city)).sort((a, b) => b.city.length - a.city.length);
    // Evita que "Rio" de Rio Grande do Norte seja interpretado como Rio de Janeiro.
    if (/\brio (grande|branco)\b/.test(text)) {
      const idx = cities.findIndex(c => c.city === 'Rio de Janeiro');
      if (idx >= 0 && !this.has(text, 'rio de janeiro')) cities.splice(idx, 1);
    }
    if (/\bestado\b/.test(text) && states.length === 1 &&
        !cities.some(c => this.normalize(c.city) !== this.normalize(states[0].nome))) {
      return { uf: states[0].uf, city: null };
    }
    if (cities.length > 1) return { ambiguous: true, names: cities.map(c => c.city) };
    if (cities.length === 1) {
      if (states.some(s => s.uf !== cities[0].uf && this.has(text, s.uf))) return { conflict: true };
      return cities[0];
    }
    if (states.length > 1) return { ambiguous: true, names: states.map(s => s.nome) };
    if (states.length === 1) return { uf: states[0].uf, city: null };
    return null;
  },
  shopping(text) {
    return DATA.privacidade.filter(r => this.has(text, r.shopping) ||
      this.has(text, r.shopping.replace(/shopping/ig, '').trim()));
  },
  summary() {
    return this.paragraph('Posso consultar atendimento prioritário, contatos do Procon, privacidade e LGPD, câmeras, proibição de fumar, documento fiscal e descarte de baterias. Pode perguntar com suas palavras. Para consultas locais, diga a cidade/UF ou o shopping.');
  },
  answer(raw) {
    const text = this.normalize(raw);
    if (!text) return this.paragraph('Digite uma pergunta para eu ajudar.');
    if (/^(limpar|reiniciar|esquecer)( conversa| tudo| contexto)?$/.test(text)) {
      this.reset(); return this.summary();
    }
    if (/^(oi|ola|bom dia|boa tarde|boa noite|opa|e ai|oi tudo bem|ola tudo bem|tudo bem)$/.test(text)) return this.summary();
    if (/^(obrigad[oa]|valeu|brigad[oa]|muito obrigad[oa]|ok|entendi|certo|ta bom)$/.test(text))
      return this.paragraph('Por nada! Pode continuar perguntando sobre os temas da central.');
    if (/\b(voce e uma ia|inteligencia artificial|como voce funciona|chatgpt|ia generativa)\b/.test(text))
      return this.paragraph('Sou um assistente de consulta à base deste aplicativo. Reconheço assuntos, variações de palavras e o contexto da conversa, mas não uso um modelo de IA generativa nem consulto informações externas.');
    const topics = this.detectTopics(text);
    // Contato genérico acompanha o assunto em curso; não significa sempre Procon.
    if (topics.includes('procon') && !/\b(procon|procom|reclam\w*|denunci\w*|defesa do consumidor)\b/.test(text)) {
      const other = topics.filter(t => t !== 'procon');
      const previous = this.context.topics.filter(t => t !== 'procon');
      if (other.length || previous.length) {
        topics.splice(topics.indexOf('procon'), 1);
        if (!topics.length) topics.push(...previous);
      }
    }
    const shops = this.shopping(text);
    const location = this.locations(text, raw);
    if (location && (location.ambiguous || location.conflict)) {
      this.context.location = null; this.context.shopping = null;
      if (topics.length) this.context.topics = topics;
      return this.paragraph(location.conflict ? 'A cidade e a UF informadas não correspondem na base. Qual cidade/UF você deseja consultar?' :
        `Você citou mais de uma localidade (${location.names.join(', ')}). Qual delas deseja consultar primeiro?`);
    }
    if (location) {
      this.context.location = location;
      this.context.shopping = null;
    }
    if (shops.length > 1) {
      this.context.shopping = null;
      this.context.topics = ['privacidade'];
      return this.paragraph('Você mencionou mais de um shopping. Qual deseja consultar primeiro?');
    }
    if (shops.length === 1) {
      this.context.shopping = shops[0];
      this.context.location = { city: shops[0].cidade, uf: shops[0].uf };
      if (!topics.length) topics.push('privacidade');
    }
    // Uma localidade nova não cadastrada não pode reutilizar silenciosamente a anterior.
    const unknownPlace = !location && !shops.length && /\b(?:em|de|do|da|no|na)\s+([a-z ]+)$/.exec(text);
    const localTopics = topics.length ? topics : this.context.topics;
    if (!location && !shops.length && !topics.length && this.context.awaiting &&
        !/\b(troca|trocar|garantia|devolucao|defeito|assistencia|preco|horario|ajuda|assuntos|menu)\b/.test(text) &&
        !/^(e |qual |quais |como |onde |por que|nao sei|nao lembro|aqui$|sim$|nao$)/.test(text)) {
      this.context.location = null; this.context.shopping = null;
      return this.paragraph(`Não encontrei “${String(raw).trim()}” na base. Informe a cidade/UF ou o shopping cadastrado. Você também pode consultar pelo menu.`);
    }
    if (location || shops.length) this.context.awaiting = null;
    const unknownTail = unknownPlace && unknownPlace[1].trim();
    const placeQuestion = unknownTail && !this.detectTopics(unknownTail).length &&
      !/\b(loja|local|estabelecimento|aqui|la|compra|shopping|cidade|estado|site|telefone|numero|contato|lei|leis|regra|regras|direitos|consumidor|bairro|fila)\b/.test(unknownTail);
    if (!location && !shops.length && placeQuestion && localTopics.some(t => ['procon', 'prioridade', 'privacidade'].includes(t))) {
      this.context.location = null; this.context.shopping = null;
      this.context.topics = localTopics;
      this.context.awaiting = 'localidade';
      return this.paragraph(`Não localizei “${unknownTail}” na base. Informe a cidade e a UF ou o nome do shopping. Só posso mostrar os registros cadastrados.`);
    }
    if (/\b(troca|trocar|garantia|devolucao|devolver|arrependimento|reembolso|assistencia|conserto|defeito|preco|estoque|horario|pagamento|parcelamento)\b/.test(text)) {
      const limitation = this.paragraph('A base deste projeto não contém políticas de troca, garantia, devolução, assistência, preços, horários ou pagamentos. Confirme o seu caso com a equipe da loja; não posso informar prazos ou condições que não estão cadastrados.');
      if (!topics.length) { this.context.topics = []; return limitation + this.section('procon', 'Contatos Procon'); }
      this.context.topics = topics;
      return limitation + topics.map(t => this.respond(t, text)).join('');
    }
    let selected = topics;
    if (!selected.length && this.context.topics.length && (location || shops.length ||
        /^(e |e$|sim$|isso$|aqui$|nessa|nesse|nesta|neste|qual |quais |como |onde |pode |posso |por que|me mostre|mais detalhes|explique|resuma|o primeiro|o segundo|o terceiro)/.test(text))) {
      selected = this.context.topics;
    }
    if (!selected.length) {
      if (!location && this.context.topics.some(t => ['procon', 'prioridade', 'privacidade'].includes(t)) &&
          !/\b(ajuda|ajudar|assuntos|temas|menu|informacoes|direitos|leis|duvidas)\b/.test(text)) {
        this.context.location = null; this.context.shopping = null;
        this.context.awaiting = 'localidade';
        return this.paragraph('Não reconheci essa localidade ou pergunta. Informe a cidade/UF, o shopping ou reformule sua dúvida para eu consultar a base correta.');
      }
      if (/\b(ajuda|ajudar|assuntos|temas|menu|informacoes|direitos|leis|duvidas)\b/.test(text)) return this.summary();
      return this.paragraph(location ? `Localidade selecionada: ${location.city || location.uf}. Qual assunto você deseja consultar?` :
        'Não consegui identificar sua dúvida com segurança. Você pode reformular ou escolher um destes assuntos?') + this.summary();
    }
    const responseText = topics.length ? text : `${this.context.question || ''} ${text}`;
    if (topics.length) this.context.question = text;
    this.context.topics = selected;
    this.context.awaiting = null;
    return selected.map(t => this.respond(t, responseText)).join('');
  },
  respond(topic, text) {
    const e = value => this.escape(value);
    const p = value => this.paragraph(value);
    const location = this.context.location;
    if (topic === 'outros') return DATA.outros.map(r => `<p class="mt-2"><strong>${e(r.title)}</strong><br>${e(r.desc)}</p>`).join('') + this.section('outros', 'Outras Informações');
    const noticeTitles = { fumar: 'Proibido Fumar', fiscal: 'Sonegar é Crime', cameras: 'Ambiente Sendo Filmado', descarte: 'Descarte Consciente de Eletrônicos' };
    if (noticeTitles[topic]) {
      const record = DATA.outros.find(r => r.title === noticeTitles[topic]);
      if (!record) return p('Não encontrei esse aviso na base atual.') + this.section('outros', 'Outras Informações');
      let answer = `<p class="mt-2"><strong>${e(record.title)}</strong><br>${e(record.desc)}</p>`;
      if (topic === 'fumar' && /\b(vape|vaper|pod|eletronico|fora|externa|externo|calcada|multa|pena|valor|lei|leis|artigo|denuncia|denunciar)\b/.test(text))
        answer += p('O aviso cadastrado trata das áreas internas e fechadas. Não detalha dispositivos eletrônicos, áreas externas, penalidades ou artigos de lei. Confirme esses detalhes com a equipe da loja.');
      if (topic === 'fiscal' && /\b(nao|recusa|recusou|segunda|via|perdi|cpf|multa|pena|prazo|denuncia|denunciar|como|qual|quais|crime|sonegacao)\b/.test(text))
        answer += p('A base traz esse aviso geral, mas não detalha emissão de segunda via, procedimentos de denúncia, penalidades ou análise de um caso concreto. Para resolver a emissão do documento, procure a equipe da loja. Se precisar do contato do Procon, informe a cidade/UF.');
      if (topic === 'cameras' && /\b(acesso|acessar|ver|imagens|gravacao|gravacoes|audio|som|tempo|dias|prazo|copia|pedir|solicitar|quem|como|posso)\b/.test(text))
        answer += p('O cadastro não informa prazo de armazenamento, gravação de áudio ou procedimento para acessar imagens. Consulte o aviso de privacidade do shopping ou a equipe da loja. Você pode me dizer o shopping para localizar o aviso.');
      if (topic === 'descarte') answer += p('O cadastro menciona coleta de baterias, mas não identifica o ponto exato nem confirma o recebimento de outros produtos. Confirme com a equipe da unidade onde entregar e quais itens são aceitos.');
      return answer + this.section('outros', 'Outras Informações');
    }
    if (topic === 'privacidade') {
      this.context.awaiting = this.context.shopping ? null : 'shopping';
      let records = this.context.shopping ? [this.context.shopping] : DATA.privacidade.filter(r => !location ||
        (r.uf === location.uf && (!location.city || r.cidade === location.city)));
      if (!records.length) return p(`Não há aviso de privacidade cadastrado para ${location.city || location.uf}. Informe outro shopping ou consulte a equipe da unidade.`) + this.section('privacidade', 'Privacidade e LGPD');
      let answer = p('Os avisos de privacidade disponíveis na base são específicos de cada shopping. Consulte o documento correspondente à sua unidade:');
      answer += records.map(r => `<p class="mt-2"><strong>${e(r.shopping)}</strong> — ${e(r.cidade)} / ${e(r.uf)}<br>${this.link(r.url, 'Abrir aviso de privacidade')}</p>`).join('');
      if (!this.context.shopping) answer += p('Qual é o shopping? Se ele não estiver na lista, não tenho o aviso cadastrado.');
      if (/\b(excluir|apagar|compartilha|compartilhar|vende|vender|armazenamento|prazo|cpf|consentimento|encarregado|dpo|camera|imagens|telefone|contato|numero|ligar)\b/.test(text))
        answer += p('A base contém os links dos avisos, mas não o texto dessas políticas. Não consigo confirmar procedimentos de exclusão, compartilhamento, retenção ou contato do encarregado sem esse conteúdo.');
      return answer + this.section('privacidade', 'Privacidade e LGPD');
    }
    if (!location) {
      this.context.awaiting = 'localidade';
      return p(topic === 'procon' ? 'Posso buscar os contatos do Procon cadastrados. Qual é a sua cidade e UF?' :
      'Posso consultar o atendimento prioritário cadastrado por localidade. Qual é a cidade e a UF da loja?') + this.section(topic, topic === 'procon' ? 'Contatos Procon' : 'Atendimento Prioritário');
    }
    const records = DATA[topic].filter(r => r.uf === location.uf && (!location.city || r.cidade === location.city));
    if (!records.length) return p(`Não há ${topic === 'procon' ? 'contato de Procon' : 'informação de prioridade'} cadastrado para ${location.city || location.uf}. Isso não significa que o serviço ou o direito não exista. Consulte a equipe da loja para orientação.`) + this.section(topic, topic === 'procon' ? 'Contatos Procon' : 'Atendimento Prioritário');
    if (topic === 'procon' && /\b(lei|leis|artigo|prazo|multa|pena|processo|documentos)\b/.test(text)) return p('O cadastro do Procon contém apenas contatos e sites, sem legislação, prazos ou procedimentos. Consulte o órgão pelo site ou telefone abaixo:') + records.map(r => `<p class="mt-2"><strong>${e(r.nome)}</strong><br>${e(r.fone)}<br>${this.link(r.url, 'Abrir site do Procon')}</p>`).join('') + this.section('procon', 'Contatos Procon');
    if (topic === 'procon') return records.map(r => `<p class="mt-2"><strong>${e(r.nome)}</strong><br>${e(r.cidade)} / ${e(r.uf)}<br>Telefone cadastrado: ${e(r.fone)}<br>${this.link(r.url, 'Abrir site do Procon')}</p>`).join('') + this.section('procon', 'Contatos Procon');
    if (records.length > 1) {
      this.context.awaiting = 'cidade';
      return p(`Encontrei registros de atendimento prioritário em ${location.uf}. Qual cidade deseja consultar?`) + p(records.map(r => r.cidade).join(', ')) + this.section('prioridade', 'Atendimento Prioritário');
    }
    const r = records[0];
    let answer = `<p class="mt-2"><strong>Atendimento prioritário — ${e(r.cidade)} / ${e(r.uf)}</strong></p>`;
    answer += p(r.texto || (r.imgs.length ? 'Este registro contém placas em imagem, sem transcrição das regras.' : 'A localidade está cadastrada, mas não possui texto nem placas disponíveis na base.'));
    if (r.imgs.length) {
      answer += p('Consulte as placas abaixo. Não interpreto automaticamente o texto das imagens:');
      answer += r.imgs.filter(src => /^\.\/assets\/img\//.test(src)).map((src, i) => `<p class="mt-2"><a href="${e(src)}" target="_blank" rel="noopener noreferrer" class="text-brand font-semibold">Abrir placa ${i + 1} de ${e(r.cidade)}</a></p><img src="${e(src)}" alt="Placa ${i + 1} de atendimento prioritário de ${e(r.cidade)}" loading="lazy" class="w-full rounded-lg mt-3 border border-gray-100" data-mi-plate="true">`).join('');
    }
    if (/\b(tenho|direito|quem|posso|idade|anos|idoso|idosa|gravida|gestante|autista|autismo|tea|pcd|deficiencia|fibromialgia|ostomizado|ostomizada|bebe|lactante|amamentando|colo|documento)\b/.test(text))
      answer += p('O texto disponível não detalha todos os beneficiários, documentos e condições. Não consigo confirmar sua situação individual a partir desse cadastro. Consulte a placa correspondente e confirme com a equipe da loja.');
    return answer + this.section('prioridade', 'Atendimento Prioritário');
  }
};

const chatModule = {
  isTyping: false,
  timer: null,
  initialMarkup: null,
  initialize() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    chatModule.initialMarkup = container.innerHTML;
    container.setAttribute('role', 'log');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-relevant', 'additions');
    const input = document.getElementById('chat-input');
    input.maxLength = 2000;
    input.setAttribute('aria-label', 'Digite sua dúvida para o Assistente MI');
    document.getElementById('chat-submit').setAttribute('aria-label', 'Enviar mensagem');
    container.addEventListener('click', event => {
      const button = event.target.closest('[data-mi-topic]');
      if (button && ['outros', 'procon', 'prioridade', 'privacidade'].includes(button.dataset.miTopic)) app.navigate(button.dataset.miTopic);
    });
    container.addEventListener('error', event => {
      if (event.target.matches && event.target.matches('img[data-mi-plate]')) {
        const message = document.createElement('p');
        message.className = 'text-xs text-text-muted mt-2';
        message.textContent = 'A imagem desta placa não pôde ser carregada. Consulte a equipe da loja.';
        event.target.replaceWith(message);
      }
    }, true);
  },
  addMessage(text, sender, isHtml = false) {
    const container = document.getElementById('chat-messages');
    const wrapper = document.createElement('div');
    wrapper.className = `flex flex-col gap-1 ${sender === 'user' ? 'items-end' : 'items-start'} w-full`;
    const bubble = document.createElement('div');
    bubble.className = sender === 'user' ? 'chat-bubble user bg-brand text-white p-3.5 rounded-2xl rounded-br-sm shadow-soft text-sm' :
      'chat-bubble bot bg-white p-3.5 rounded-2xl rounded-bl-sm shadow-soft text-sm text-text-main border border-gray-100';
    // Texto do cliente nunca é interpretado como HTML.
    if (sender !== 'user' && isHtml) bubble.innerHTML = text;
    else bubble.textContent = text;
    const label = document.createElement('span');
    label.className = `text-[10px] text-text-muted ${sender === 'user' ? 'mr-1' : 'ml-1'}`;
    label.textContent = sender === 'user' ? 'Você' : 'Assistente MI';
    wrapper.append(bubble, label);
    container.insertBefore(wrapper, document.getElementById('chat-loading'));
    if (sender === 'user') document.getElementById('chat-suggestions').style.display = 'none';
    container.scrollTop = container.scrollHeight;
  },
  setLoading(value) {
    chatModule.isTyping = value;
    document.getElementById('chat-loading').classList.toggle('active', value);
    document.getElementById('chat-submit').disabled = value;
    const container = document.getElementById('chat-messages');
    container.setAttribute('aria-busy', String(value));
    container.scrollTop = container.scrollHeight;
  },
  processAI(userText) {
    if (chatModule.isTyping) return;
    chatModule.setLoading(true);
    chatModule.timer = setTimeout(() => {
      try {
        chatModule.addMessage(assistantEngine.answer(userText), 'bot', true);
      } catch (error) {
        chatModule.addMessage('Não consegui concluir essa consulta. Tente reformular a pergunta ou acesse o tema pelo menu.', 'bot');
      } finally {
        chatModule.timer = null;
        chatModule.setLoading(false);
      }
    }, 180);
  },
  submit(text) {
    if (chatModule.isTyping) return;
    const trimmed = String(text || '').trim();
    if (!trimmed) return;
    if (trimmed.length > 2000) {
      chatModule.addMessage('Envie sua pergunta em até 2.000 caracteres.', 'bot');
      return;
    }
    document.getElementById('chat-input').value = '';
    chatModule.addMessage(trimmed, 'user');
    chatModule.processAI(trimmed);
  },
  handleSubmit(event) {
    event.preventDefault();
    chatModule.submit(document.getElementById('chat-input').value);
  },
  sendSuggested(text) { chatModule.submit(text); },
  clearChat() {
    if (!confirm('Limpar a conversa?')) return;
    clearTimeout(chatModule.timer);
    chatModule.timer = null;
    assistantEngine.reset();
    const container = document.getElementById('chat-messages');
    if (chatModule.initialMarkup !== null) container.innerHTML = chatModule.initialMarkup;
    chatModule.setLoading(false);
    document.getElementById('chat-input').value = '';
  }
};

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  setupFilters('prioridade');
  setupFilters('procon');
  setupPrivacidade();
  setupOutros();
  chatModule.initialize();
});
