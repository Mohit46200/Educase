const Userchild = (old = {}) => {
    return {
        ...old,
        path:"/user",
        lazy: async () => ({
        Component: (await import("./User.jsx")).default,
        })
    }
}

export default Userchild