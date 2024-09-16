/**
 * Realizar consulta a API de listagem de crocodilos e busca por id de crocodils
 * - Critérios:
 *    - É esperado um RPS de 200 REQ/S para a API de listagem de crocodilos durante 30s
 *    - Para buscar por id, o sistema deve atender 50 usuários onde cada usuário realiza até 20 solicitações
 *      em até 1 min.
 *        - Usuários par devem realizar a busca ao crocodilo de ID 2
 *        - Usuário ímpar devem realizar a busca ao crocodilo de ID 1
 *    - Ambos os testes devem ser executados simultanemante.
 *    https://test-api.k6.io/public/
 */

/// 1. Inicialização
import http from 'k6/http';
import { check, sleep } from 'k6';

// 2. Configuração
export const options = {
  scenarios: {
    listar: {
      executor: 'constant-arrival-rate',
      exec: 'listar',
      duration: '30s',
      rate: 200,
      timeUnit: '1s',
      preAllocatedVUs: 150,
      gracefulStop: '10s',
      tags: { test_type: 'listagem_de_crocodilos'}
    },
    buscar: {
      executor: 'per-vu-iterations',
      exec: 'buscar',
      vus: 50,
      iterations: 20,
      maxDuration: '1m',
      gracefulStop: '10s',
      tags: { test_type: 'busca_de_crocodilos'}
    }
  }
};

export function listar() {
  http.get(__ENV.BASE_URL + 'crocodiles')
}

export function buscar() {
  if (__VU % 2 === 0) {
    http.get(__ENV.BASE_URL + 'crocodiles/2')
  } else {
    http.get(__ENV.BASE_URL + 'crocodiles/1')
  }
  
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
