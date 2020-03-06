import  App, { Container } from "next/app";
class MyApp extends App {

    render(){
console.log("console")
    const {Component} = this.props
    return (
        <Container>
            <p>On every page</p>
            <Component/>
        </Container>
    )
    }
}


export default  MyApp