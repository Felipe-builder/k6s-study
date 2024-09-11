import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

// Define uma métrica para monitorar o tempo de resposta
let responseTime = new Trend('response_time');

export let options = {
    stages: [
        { duration: '1m', target: 10 },  // sobe para 10 usuários em 1 minuto
        { duration: '3m', target: 50 },  // aumenta para 50 usuários em 3 minutos
        { duration: '3m', target: 100 }, // aumenta para 100 usuários em 3 minutos
        { duration: '2m', target: 150 }, // aumenta para 150 usuários em 2 minutos
        { duration: '5m', target: 200 }, // sustenta 200 usuários por 5 minutos (ponto de breakpoint)
        { duration: '3m', target: 0 },   // diminui para 0 usuários em 3 minutos
    ],
    thresholds: {
        'response_time': ['p(95)<500'], // Define um threshold de que 95% dos tempos de resposta devem ser menores que 500ms
    },
};

export default function () {
    // Substitua com a URL do endpoint que deseja testar
    let res = http.get('https://seu-endpoint.com/api');
    responseTime.add(res.timings.duration); // Adiciona o tempo de resposta à métrica

    // Pausa de 1 segundo entre as requisições para simular usuários reais
    sleep(1);
}