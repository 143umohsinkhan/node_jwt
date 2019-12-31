FROM  node as Build
WORKDIR /Build
COPY . .
RUN npm install
EXPOSE 4000
ENTRYPOINT ["node","index.js"]
