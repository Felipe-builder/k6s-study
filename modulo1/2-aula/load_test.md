# Módulo 1: Introdução ao K6 
## Aula 2: Load Testing

### Objetivos da Aula
Nesta aula, você aprenderá:
- O que é Load Testing.
- Como configurar testes de carga com K6.
- Quando e por que usar Load Testing.
- Os benefícios do Load Testing.

---
### O que é Load Testing?
Load Testing (Teste de Carga) é um tipo de teste de desempenho que simula uma quantidade significativa de tráfego em um sistema para avaliar como ele se comporta sob condições normais e de pico de uso. Ele ajuda a garantir que o sistema continue a funcionar corretamente quando submetido a cargas pesadas.

#### Características do Load Testing
1. **Quantidade de tráfego**: Simula muitos usuários acessando o sistema simultaneamente.
2. **Condições normais e de pico**: Testa o sistema tanto em condições normais quanto durante picos de uso.
3. **Garantir funcionamento**: Assegura que o sistema consegue lidar com a carga esperada sem falhas.
4. **Rápido resultado**: Fornece feedback rápido, permitindo que os desenvolvedores saibam imediatamente se há problemas críticos.
#### Benefícios do Load Testing
- **Aquecimento e Redimensionamento**: Permite que o sistema aqueça ou redimensione automaticamente para lidar com o tráfego.
- **Comparação de Desempenho**: Permite comparar o tempo de resposta entre os estágios de carga baixa e carga normal.
---
### Exemplo de Script de Load Testing com K6
Vamos explorar dois tipos de testes de carga usando o K6: carga constante e carga variável.

#### Carga Constante
Este exemplo simula uma carga constante de 100 usuários virtuais (VUs) por 20 minutos.
```javascript
// Importação do módulo HTTP do K6
import http from 'k6/http';

// Configuração para carga constante
export const options = {
  vus: 100,           // 100 usuários virtuais constantes
  duration: '20m',    // Duração do teste: 20 minutos
};

// Função principal de execução do teste
export default function () {
  http.get('http://test.k6.io');  // Realiza uma requisição GET para a URL de teste
}
```


#### Carga Variável
Este exemplo simula um aumento gradual de carga, mantendo 100 usuários virtuais por 10 minutos, e depois reduzindo a carga a zero.
```javascript
// Importação do módulo HTTP do K6
import http from 'k6/http';

// Configuração para carga variável
export const options = {
  stages: [
    { duration: '5m', target: 100 },  // Sobe a carga para 100 VUs em 5 minutos
    { duration: '10m', target: 100 }, // Mantém 100 VUs por 10 minutos
    { duration: '5m', target: 0 },    // Reduz a carga para 0 VUs em 5 minutos
  ],
};

// Função principal de execução do teste
export default function () {
  http.get('http://test.k6.io');  // Realiza uma requisição GET para a URL de teste
}
```


### Como Executar o Teste
1. Salve o script acima como `load-test-constant.js` e `load-test-variable.js`.
2. Execute o comando para carga constante:
    ```bash
    k6 run load-test-constant.js
    ```
3. Execute o comando para carga variável:
    ```bash
    k6 run load-test-variable.js
    ```
4. Observe os resultados no terminal para verificar se o sistema responde conforme esperado.


---
### Quando Usar Stress Testing?
- Para validar a escalabilidade e estabilidade do sistema sob condições de uso esperado e picos de tráfego.
- Antes de lançamentos de produtos ou grandes campanhas para garantir que o sistema possa suportar o aumento no tráfego.
- Regularmente, para identificar problemas de desempenho que possam surgir com o tempo.

### Conclusão
Load Testing é uma prática essencial para qualquer sistema que espera receber uma quantidade significativa de tráfego. Ele ajuda a garantir que seu sistema não só lide com cargas normais de trabalho, mas também com picos de uso sem comprometer a performance ou disponibilidade