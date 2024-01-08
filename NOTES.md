## VITE REACT TYPESCRIPT
Create your reactjs + typescript project using vite.

```bash
# Create project
$ npm create vite PROJECT_NAME

# Select a framework
react

# Select a variant:
react-ts
```

## JEST + REACT-TESTING-LIBRARY
Follow the instructions to download the necessary packages:

```bash
# Install dependencies of the jest
$ npm install -D jest @types/jest ts-node ts-jest jest-environment-jsdom jest-transform-stub

# Install dependencies of the react-testig-library
$ npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Create the **jest.config.ts** file at the root of your project, with the same content as the example below:

```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
```

Create the **jest.setup.ts** file at the root of your project, with the same content as the example below:

```typescript
import '@testing-library/jest-dom/extend-expect'
```

Finally, go to your **package.json** file and in the scripts section insert the lines below:

```json
  "test": "jest",
  "test:watch": "npx jest --watch -o",
```

## EDITOR CONFIG
Let's configure the defaults of our project, for that, let's start by creating a file called **.editorconfig** in the project root, with the same content in the example below:

```bash
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## ESLINT
Now let's start installing ESLint, follow the instructions:
```bash
# Install ESLint
$ npm install -D eslint

# Initialize ESLint in the project
$ npx eslint --init
```

After initializing ESLint, answer the questions with the example below:
```bash
# How would you like to use ESLint?
To check syntax, find problems, and enforce code style

# What type of modules does your project use?
JavaScript modules (import/export)

# Which framework does your project use?
React

# Does your project use TypeScript?
yes

# Where does your code run?
Browser

# How would you like to define a style for your project?
Answer questions about your style

# What format do you want your config file to be in?
JSON

# What style of indentation do you use?
tab

# What quotes do you use for strings?
double

# What line endings do you use?
unix

# Do you require semicolons?
Yes

# eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
# Would you like to install them now?
yes

# Which package manager do you want to use?
npm
```

Now Install react-hooks plugin, using command bellow:
`npm install -D eslint-plugin-react-hooks`

configure ".eslintrc.json" file with the example below:
```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

Finally, go to your **package.json** file and in the scripts section insert the lines below:

```json
  "lint": "eslint src --max-warnings=0",
```

## PRETTIER
To instal prettier in the project run command bellow:
`npm install --save-dev --save-exact prettier`

create the .prettierrc file in the project root directory, with the content as in the example below:
```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Now we are going to integrate prettier with eslint in the project, for that we are going to install the dependencies below:
```bash
# Install "prettier" plugin to the eslint
$ npm install -D eslint-plugin-prettier

# Install "prettier" config to the eslint
$ npm install -D eslint-config-prettier
```

In your ESLint configuration file, right in the "*extends*" section, add the plugin (**"plugin:prettier/recommended",**) as shown in the example below:
```JSON
{

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],

}
```

Finally, let's create a folder called **".vscode"** in the root of the project and inside it create a file called **"settings.json"**, inside this file place the content as in the example below:
```JSON
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave" : {
    "source.fixAll.eslint" : true,
  }
}
```

## HUSKY AND LINT-STAGED (GIT HOOK)
```bash
# Install husky
$ npm install -D husky

# Initialize husky in the project
$ npx husky-init

# Install lint-staged
$ npm install -D lint-staged
```

Look for the **./husky/pre-commit** file and make a change by replacing the `npm test` line with `npx --no-install lint-staged`

And let's make a small change in **package.json**, just below the closing of the *scripts* session, let's add the content below:

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*": [
      "npm run lint --fix",
      "npm run test --findRelatedTests --bail"
    ]
  },
```

## STYLED COMPONENTS
```bash
# Install styled-components
$ npm install styled-components

# Install dev dependencies @types
$ npm install -D @types/styled-components

# Install dev dependencies to jest styled components
$ npm install -D jest-styled-components
```

Add the `import 'jest-styled-components'` line to your **jest.setup.ts** file

## STORYBOOK
```bash
# Install storybook
$ npx storybook init

# Do you want to run the 'eslintPlugin' migration on your project?
No

# Install dependencie preset-typescript
$ npm install -D @storybook/preset-typescript
```

Now in **.storybook/main.js** look for the session *"stories"* and enter the content below:
```json
"../src/**/stories.@(js|jsx|ts|tsx)"
```

Also change the name of the **main.js** file to **/main.cjs**

Finally, still in the **.storybook** directory, change the name of the **preview.js** file to **preview.jsx**, and let's create decorators, leave the file as in the example below:

```javascript
import { MyThemeProvider } from '../src/styles/myThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <Story />
    </MyThemeProvider>
  ),
];
```


# CREDENTIALS GOOGLE OAUTH
CLIENT_ID = 825637266127-fc203vudr04gilo3ujs6uscc2c6ivjhd.apps.googleusercontent.com
CLIENT_SECRET = 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

# FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEe5_chlB7mx3QtVl-_iRMwG3KQJZie8",
  authDomain: "oauth-project-a8d41.firebaseapp.com",
  projectId: "oauth-project-a8d41",
  storageBucket: "oauth-project-a8d41.appspot.com",
  messagingSenderId: "648713163388",
  appId: "1:648713163388:web:a9e3c6dc54c53be195eff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
