# Todo App

Everything you need to deploy the app is ready in `app/` directory. To deploy, use `pos-cli deploy [environment]`.

## Documentation

Read [documentation](https://documentation.platformos.com/get-started/todo-app/build-todo-list-app) on how this application has been built, step by step.

## Development

    npm ci

Add your development env under name `dev` (or edit npm tasks to reflect reality).

    npm start

After you are done, kill `npm start` and build your production assets:

    npm run build