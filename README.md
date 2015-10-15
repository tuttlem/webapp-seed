# Webapp seed project

This seed project uses [RequireJS](http://requirejs.org/) for its dependency management.

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

Your web application should now be available at [http://localhost:8000/](http://localhost:8000/).

When you're ready to prepare a build of your application, the default `gulp` action will create a `build` directory that can be used as the deployment package.
