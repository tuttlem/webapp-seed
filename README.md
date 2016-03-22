# Webapp seed project

This is a barebones web application project structure that will get your development bootstrap underway. The focus of this structure is about getting `npm`, `gulp` and `bower` up and running without much effort. Complexity of the run environment has also been offloaded to a `run` script that will fire up disposable docker containers. This is so that the developer is not expected to install any extra dependencies on their host; just docker..

## Getting started

After cloning this repository, just copy it into a new folder that'll be your project. 

```
$ cp -R webapp-seed/ my-project/
$ cd my-project
$ rm -Rf .git
```

`npm` should take care of you from there.

```
$ ./run npm install --unsafe-perm
$ ./run npm start
```

Your web application should now be available at [http://localhost:3000/](http://localhost:3000/).

As a `postinstall` script from `npm`, the default `gulp` action is invoked which will prepare your application into the `public` folder.

## Deployment

Once you've finished development of your web application, a `Dockerfile` has been included with this seed project that will host your site using [nginx](http://nginx.org/en/). A full standard build from scratch should look like this:

### Building

```
# install any dependencies listed by the project
$ ./run npm install --unsafe-perm

# build the application
$ ./run node_modules/.bin/gulp build

# build the docker container
$ docker build -t my-company/my-app:latest .
```

### Running

Now that you've created your container and it's built on your docker host, you can start up a copy of your web application as a daemon:

```
$ docker run --name my-app1 -d -p 9000:80 my-company/my-app:latest
```

Alternatively, you can run the application in the foreground just to see that it runs ok. We can make this one disposable as well, so that when you stop the container, it'll actually destroy it.

```
$ docker run -ti --rm -p 9000:80 my-company/my-app:latest
```

