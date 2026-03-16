document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // CONTADOR DE CO₂ - CORRIGIDO E FUNCIONAL!
    // ==========================================
    
    // Vamos encontrar o elemento do contador de várias formas
    let contadorElement = document.getElementById('contador-co2');
    
    // Se não encontrar pelo ID, procura pela classe
    if (!contadorElement) {
        contadorElement = document.querySelector('.contador');
        console.log('Contador encontrado pela classe');
    }
    
    // Se ainda não encontrou, vamos criar um novo elemento
    if (!contadorElement) {
        console.log('Criando novo contador...');
        const container = document.querySelector('.contador-container');
        if (container) {
            contadorElement = document.createElement('div');
            contadorElement.className = 'contador';
            contadorElement.id = 'contador-co2';
            container.insertBefore(contadorElement, container.querySelector('.contador-info'));
        }
    }
    
    // AGORA SIM! Inicia o contador se o elemento existe
    if (contadorElement) {
        console.log('✅ Contador encontrado! Iniciando...');
        
        let toneladas = 0;
        // 38.1 bilhões de toneladas por ano / segundos em um ano = ~1208 toneladas/segundo
        const TAXA_POR_SEGUNDO = 1208; 
        
        // Mostra o valor inicial
        contadorElement.textContent = '0';
        
        // Função que atualiza o contador a cada segundo
        const interval = setInterval(function() {
            toneladas += TAXA_POR_SEGUNDO;
            
            // Formata o número com pontos de milhar (ex: 1.208, 2.416...)
            contadorElement.textContent = Math.round(toneladas).toLocaleString('pt-BR');
            
            // Efeito visual legal: o número pisca quando aumenta
            contadorElement.style.transform = 'scale(1.1)';
            contadorElement.style.color = '#ff4444';
            
            setTimeout(function() {
                contadorElement.style.transform = 'scale(1)';
                contadorElement.style.color = 'var(--cor-destaque)';
            }, 200);
            
        }, 1000); // 1000 milissegundos = 1 segundo
        
        // Para o contador quando sair da página (boa prática)
        window.addEventListener('beforeunload', function() {
            clearInterval(interval);
        });
        
    } else {
        console.error('❌ ERRO: Não foi possível criar o contador!');
    }
    
    // ==========================================
    // BOTÃO DO GREENWASHING - CORRIGIDO!
    // ==========================================
    const botaoSelo = document.getElementById('botao-selo');
    const dicaSelo = document.getElementById('dica-selo');

    if (botaoSelo && dicaSelo) {
        console.log('✅ Botão Greenwashing encontrado!');
        
        botaoSelo.addEventListener('click', function() {
            // Verifica se a dica está visível
            if (dicaSelo.style.display === 'block') {
                // Se estiver visível, esconde
                dicaSelo.style.display = 'none';
                botaoSelo.textContent = '🔍 Como identificar um selo falso?';
                botaoSelo.style.backgroundColor = 'var(--cor-destaque)';
                botaoSelo.style.color = 'white';
            } else {
                // Se estiver escondida, mostra
                dicaSelo.style.display = 'block';
                botaoSelo.textContent = '🙈 Esconder dica';
                botaoSelo.style.backgroundColor = '#28a745'; // Verde
                botaoSelo.style.color = 'white';
            }
            
            // Efeito de clique no botão
            botaoSelo.style.transform = 'scale(0.95)';
            setTimeout(() => {
                botaoSelo.style.transform = 'scale(1)';
            }, 200);
        });
    } else {
        console.error('❌ ERRO: Botão Greenwashing não encontrado!');
    }
    
    // ==========================================
    // BOTÃO MUDAR CORES DO SITE - CORRIGIDO!
    // ==========================================
    const botaoTema = document.getElementById('botao-tema');
    
    if (botaoTema) {
        console.log('✅ Botão Tema encontrado!');
        
        let temaAtual = 'normal'; // Começa com o tema normal
        
        botaoTema.addEventListener('click', function() {
            // Remove todos os temas possíveis
            document.body.classList.remove('tema-verde', 'tema-azul');
            
            // Alterna entre os temas
            if (temaAtual === 'normal') {
                document.body.classList.add('tema-verde');
                temaAtual = 'verde';
                botaoTema.textContent = '🌿 Tema Verde Ativado';
                botaoTema.style.background = 'linear-gradient(45deg, #28a745, #6c757d)';
            } 
            else if (temaAtual === 'verde') {
                document.body.classList.add('tema-azul');
                temaAtual = 'azul';
                botaoTema.textContent = '💧 Tema Azul Ativado';
                botaoTema.style.background = 'linear-gradient(45deg, #007bff, #6c757d)';
            } 
            else if (temaAtual === 'azul') {
                // Volta ao normal
                temaAtual = 'normal';
                botaoTema.textContent = '🎨 Mudar cores do site';
                botaoTema.style.background = 'linear-gradient(45deg, var(--cor-destaque), #ff9f9f)';
            }
            
            // Efeito de clique no botão
            botaoTema.style.transform = 'scale(0.95)';
            setTimeout(() => {
                botaoTema.style.transform = 'scale(1)';
            }, 200);
            
            // Mostra um alerta legal (opcional)
            const temas = {
                normal: '🌈 Tema original ativado!',
                verde: '🌿 Tema verde ativado! Mais sustentável!',
                azul: '💧 Tema azul ativado! Que refrescante!'
            };
            
            // Cria uma mensagem flutuante
            const mensagem = document.createElement('div');
            mensagem.textContent = temas[temaAtual] || 'Tema alterado!';
            mensagem.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${temaAtual === 'verde' ? '#28a745' : temaAtual === 'azul' ? '#007bff' : '#FF6F61'};
                color: white;
                padding: 15px 25px;
                border-radius: 50px;
                font-weight: bold;
                z-index: 1000;
                animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            `;
            
            document.body.appendChild(mensagem);
            
            // Remove a mensagem depois de 3 segundos
            setTimeout(() => {
                mensagem.remove();
            }, 3000);
        });
    } else {
        console.error('❌ ERRO: Botão Tema não encontrado!');
    }
    
    // ==========================================
    // EFEITO NOS CARDS (MUDAR COR AO CLICAR)
    // ==========================================
    const cardsInterativos = document.querySelectorAll('.card-interativo');
    
    cardsInterativos.forEach(card => {
        card.addEventListener('click', function() {
            // Remove a classe de todos os cards
            cardsInterativos.forEach(c => c.classList.remove('clicado'));
            // Adiciona a classe no card clicado
            this.classList.add('clicado');
            
            // Efeito visual de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Mostra uma mensagem com o dado do card
            const titulo = this.querySelector('h3')?.textContent || 'Card';
            console.log(`Você clicou em: ${titulo}`);
        });
    });

    // ==========================================
    // CARDS EXPANSÍVEIS (EXEMPLOS REAIS)
    // ==========================================
    const cardsExpensiveis = document.querySelectorAll('.card-expandivel');
    
    cardsExpensiveis.forEach(card => {
        card.addEventListener('click', function(e) {
            // Impede que o clique se propague se clicou em outro lugar
            if (e.target.tagName === 'BUTTON') return;
            
            this.classList.toggle('expandido');
            
            // Animação no ícone
            const icone = this.querySelector('.icone-card');
            if (icone) {
                icone.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    icone.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });

    // ==========================================
    // PILARES INTERATIVOS
    // ==========================================
    const pilares = document.querySelectorAll('.pilar-interativo');
    
    pilares.forEach(pilar => {
        pilar.addEventListener('click', function() {
            const texto = this.querySelector('h4')?.textContent || 'Pilar';
            
            // Cria uma mensagem flutuante
            const mensagem = document.createElement('div');
            mensagem.textContent = `✨ ${texto} é essencial para o equilíbrio!`;
            mensagem.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--cor-destaque);
                color: white;
                padding: 15px 30px;
                border-radius: 50px;
                font-weight: bold;
                z-index: 1000;
                animation: slideUp 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            `;
            
            document.body.appendChild(mensagem);
            
            // Remove a mensagem depois de 3 segundos
            setTimeout(() => {
                mensagem.remove();
            }, 3000);
        });
    });

    // ==========================================
    // GALERIA DE IMAGENS (MODAL)
    // ==========================================
    const itensGaleria = document.querySelectorAll('.item-galeria');
    
    itensGaleria.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img').src;
            const legenda = this.querySelector('.legenda-galeria').textContent;
            
            // Cria um modal simples
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;
            
            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                text-align: center;
            `;
            
            modalContent.innerHTML = `
                <img src="${img}" style="max-width: 100%; max-height: 80vh; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <p style="color: white; margin-top: 20px; font-size: 1.2rem;">${legenda}</p>
                <p style="color: #ccc; margin-top: 10px;">Clique em qualquer lugar para fechar</p>
            `;
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Fecha o modal ao clicar
            modal.addEventListener('click', () => {
                modal.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            });
        });
    });

    // ==========================================
    // MENU ATIVO (DESTACAR SEÇÃO ATUAL)
    // ==========================================
    const secoes = document.querySelectorAll('.secao');
    const linksMenu = document.querySelectorAll('.menu a');
    
    function destacarMenu() {
        let index = secoes.length;
        
        while (--index && window.scrollY + 100 < secoes[index].offsetTop) {}
        
        linksMenu.forEach((link) => link.classList.remove('ativo'));
        
        if (linksMenu[index]) {
            linksMenu[index].classList.add('ativo');
        }
    }
    
    window.addEventListener('scroll', destacarMenu);
    destacarMenu(); // Chama uma vez ao carregar

    // ==========================================
    // ANIMAÇÕES GLOBAIS
    // ==========================================
    
    // Adiciona animações CSS se não existirem
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes slideUp {
            from {
                transform: translate(-50%, 100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🚀 Site carregado com sucesso! Todos os botões funcionando!');
});