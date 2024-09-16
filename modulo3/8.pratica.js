// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '60s',
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
// RODAR o comando 'K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=relatorio.html k6 run modulo3/8.pratica.js'
// Acomanhar por "http://localhost:5665/"
