1. learning class based components -> old way of writing react components
2. loading a class based component meaning loaading a instance of the class
3. create state variable in constuctor - best place
4. in functional component: bbehind the scenes, react also creates a big object to maintain
5. react provides setState() - to update state variables
6. Lifecycle: first parent constuctor then its render will be called -> then child class constructor then child render will be called
7. componentDidMount() - once render is done, this method if written will be callled
8. componentDidMount is used to make API calls just like useEffect
9. Important - when multiple child classes are present inside the parent class, the lifecycle is slightly changed. - react tries to optimize the rendering
10. react life cycle diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
11. componentWillUnmuont() -> another method to clear out the things from that specific component after it unloads. ex: if there is a setInterval in componentDidMount, and everytime this component is realoaded, setTimer will be runnign in background. But we need to unmount this to improve performance
12.
