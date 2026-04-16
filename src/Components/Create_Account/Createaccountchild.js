const Createaccountchild = (old = {}) => {
    return {
        ...old,
        path:"/createaccount",
        lazy: async () => ({
        Component: (await import("./Createaccount")).default,
        })
    }
}

export default Createaccountchild