FROM node:18-alpine
WORKDIR /app
RUN apk update \
&& apk add --no-cache openssl\
&& rm -rf /var/lib/apt/lists/* \
&& rm -rf /var/cache/apk/*
COPY package*.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
CMD ["npm", "run", "start:dev"]
EXPOSE 3001