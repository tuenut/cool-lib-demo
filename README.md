# About this repo
This is a demo of a simple library site. Created in educational purposes.


On current stage UI based on next API schema:

```yaml

/api/v0/books/: 
  get:
    description: List of books
    responses:
      200:
        application/json:
          schema:
            type: object
            properties:
              count: number
              next: string
              previous: string
              results:
                type: array
                items:
                  type: object
                  properties:
                    id: number
                    title: string
                    author:
                      type: object
                      properties:
                        id: number
                        full_name: string
/api/v0/books/random/: 
  get:
    description: Three random books
    responses:
      200:
        application/json:
          schema:
            type: array
            items:
              type: object
              properties:
                id: number
                title: string
                author:
                  type: object
                  properties:
                    id: number
                    full_name: string
/api/v0/books/{id}/:
  get:
    description: Book details
    responses:
      200:
        application/json:
          schema:
            type: object
            properties:
              id: number
              title: string
              description: string
              author: 
                type: object
                properties:
                  id: number
                  full_name: string
/api/v0/authors/:
  get:
    description: List of authors
    responses:
      200:
        application/json:
          schema:
            type: object
            properties:
              count: number
              next: string
              previous: string
              results:
                type: array
                items:
                  type: object
                  properties:
                    id: number
                    full_name: string
                    date_of_birth: string
                    date_of_death: string
/api/v0/authors/{id}/:
  get:
    description: Author details
    responses:
      200:
        application/json:
          schema:
            type: object
            properties:
              id: number
              full_name: string
              first_name: string
              last_name: string
              middle_name: string
              date_of_birth: string
              date_of_death: string
              short_biography: string
              books:
                type: array
                items:
                  type: object
                  properties: 
                    id: number
                    title: sttring
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
