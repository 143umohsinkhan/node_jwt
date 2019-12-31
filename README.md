# node_jwt


# Build image
docker build -t node/api .

# Run container
docker run -p 8081:4000 --name node-api node/api
