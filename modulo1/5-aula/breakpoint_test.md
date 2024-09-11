# Módulo 1: Introdução ao K6 
## Aula 3: Breakpoint Testing

### Objetivos da Aula Breakpoint Testing
Nesta aula, você aprenderá:
- O que é Breakpoint Testing.
- Quando executar Breakpoint Testing.
- As considerações antes de realizar Breakpoint Testing.
- Como configurar e executar Breakpoint Testing com K6.


---
### O que é Breakpoint Testing?
Breakpoint Testing é uma técnica usada para identificar os limites do seu sistema, ou seja, até onde ele consegue operar corretamente sob uma carga crescente antes de começar a falhar ou degradar o desempenho. Esse tipo de teste é crucial para entender os pontos fracos e os limites operacionais do sistema, permitindo ajustes e melhorias.

#### Características do Breakpoint Testing
1. **Ajustar/Cuidar de pontos fracos do sistema**: Avaliar os limites do sistema para identificar áreas que precisam ser reforçadas.
2. **Planejamento de correção**: Ajuda a planejar correções para sistemas com limites baixos de utilização.
3. **Avaliação dos Limites**: Busca entender qual é o ponto de ruptura do sistema em termos de capacidade de usuários, throughput, ou qualquer outra métrica de interesse.

### Quando Usar Breakpoint Testing?
- **Mudanças significativas**: Após alterações substanciais na base de código ou na infraestrutura.
- **Consumo elevado de recursos**: Quando o sistema começa a mostrar sinais de consumo elevado de recursos.
- **Crescimento contínuo da carga**: Quando há um aumento contínuo no uso ou na carga do sistema, tornando essencial saber seus limites operacionais.

#### Considerações Antes de Realizar o Breakpoint Testing
1. **Elasticidade da Nuvem**: Certifique-se de que o teste está avaliando os limites do sistema, e não os da infraestrutura de nuvem (ex: escalabilidade automática).
2. **Carga Gradual**: Aumente a carga gradualmente para entender com precisão os limites do sistema.
3. **Teste Iterativo**: O Breakpoint Testing é um teste de ciclo iterativo, o que significa que deve ser ajustado e repetido conforme necessário.
4. **Interrupção**: Prepare-se para interrupções manuais ou automáticas caso o sistema falhe durante o teste.

#### Pré-requisitos para Breakpoint Testing
- O sistema deve ter sido aprovado em outros tipos de testes de carga e estresse para garantir que já é resiliente sob condições normais e extremas.

---
### Exemplo de Script de Breakpoint Testing com K6
Aqui está um exemplo de como configurar um teste de breakpoint usando o K6:

```javascript
// Importa o módulo HTTP e a função sleep do K6
import http from 'k6/http';
import { sleep } from 'k6';

// Configuração do Breakpoint Testing
export const options = {
  executor: 'ramping-arrival-rate',  // Executor que aumenta a carga conforme o desempenho do sistema
  stages: [
    { duration: '2h', target: 20000 },  // Aumenta lentamente a carga até um nível extremamente alto
  ],
};

// Função principal do teste
export default function () {
  // Faz uma requisição GET ao endpoint de teste
  const urlRes = http.get('https://test-api.k6.io');

  // Pausa de 1 segundo entre as requisições para simular o comportamento de usuários reais
  sleep(1);
}
```

### Como Executar o Breakpoint Test
1. Salve o script acima como `breakpoint-test.js`
2. Execute o comando para iniciar o teste:
    ```bash
    k6 run breakpoint-test.js
    ```
3. Durante o teste, monitore o comportamento do sistema para identificar onde ocorrem falhas ou degradação significativa de desempenho. Esse teste ajuda a ajustar e preparar o sistema para suportar cargas extremas de maneira mais eficiente.

---


### Conclusão
O Breakpoint Testing é uma ferramenta essencial para identificar os limites do seu sistema e para garantir que ele pode operar sob condições extremas de carga. Ao realizar esses testes, você pode antecipar problemas e implementar soluções antes que eles afetem os usuários finais.

