#!/bin/bash

#THIS SCRIPT IS NOT VERY ROBUST, THE DIR STRUCTURE NEEDS TO BE CORRECT
#AND THE GIT REPO NEEDS TO ALREADY HAVE BEEN CLONED

# stop the database
sudo service mongod stop

# delete the rendezvous database
sudo rm /var/lib/mongodb/rendezvous*

# start the database
sudo service mongod start


#change into src directory
cd /opt/Rendezvous/nodejs/Rendezvous.node

#update git
echo 'DEPLOY: pulling latest from git repo...'
git pull

#pull down any new npm packages
echo 'DEPLOY: npm install...'
cd Rendezvous.node
npm install 

#copy the upstart scripts to the correct location
#echo 'DEPLOY: copying upstart scripts...'
#sudo cp -r nodejs /etc/init

#restart services
echo 'DEPLOY: restarting apps via upstart scripts...'
sudo stop nodejs/rendezvous-node-website
#sudo stop node-upstart/order-processor

sudo start nodejs/rendezvous-node-website
#sudo start node-upstart/order-processor
