const local = () => {
    try {
        return "Hello world"
    }catch(err: any) {
        console.error("Error handling: "+ err.message)
    }
}

export default local