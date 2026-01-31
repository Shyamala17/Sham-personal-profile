# Volume Demo
This demo shows Docker volume persistence.

Steps:
1. Run ./run.sh
2. Inside container: echo "Hello Shyamala" > /data/test.txt
3. Exit and restart container: docker start -ai volume_test
4. Run: cat /data/test.txt → file persists
