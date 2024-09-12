// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '3s',
  thresholds: {
    http_req_failed: ['rate < 0.01'],
    http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true, delayAbortEval: '10s' }],
    checks: ['rate > 0.99']
  }
}
// 3. Execução
export default function() {
  const res = http.get('http://test.k6.io');
  
  check(res, {
    'status code is 200': (r) => r.status === 200
  })
}


// running with "k6 run modulo2/7-thresholds.js" 