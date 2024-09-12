/**
 * - Public API: Exemplo 1
 *    - Buscar todos os crocodilos.
 * - Critérios:
 *    - Smoke test
 *      - 1 usuários por 30 segundos
 *    - Limites:
 *      - Requisições com sucesso > 99%
 */

// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '3s',
  thresholds: {
    checks: ['rate > 0.99']
  }
}

// 3. Execução
export default function () {
  const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';
  const res = http.get(BASE_URL);

  check(res, {
    'status code 200': (r) => r.status === 200
  })
}