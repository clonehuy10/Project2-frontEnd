# Fakebook
  This website allows users to create accounts, post their awesome stories, and share them with everyone.

  You can get access to it by the link below:
  ```
  https://clonehuy10.github.io/Project2-frontEnd/
  ```

## API
-  [API repository](https://github.com/clonehuy10/Project2-backEnd/)
-  [Heroku deployed link](https://fakebook-of-pandas.herokuapp.com/)

## Technologies Used
- jQuery
- HTML
- CSS
  + Bootstraps
  + Flexbox
- Javascript
- Mongodb
  + Mongoose
  + Express
  + Cors

## Technical Description

#### Account Path
- Users are able to create new accounts to login.
- Users are able to sign in with their accounts.
- Users are able to change password or sign out after signing in.

#### Message Board
- Users are able to view all the threads on the website.
- Users are able to create new threads.
- Users are able to view specific thread they want.
- Users are able to view all the comments on the thread they are viewing.
- Users are able to create new comments to the thread they are viewing.
- Users are able to edit or delete their threads and all comments belong to those threads.
- Users are able to edit or delete their comments

## Development process
My hardest part was coming up with an idea what I should do for this project. I had come up with lots of idea but my knowledge about what I could do with Mongodb is limited, I just started to learn about it less than a week, and text was the only thing I could store using Mongodb. As you can see later in this document, I came up with simple wireframe for a message board.\
\
My first step to the project is to create the front-end part for the authentication because I am sure that I can get it done perfectly. The reason is that I want to make sure I can make connection between front end and back end, and I can get the authentication out of my way.\
\
To start with message board is very easy. I only need to create a document for threads and a subdocument for comments. The template did like 90% of the job on the back end for me. I only needed to set up the schemas for threads and comments. For the routes, I just followed the set up of the example files in the template. Then I used curl-scripts to test if everything ran perfectly.

## Wireframe
![](https://i.imgur.com/gP7i70F.png)

## Unsolved Problems
- I want to add more features for users like sorting or filtering list of threads.
- I want to add a search bar so users can search for a topic they want to find easier.

## Contributing
If you would like to fork this repo and add more to it, you will need to run these commands to get verything set up:
```
$ git clone git@github.com:clonehuy10/Project2-frontEnd.git
$ cd Project2-frontEnd
$ npm install
```
