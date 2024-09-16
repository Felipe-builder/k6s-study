/**
 * - Registration e auth: login
 *    - Realizar o login de um novo usuário.
 * - Critérios:
 *    - Stress test
 *      - Ramp up 5 VU em 5s
 *      - Carga 5 VU por 5s
 *      - Ramp up 50 VU em 2s
 *      - Carga de 50 VU em 2s
 *      - Ramp down 0 VU em 5s
 *    - Limites:
 *      - Requisição com falha inferior a 1%
 */

/// 1. Inicialização
import http from 'k6/http';
import { check, sleep } from 'k6';

// 2. Configuração
export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '5s', target: 5 },
    { duration: '2s', target: 50 },
    { duration: '2s', target: 50 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate < 0.01'], // Requisições falhadas devem ser < 1%
  },
};

// 3. Execução
export default function () {
  const BASE_URL = 'https://test-api.k6.io';
  const USER = `${Math.random()}@mail.com`;
  const PASS = 'user123';

  console.log(USER)

  const res = http.post(`${BASE_URL}/user/register/`, {
    username: USER,
    password: PASS,
  });

  check(res, {
    'status code 200': (r) => r.status === 200,
    'token genereted': (r) => r.json('acess') !== ''
  });

  sleep(1);
}
