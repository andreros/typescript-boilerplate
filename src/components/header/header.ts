export class Header {

    private greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    public greet() {
        return 'Hello, ' + this.greeting;
    }
}
