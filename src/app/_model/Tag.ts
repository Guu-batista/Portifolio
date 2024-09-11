export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly PYTHON = new Tag('Python', 'green');
    static readonly NODEJS = new Tag('NodeJS', 'purple');
    static readonly CSHARP = new Tag('C#', 'yellow');
    static readonly REACT = new Tag('React', 'pink');
    static readonly ASPNET = new Tag('ASPNet', 'darkgreen');
    static readonly JAVASCRIPT = new Tag('Javascript', 'darkblue');
    static readonly JAVA = new Tag('Java', 'black');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}