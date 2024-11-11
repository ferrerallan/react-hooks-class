## React Hooks Demo

This project demonstrates the usage of several React Hooks:

* **useState:** Used for managing the count and todos.
* **useEffect:** Used for updating the document title when the count changes.
* **useCallback:** Used for optimizing the `increment` and `addTodo` functions.
* **useMemo:** Used in the `Memo` component to prevent unnecessary re-renders.
* **useContext:** Used to share the user data across components.

### Components

* **App:** The main component that demonstrates the usage of the hooks.
* **Memo:** This component demonstrates the benefit of using `useMemo` for expensive calculations.
* **WithoutMemo:** This component is similar to `Memo`, but without using `useMemo`, showcasing the performance difference.
* **Profile:** This component demonstrates the usage of `useContext` to access the user data.

### Running the project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.

This project was created for educational purposes to showcase the practical usage of React Hooks. Feel free to explore the code and experiment with different scenarios.