FROM node:latest

# creating project folder
RUN mkdir /treval

# setting work directory
WORKDIR /treval

# copying over required npm dependencies
COPY package.json /treval/

RUN npm install

# copy all files 
COPY . /treval/

EXPOSE 3000

CMD ["npm", "start"]