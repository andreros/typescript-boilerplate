export class Component1 {

    private greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    public greet() {
        return "Hello, " + this.greeting;
    }
}
