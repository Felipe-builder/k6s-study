// 1. Inicialização
import http from 'k6/http';
import { check, group } from 'k6';

// 2. Configuração
export const options = {
  vus: 4,
  duration: '5s',
  thresholds: {
    'http_req_duration{group:::request crocodiles by id}': ['p(95) < 500']
  }
}
// 3. Execução
export default function () {
  group('request all crocodiles', function () {
    const res1 = http.get('https://test-api.k6.io/public/crocodiles');
    check(res1, {
      'status code is 200 get all': (r) => r.status === 200
    })
  })

  group('request crocodiles by id', function() {
    const res2 = http.get('https://test-api.k6.io/public/crocodiles/1/');
    check(res2, {
      'status code is 200 get id': (r) => r.status === 200
    })
  })

}


// running with "k6 run modulo2/7-thresholds.js" 