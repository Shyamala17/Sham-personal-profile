# Docker Demo Proof

## Volume Persistence
- Created volume `demo_volume`
- Wrote file `test.txt` inside `/data`
- Restarted container → file persisted

## Network Communication
- Created custom bridge network `demo_net`
- Containers `app1` and `app2` can ping each other
