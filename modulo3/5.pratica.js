/**
 * - Critérios:
 *    - Realizar consulta a API de listagem de crocodilos e busca por id de crocodilos.
 *    - É esperado um RPS de 200 REQ/S para a API de listagem de crocodilos durante 30s
 *    - Para buscar por id, o sistema deve atender 50 usuários onde cada usuário realiza até 20 solicitações
 *      em até 1 min.
 *        - Usuários par devem realizar a busca ao crocodilo de ID 2
 *        - Usuário ímpar devem realizar a busca ao crocodilo de ID 1
 *    - Ambos os testes devem ser executados simultanemante.
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

export function listar() {

}

export function buscar() {
  
}

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
