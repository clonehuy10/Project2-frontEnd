# Fakebook
  This website allows users to create accounts, post their awesome stories, and share them with everyone.

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

## API
```
API repository: https://github.com/clonehuy10/Project2-backEnd
Heroku deployed link: https://fakebook-of-pandas.herokuapp.com/
```

## Development process
My hardest part was coming up with an idea what I should do for this project. I had come up with lots of idea but my knowledge about what I could do with Mongodb is limited, I just started to learn about it less than a week, and text was the only thing I could store using Mongodb. As you can see later in this document, I came up with simple wireframe for a message board.\
\
My first step to the project is to create the front-end part for the authentication because I am sure that I can get it done perfectly. The reason is that I want to make sure I can make connection between front end and back end, and I can get the authentication out of my way.\
\
To start with message board is very easy. I only need to create a document for threads and a subdocument for comments. The template did like 90% of the job on the back end for me. I only needed to set up the schemas for threads and comments. For the routes, I just followed the set up of the example files in the template. Then I was done with the back-end.\
\
Then I moved on to the front-end. However, before starting to write any code, I went to the big names like Facebook, Instargram, Reddit, ...etc to get the idea how a message board should work. I came up with an idea that I would let users to sign up and sign in first, then they could view all of the threads on the site; after that, they could dive into which thread they felt intersting in and left a comment for it. When I had a clear idea how I should build the site, I knew I could start on coding my site.\
\
The first part I worked on was creating a new threads. I started with a form on html where users could put in the title and the cotent they would want for their threads. Because I had experience working with form when doing the authentication, I got it done very quick. While doing the creating, I removed the requireToken for Index request on the back-end, so that I could view all the datas I had on my site. After done creating the threads, I also got creating comments done because they were very similar to each other.
\
The second part I worked on was editting. I also started with a form on html because I got comfortable using the form to interact with users. And I didn't think about using the same form I had for creating because I didn't know about how to use 2 buttons on 1 form and they could trigger different functions, but I knew how to do it later while helping my classmates after my project was done. And this part was similar to changing the password in the authentication, so that I got through this quite easy. I also got the deleting threads and comments because they were very close, deleting worked exactly like editing without passing in data.\
\
Next, I worked on the index feature. At first everything was smooth, I could get all the threads and their comments showing on my site. Things started to get complicated when I tried to create edit and delete buttons with specific id for each thread and each comment, so that I could edit or delete with just one click, before I had to grab the id of the thread or the comment I want to delete. I couldn't get my event listener to work when targeting the edit and delete buttons. I didn't know why but I knew where I could find the answer. I remembered one of my classmates had something similar to this one on his first project, I reached out to him right the way and I got the answer. It was event delegation, because the buttons was created with javascript, they didnt exist when loading the site, and the event listener couldn't target them. The solution was making an empty div on html to wrapping around the new contents were created by javascript. My problem was solved very quickly.\
\
After that, I spent 2 days to learn about bootstrap especially modal, and use it to polish my site.

## Wireframe
![](https://i.imgur.com/gP7i70F.png)

## Unsolved Problems
- I want to learn how to store video, sound, and image to mongodb. Right now users can only put text or they have to use html to put video to my site.
- I want to add more features for users like sorting or filtering list of threads.
- I want to add a search bar so users can search for a topic they want to find easier.

## Contributing
If you would like to fork this repo and add more to it, you will need to run these commands to get verything set up:
```
$ git clone git@github.com:clonehuy10/Project2-frontEnd.git
$ cd Project2-frontEnd
$ npm install
```
