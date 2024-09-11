# Curso de Testes de Performance com k6

Bem-vindo ao curso de Testes de Performance com k6! Neste curso, você aprenderá sobre diferentes tipos de testes de performance, como Smoke Testing, Load Testing, Stress Testing, Spike Testing, Soak Testing e Breakpoint Testing, usando a ferramenta k6. O objetivo é proporcionar um entendimento profundo sobre como realizar e analisar testes de performance para garantir a estabilidade e a escalabilidade de suas aplicações.

## Estrutura do Curso

### Pré-requisitos
- Instalar o k6: 
  - Use a documentação: https://grafana.com/docs/k6/latest/set-up/install-k6/


### Módulo 1: Introdução ao k6
- **O que é k6?**
- **Configuração Inicial**
- **Primeiros Passos**

### Módulo 2: Tipos de Testes de Performance

#### Aula 1: Smoke Testing
- **Objetivo:** Avaliar se as funcionalidades principais da aplicação estão funcionando após uma nova implementação.
- **Script:** [`modulo1/smoke-testing.js`](modulo1/smoke-testing.js)
- **Descrição:** Teste com carga mínima e duração reduzida para verificar funcionalidades básicas.

#### Aula 2: Load Testing
- **Objetivo:** Avaliar o comportamento do sistema sob diferentes volumes de tráfego.
- **Script 1:** [Carga Constante](modulo2/load-testing-constant.js)
- **Script 2:** [Carga Variável](modulo2/load-testing-variable.js)
- **Descrição:** Teste de carga para garantir que o sistema funcione bem sob condições normais e de pico.

#### Aula 3: Stress Testing e Spike Testing
- **Objetivo:** Avaliar o comportamento do sistema em condições extremas e picos repentinos de tráfego.
- **Script Stress Testing:** [`modulo3/stress-testing.js`](modulo3/stress-testing.js)
- **Script Spike Testing:** [`modulo3/spike-testing.js`](modulo3/spike-testing.js)
- **Descrição:** Teste para determinar a capacidade máxima e a recuperação do sistema após picos de carga.

#### Aula 4: Soak Testing
- **Objetivo:** Avaliar a confiabilidade do sistema durante longos períodos de tempo.
- **Script:** [`modulo4/soak-testing.js`](modulo4/soak-testing.js)
- **Descrição:** Teste para identificar vazamentos de memória e problemas de armazenamento ao longo do tempo.

#### Aula 5: Breakpoint Testing
- **Objetivo:** Identificar limites e pontos fracos do sistema.
- **Script:** [`modulo5/breakpoint-testing.js`](modulo5/breakpoint-testing.js)
- **Descrição:** Teste para entender como o sistema se comporta sob condições extremas e verificar a recuperação.

### Prova 1
- **Perguntas de Múltipla Escolha:** [Prova 1](prova1.md)
- **Objetivo:** Testar o conhecimento adquirido durante o curso.

## Como Executar os Testes

1. **Instale o k6:** Siga as instruções no [site oficial do k6](https://k6.io/docs/getting-started/installation).
2. **Execute o Script:** Utilize o comando `k6 run <script.js>` para rodar os testes de performance.

## Contribuindo

Se você deseja contribuir para este curso, fique à vontade para abrir um Pull Request. Qualquer feedback é bem-vindo!

## Licença

Este curso está licenciado sob a [MIT License](LICENSE).

---

**Obrigado por participar do curso de Testes de Performance com k6!** Esperamos que este material seja útil e ajude a melhorar a performance das suas aplicações.
