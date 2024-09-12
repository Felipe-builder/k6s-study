/**
 * - Public API: Exemplo 2
 *    - Buscar crocodilo por id.
 * - Critérios:
 *    - Performance test
 *      - Ramp up 10 VU em 10s
 *      - Carga 10 VU por 10s
 *      - Ramp down 0 VU em 10s
 *    - Limites:
 *      - Requisições com sucesso > 95%
 *      - Tempo requisição p(90) < 200
 */

// 1. Inicialização
import http from 'k6/http';
import { check, sleep } from 'k6';

// 2. Configuração
export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    checks: ['rate > 0.95'],
    http_req_duration: ['p(95) < 190']
  }
}

// 3. Execução
export default function () {
  const BASE_URL = 'https://test-api.k6.io/public/crocodiles/1';
  const res = http.get(BASE_URL);

  check(res, {
    'status code 200': (r) => r.status === 200
  })

  sleep(1)
}