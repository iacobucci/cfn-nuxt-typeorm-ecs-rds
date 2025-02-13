FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
RUN npm run build
CMD [ "node", ".output/server/index.mjs" ]
