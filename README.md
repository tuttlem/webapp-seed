# Angular seed project

This is a template structure for AngularJS projects. This seed project uses [RequireJS](http://requirejs.org/) for its dependency management. After cloning this repository, just copy it into a new folder that'll be your project.

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

Your web application should now be available at [http://localhost:3000/](http://localhost:3000/). As a `postinstall` script from `npm`, the default `gulp` action is invoked which will prepare your application into the `public` folder.

As a convenience controllers, services, directives, partials, etc. have had files created for them.

