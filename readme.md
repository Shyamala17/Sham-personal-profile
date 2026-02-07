# Monitoring Stack (Prometheus + Grafana)

## Setup
- Run `docker-compose up -d`
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000

## Dashboards
- CPU, Memory, Disk usage panels
- Exported JSON: `system-dashboard.json`

## Insights
- CPU spikes observed during stress test
- Memory usage grows with load
- Disk usage stable unless file writes occur
