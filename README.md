Välkomna till min portfolio-applikation som är hostad i Molnet!

Först och främst, här är URL:en till min hemsida jag gjort: https://red-flower-0768e6f10.2.azurestaticapps.net/#about

Här nedan kommer jag lägga in lite bilder på processen om vad det innebär att koppla ett projekt i react till Azure som är microsofts molntjänst.

<img width="1920" height="1080" alt="Molntjänster-Portfolio" src="https://github.com/user-attachments/assets/076b2bdd-23a4-499b-b71f-48ca735ef600" />
Här ovan ser du min portfolio när jag kör den på localhost (lokalt på min dator).

<img width="1920" height="1080" alt="Azure-plan-demo" src="https://github.com/user-attachments/assets/ad55ac6c-1213-4c1f-b57e-b5f74a3a7425" />

Bilden ovan visar hur det såg ut i Azure-portalen när jag har kopplat projektet dit med hjälp av Github. 

<img width="1920" height="1080" alt="Github-node-felsökning" src="https://github.com/user-attachments/assets/655a8d55-7a7c-4ddc-836b-d308d0b9011b" />

Det var lite felsökning/konfiguration innan man kunde deploya applikationen korrekt (se ovan). Beroende på vilken version av node man har och om man byggt med vite etc så fick jag ändra lite i min workflows fil i VScode. 

<img width="1920" height="1080" alt="azure-app-global" src="https://github.com/user-attachments/assets/3175bb23-aa9f-45bb-ba1b-47a753a1d3ca" />

Tillslut lyckades jag deploya korrekt och notera nu URL:en som ej längre är localhost (lokalt), applikationen körs nu i molnet!




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# deploy-react-static-web-portfolio-henrik-granbohm
 1275d88837de3f28b86fa8cc835694c9afb8751e
