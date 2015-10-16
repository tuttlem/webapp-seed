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
