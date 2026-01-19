📘 README – Network Analysis Lab
📌 Project Overview
This project demonstrates fundamental networking concepts through practical exercises performed in Linux CLI, Windows CMD, and PowerShell. The tasks simulate real-world scenarios such as IP addressing, connectivity testing, DNS resolution, path tracing, and network failure simulation.

The final deliverable is a Network Analysis Report documenting commands, outputs, and observations.

🛠️ Lab Tasks
Understand IP Addressing

Commands: ip a, ifconfig, ipconfig, Get-NetIPAddress

Purpose: Identify system IP, subnet mask, and gateway.

Test Connectivity (Ping)

Command: ping 8.8.8.8

Purpose: Verify network connectivity and measure latency.

Inspect Open Ports & Services

Commands: netstat, ss, Get-NetTCPConnection

Purpose: View active connections and listening services.

DNS Resolution

Commands: nslookup, dig, Resolve-DnsName

Purpose: Translate domain names into IP addresses.

Trace Network Path

Commands: traceroute, tracert

Purpose: Identify hops and latency between source and destination.

Simulate Network Failure

Commands:

Linux: ip link set eth0 down

CMD: netsh interface set interface "Ethernet" admin=disable

PowerShell: Disable-NetAdapter -Name "Ethernet"

Purpose: Test system behavior during interface failure and recovery.

Document Observations

Record commands, expected vs actual outputs, anomalies, and screenshots.

📑 Deliverables
Network Analysis Report (Word/PDF)

Introduction

Lab Tasks & Observations

Screenshots of outputs

Conclusion

🎯 Final Outcome
By completing this lab, the intern:

Understands how systems communicate over networks.

Gains hands-on experience with IP addressing, DNS, connectivity, and routing.

Learns to simulate and recover from network failures.

Develops documentation skills for technical reporting.