/**
 * - Registration e auth: Registro
 *    - Realizar o registro de um novo usuário.
 * - Critérios:
 *    - Performance test
 *      - Carga 10 VU por 10s
 *    - Limites:
 *      - Requisição com falha inferior a 1%
 *      - Duração da requisição p(95) < 500
 *      - Requisições com sucesso > 95%
 */

/// 1. Inicialização
import http from 'k6/http';
import { check, sleep } from 'k6';

// 2. Configuração
export const options = {
  stages: [
    { duration: '10s', target: 10 }, // Ramp-up para 10 VUs em 10 segundos
  ],
  thresholds: {
    checks: ['rate > 0.95'], // Checks que passam devem ser > 95%
    http_req_failed: ['rate < 0.01'], // Requisições falhadas devem ser < 1%
    http_req_duration: ['p(95) < 500'], // 95% das requisições devem ter duração < 500ms
  },
};

// 3. Execução
export default function () {
  const BASE_URL = 'https://test-api.k6.io';
  const USER = `${Math.random()}@mail.com`;
  const PASS = 'user123';

  const res = http.post(`${BASE_URL}/user/register/`, {
    username: USER,
    first_name: "crocodilo",
    last_name: "dino",
    email: USER,
    password: PASS,
  });

  check(res, {
    'status code 201': (r) => r.status === 201,
  });

  sleep(1);
}
