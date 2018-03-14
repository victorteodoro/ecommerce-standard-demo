How to contribute (new demos or upgrades)
================================

### Branch naming scheme
When naming your new branches, follow this structure:

```
branch-type/branch-meaningful-description
```

Where the types can be:

- **refactor:** to refactor stuff without changing the functionality
- **feature:** to add new features (screens, payment types, etc)
- **doc:** to add documentation of any kind
- **fix:** to add bug fixes

### Commit naming scheme
When commiting, don't use the commit message option

```sh
git commit -m "Your message" # don't do this, pretty please with sugar on top
```
Instead commit with a more meaningful message with just

```sh
git commit
```

Keep your commits short!!! Commit often.

### Source Folder Structure

The folder structure follows

```
src
|--components
|--containers
```

### Tech stack
One of the central ideas behind this project is to stabilize the development efforts inside the Solutions team around a certain very modern and versatile stack. Under this aegis we chose the bellow stack.

#### Javascript
First and foremost we are embracing Javascript as our _de facto_ go to tool for almost every thing. The ecosystem has matured greatly over the past decade and now there's very little things one can't do with just plain JS and lib or two.[1](https://www.youtube.com/watch?v=L-fx2xXSVso&t=2129s)[2](https://www.youtube.com/watch?v=G39lKaONAlA&t=770s)

#### React
React was released in 2013 with a new approach to Javascript front-end framworks. Instead of providing a full-fledged, opinionated, batteries included monolith, it chose a very minimalistic setup. In the end React is just a thin layer of functionality around vanilla JS. This frees the developer to harness the full power of the ecosystem withour breaking things.

One other very nice facet of React is the choice of its developers to embrace since the beginning a functional approach to doing things. If you embrace the power of working with immutable data structures, pure, point-free functions, &c, you will have a much nicer experience with React. You will become a better programmer too. And that's very nice.

#### Sass
CSS is great. But Sass makes writing even better. So we use it a lot. Get wind of it [here](https://sass-lang.com/guide).

#### CSS Modules
Sass still compiles to globally scoped CSS. With the help of CSS Modules, we can get local styling with all the benefits of regular CSS - pseudo-classes, transforms, animations, &c. Read more about on its [Github repo](https://github.com/css-modules/css-modules) or, for a more didatic tutorial of how to configure it with Webpack, see [here](https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9).

### References
Some good practices followed by this project are:

- [Presentational vs Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
