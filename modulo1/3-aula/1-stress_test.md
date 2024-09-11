# Módulo 1: Introdução ao K6 
## Aula 3: Stress Testing e Spike Testing

### Objetivos da Aula Stress Testing
Nesta aula, você aprenderá:
- O que é Stress Testing.
- Como configurar testes de stress com K6.
- Quando e por que usar Stress Testing.
- As expectativas ao realizar um Stress Testing.

### Objetivos da Aula Spike Testing
Nesta aula, você aprenderá:
- O que é Spike Testing.
- Como configurar testes de Spike com K6.
- Quando e por que usar Spike Testing.
- As expectativas ao realizar um Spike Testing.

---
### O que é Stress Testing?
Stress Testing é um teste de desempenho que verifica como o sistema se comporta sob carga máxima e condições extremas, para identificar o ponto de ruptura e testar a capacidade de recuperação.

#### Características do Stress Testing
1. **Comportamento em condições extremas**: Avalia como o sistema responde sob carga máxima ou condições além do esperado.
2. **Capacidade máxima**: Determina o número máximo de usuários ou taxa de transferência que o sistema pode suportar.
3. **Ponto de ruptura**: Identifica o ponto em que o sistema falha ou não consegue mais atender aos requisitos de desempenho.
4. **Recuperação**: Verifica se o sistema se recupera sem intervenção manual após o término do teste de stress.

#### Expectativas ao Realizar Stress Testing
- **Rapidez no redimensionamento**: Avalia a rapidez com que os mecanismos de dimensionamento automático reagem ao aumento de carga.
- **Gestão de falhas**: Observa se ocorrem falhas durante eventos de dimensionamento e como o sistema lida com essas falhas.

---
### O que é Spike Testing?
Spike Testing é um tipo de teste de carga que submete o sistema a picos repentinos de tráfego para avaliar como ele lida com essas variações abruptas e se consegue se recuperar após o pico de carga.

#### Características do Spike Testing
1. **Comportamento sob aumento repentino**: Avalia como o sistema responde a um aumento brusco e momentâneo no tráfego de usuários.
2. **Recuperação após o pico**: Verifica se o sistema consegue se estabilizar e voltar ao funcionamento normal quando o tráfego retorna aos níveis normais ou diminui.

#### Expectativas de Spike Testing
1. **Excelente** - O sistema mantém o desempenho ideal e não é degradado durante o pico de tráfego.
2. **Bom** - O sistema fica um pouco mais lento, mas não apresenta erros durante o pico.
3. **Insatisfatório** - O sistema apresenta erros durante o aumento de tráfego, mas se recupera quando o tráfego diminui.
4. **Ruim** - O sistema falha, trava e não se recupera mesmo após o término do evento de tráfego elevado.

---
### Exemplo de Script de Stress Testing com K6
Vamos criar um exemplo de teste de stress que aumenta gradualmente o número de usuários virtuais (VUs) para observar o comportamento do sistema sob carga crescente.
```javascript
// Importação do módulo HTTP do K6
import http from 'k6/http';

// Configuração para Stress Testing
export const options = {
  stages: [
    { duration: '2m', target: 100 },  // Sobe para 100 VUs em 2 minutos
    { duration: '5m', target: 100 },  // Mantém 100 VUs por 5 minutos
    { duration: '2m', target: 200 },  // Sobe para 200 VUs em 2 minutos
    { duration: '5m', target: 200 },  // Mantém 200 VUs por 5 minutos
    { duration: '2m', target: 300 },  // Sobe para 300 VUs em 2 minutos
    { duration: '5m', target: 300 },  // Mantém 300 VUs por 5 minutos
    { duration: '2m', target: 400 },  // Sobe para 400 VUs em 2 minutos
    { duration: '5m', target: 400 },  // Mantém 400 VUs por 5 minutos
    { duration: '10m', target: 0 },   // Reduz para 0 VUs em 10 minutos
  ],
};

// Função principal de execução do teste
export default function () {
  http.get('http://test.k6.io');  // Realiza uma requisição GET para a URL de teste
}
```

### Como Executar o Stress Test
1. Salve o script acima como `stress-test.js`
2. Execute o comando para iniciar o teste:
    ```bash
    k6 run stress-test.js
    ```
3. Observe os resultados no terminal para verificar se o sistema responde conforme esperado.

---
### Exemplo de Script de Spike Testing com K6
Vamos criar um script que simula um aumento repentino de tráfego, avaliando o desempenho do sistema durante e após o pico.
```javascript
// Importação do módulo HTTP do K6
import http from 'k6/http';

// Configuração para Spike Testing
export const options = {
  stages: [
    { duration: '10s', target: 100 },   // Aumenta para 100 VUs em 10 segundos
    { duration: '1m', target: 100 },    // Mantém 100 VUs por 1 minuto
    { duration: '10s', target: 1400 },  // Aumenta bruscamente para 1400 VUs em 10 segundos
    { duration: '3m', target: 1400 },   // Mantém 1400 VUs por 3 minutos
    { duration: '10s', target: 100 },   // Reduz rapidamente para 100 VUs em 10 segundos
    { duration: '3m', target: 100 },    // Mantém 100 VUs por 3 minutos
    { duration: '10m', target: 0 },     // Reduz para 0 VUs em 10 minutos, permitindo recuperação
  ],
};

// Função principal de execução do teste
export default function () {
  http.get('http://test.k6.io');  // Realiza uma requisição GET para a URL de teste
}
```

### Como Executar o Spike Test
1. Salve o script acima como `spike-test.js`
2. Execute o comando para iniciar o teste:
    ```bash
    k6 run spike-test.js
    ```
3. Observe o comportamento do sistema durante os picos de tráfego e na fase de recuperação, avaliando as métricas de desempenho para identificar como ele lida com as variações repentinas de carga.

---
### Quando Usar Stress Testing?
- Quando você precisa avaliar o comportamento do sistema sob carga extrema e identificar pontos de falha.
- Para testar a resiliência e capacidade de recuperação do sistema.
- Antes de grandes eventos que possam gerar picos inesperados de tráfego.

### Conclusão de Stress Testing
Stress Testing é uma ferramenta crítica para identificar os limites do seu sistema e garantir que ele possa se recuperar de falhas sem intervenção manual. Isso é essencial para manter a confiabilidade e disponibilidade do serviço mesmo em condições adversas.

### Quando Usar Spike Testing?
- Quando você precisa testar a resiliência do sistema a aumentos súbitos de tráfego, como em lançamentos de produtos ou promoções.
- Para avaliar a capacidade do sistema de se recuperar sem intervenção manual após uma sobrecarga repentina.

### Conclusão de Spike Testing
Spike Testing é crucial para garantir que o sistema pode lidar com picos inesperados de tráfego sem degradação significativa no desempenho ou falhas catastróficas. Com isso, você pode avaliar não só a robustez do sistema, mas também a eficácia dos mecanismos de recuperação e escalabilidade automática.

----