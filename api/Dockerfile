FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN ["npm", "run", "build"]
RUN ["npx", "prisma", "generate"]
CMD ["npm", "run", "start:dev"]
EXPOSE 3001