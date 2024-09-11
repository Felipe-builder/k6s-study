# Módulo 1: Introdução ao K6 
## Aula 1: Smoke Testing

### Objetivos da Aula
Nesta aula, você aprenderá:
- O que é Smoke Testing.
- Como configurar um teste de smoke básico com K6.
- Quando e por que usar Smoke Testing.

---
### O que é Smoke Testing?
Smoke Testing é uma forma simples e rápida de testar o comportamento básico de um sistema. Ele serve para garantir que as funcionalidades principais de uma aplicação estejam funcionando antes de passar para testes mais extensivos. É como um "teste de saúde" do sistema.

#### Características do Smoke Testing
1. **Carga mínima**: O teste é executado com uma carga muito baixa para garantir que as funcionalidades básicas estejam operacionais.
2. **Cenário simples**: O foco está em cenários básicos, geralmente um único usuário executando ações principais.
3. **Funcionalidade core**: Testa as funcionalidades centrais da aplicação.
4. **Rápido resultado**: Fornece feedback rápido, permitindo que os desenvolvedores saibam imediatamente se há problemas críticos.
---
### Exemplo de Script de Smoke Testing com K6
Vamos criar um script de Smoke Testing básico usando o K6. Este script simula um único usuário acessando a aplicação durante 1 minuto.


```javascript
// 1. Importação do módulo HTTP do K6
import http from 'k6/http';

// 2. Configuração do teste
export const options = {
  vus: 1,          // Número de usuários virtuais
  duration: '1m',  // Duração do teste
};

// 3. Função principal de execução do teste
export default function () {
  const res = http.get('http://test.k6.io');  // Realiza uma requisição GET para a URL de teste
  console.log(`Status: ${res.status}`);      // Loga o status da resposta
}

```


#### Explicação do Script
- `vus: 1`: Define um único usuário virtual (VU) para executar o teste.
- `duration: '1m'`: Define a duração do teste como 1 minuto.
- `http.get('http://test.k6.io')`: Envia uma requisição HTTP GET para a URL especificada.
- `console.log`: Imprime o status da resposta no console para verificação.

### Como Executar o Teste
1. Salve o script acima como `smoke-test.js`.
2. Execute o comando:
    ```bash
    k6 run smoke-test.js
    ```
3. Observe os resultados no terminal para verificar se o sistema responde conforme esperado.

---
### Quando Usar Smoke Testing?
- Antes de iniciar testes mais complexos (como testes de carga ou desempenho).
- Após a implementação de novas funcionalidades para verificar se o sistema principal ainda funciona.
- Em integrações contínuas para validação rápida de mudanças.

### Conclusão
Smoke Testing é uma maneira eficaz de validar rapidamente o estado básico de uma aplicação, ajudando a identificar problemas críticos de forma antecipada.