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
git commit -m "Your message" #don't do this
```
Commit with a more meaningful message with just

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

### Reference
Some good practices followed by this project are:

- [Presentational vs Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
