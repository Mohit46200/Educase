const Alreadyregisteredchild = (old = {}) => {
    return {
        ...old,
        path:"/alreadyregistered",
        lazy: async () => ({
        Component: (await import("./Alreadyregistered")).default,
        })
    }
}

export default Alreadyregisteredchild