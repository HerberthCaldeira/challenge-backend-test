# shawand partners - backend test 

### Technologies
* [Docker] 
* [node.js] 
* [Express] 
* [jest] 

### Setup
To run this porject, clone the repository and run everything with docker-compose

```sh
git clone https://Herberthcaldeira@bitbucket.org/Herberthcaldeira/challenge-backend-test.git
cd challenge-backend-test
sudo docker-compose up
```
Go to the browser and access the url
```sh
127.0.0.1:3000
```
### To run tests

```sh
rm -rf node_modules
npm install
npm run test
```


[jest]: <https://jestjs.io/>
[Docker]: <https://www.docker.com/>
[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>