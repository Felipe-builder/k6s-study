/**
 * 1. Organização de teste
 * 2. Simulações mais realistas
 * 3. Cargas de trabalho paralelas ou sequenciais.
 * 4. Análise granular dos resultados
 * 
 * Options disponíveis:
 * 1. executor
 * 2. startTime
 * 3. grecefulstop
 * 4. exec
 * 5. env
 * 6. tags
 * 
 * Agrupamentos:
 *    - Por número de iterações
 *      1. shared-iterations
 *        1.1. um número fixo de VUs completa um número fixo de iterações.
 *      2. per-vu-iterations
 *        2.1. Cada VU executa um número exato de iterações.
 *        2.2. Número total de iterações: VU x Iterações.
 *    - Por número de VUs:
 *      1. constants-vus
 *        1.1. Um número fixo de VUs executar quantas requisições forem possíveis.
 *      2. ramping-vus
 *    - Por taxa de iteração
 *      1. constant-arrival-rate
 *        1.1. Número fixo de iterações iniciadas pelo k6
 *        1.2. Novas iterações iniciadas enquanto houver VUs disponíveis.
 *        1.3. Novas iterações seguindo sempre a taxa configurada.
 *      2. ramping-arrival-rate
 * 
 * 
 */

// 1. Inicialização
import http from 'k6/http';
import { group } from 'k6';

// 2. Configuração
export const options = {
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      duration: '30s',
      rate: 30,
      timeUnit: '1s',
      preAllocatedVUs: 50,
    }
  }
}

// 3. Execução
export default function () {
  group('constant-arrival-rate get all', function () {
    const res1 = http.get('https://test.k6.io/contacts.php', {
      tags: {
        type: 'get-all',
        executor: 'constant-arrival-rate'
      }
    });
  })
}
// running with  "k6 run -e BASE_URL=https://test-api.k6.io/public/crocodiles modulo2/11-env-variable.js"
// "k6 run -e BASE_URL=https://test-api.k6.io/public/crocodiles modulo2/11-env-variable.js --duration 10s --vus 10"