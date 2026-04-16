const Userchild = (old = {}) => {
    return {
        ...old,
        path:"/user",
        lazy: async () => ({
        Component: (await import("./User")).default,
        })
    }
}

export default Userchild