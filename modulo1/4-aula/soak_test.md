# Módulo 1: Introdução ao K6 
## Aula 3: Soak Testing

### Objetivos da Aula Soak Testing
Nesta aula, você aprenderá:
- O que é ue é Soak Testing. Testing.
- Como configurar e executar Soak Testing com K6.
- As expectativas e interpretações dos resultados do Soak Testing.

---
### O que é Soak Testing?
Soak Testing, ou teste de resistência, é um teste de desempenho que verifica a confiabilidade do sistema ao longo de períodos prolongados. Ele é projetado para identificar problemas de desempenho, vazamentos de memória, falhas de recurso e outros problemas que só aparecem após um uso contínuo e prolongado.


#### Características do Soak Testing
1. **Confiabilidade a longo prazo**: Avalia se o sistema mantém a estabilidade e o desempenho ao longo de um período prolongado.
2. **Detecção de bugs persistentes**: Verifica a presença de bugs ou vazamentos de memória que podem surgir com o tempo.
3. **Uso de recursos**: Certifica-se de que o sistema não consome recursos a ponto de causar falhas, como esgotar espaço em disco ou memória.

#### Expectativas ao Realizar Soak Testing
1. **Estabilidade**: O sistema deve continuar funcionando corretamente durante todo o período do teste sem reinicializações inesperadas ou falhas.
2. **Uso eficiente de recursos**: O teste ajuda a garantir que recursos como banco de dados, armazenamento de logs e serviços externos sejam gerenciados corretamente, sem falhas devido ao uso prolongado.
3. **Identificação de condições de corrida**: Problemas esporádicos, como condições de corrida, podem ser detectados e corrigidos.

---
### Exemplo de Script de Soak Testing com K6
Vamos criar um script que simula a execução de um Soak Testing, avaliando o desempenho do sistema ao longo de um período de 4 horas.
```javascript
// Importação do módulo HTTP do K6
import http from 'k6/http';

// Configuração para Soak Testing
export const options = {
  stages: [
    { duration: '2m', target: 400 },   // Escala para 400 VUs em 2 minutos
    { duration: '3h56m', target: 400 }, // Mantém 400 VUs por 3 horas e 56 minutos
    { duration: '2m', target: 0 },      // Desce para 0 VUs em 2 minutos
  ],
};

// Função principal de execução do teste
export default function () {
  http.get('http://test.k6.io'); // Realiza uma requisição GET para a URL de teste
}
```

### Como Executar o Soak Test
1. Salve o script acima como `soak-test.js`
2. Execute o comando para iniciar o teste:
    ```bash
    k6 run soak-test.js
    ```
3. Durante o teste, monitore o comportamento do sistema para identificar qualquer degradação de desempenho, vazamento de recursos, ou falhas que possam surgir durante o período prolongado de carga.

---
### Quando Usar Soak Testing?
- Quando você precisa verificar a confiabilidade e a estabilidade do sistema ao longo de um período prolongado de uso.
- Para garantir que o sistema não sofra de vazamentos de memória ou esgotamento de recursos críticos.
- Para validar que o sistema consegue lidar com cargas sustentadas de tráfego sem falhas ou degradação significativa.

### Conclusão
Soak Testing é fundamental para garantir que seu sistema pode operar de forma estável e eficiente ao longo de períodos prolongados, mantendo o desempenho e a confiabilidade esperados. Esse tipo de teste ajuda a identificar problemas que podem não ser detectados em testes de carga de curta duração, como vazamentos de memória e problemas de recursos.
