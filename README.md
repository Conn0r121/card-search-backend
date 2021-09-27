# TL:DR
This is a nodejs backend for a card searching website that I am working on - it is currently in its basic implementation, but will hopefully become cooler as time goes on.

# Development Environment
Node v14.17.6

# Enrironmental Variables
This project is made with the assumption that the user has a mongodb database available, local or otherwise.  
My current implementation is using the mongodb atlas cloud server with a shared cluster, find more information about how to set that up [here](https://www.mongodb.com/cloud/atlas)  

List of environmental variables:
> DATABASE_URI = YOUR_DATABASE_URI_HERE


# Todo
* json file -> mongodb atlas function
* timed job to grab files from scryfall api and add them to mongodb atlas
* add additional params to current card schema
* frontend
* handle environmental variables (db name)
* write competent readme to allow for users to replicate this
* build api
* tests
