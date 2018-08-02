// This is an alternative way to define components using decorators
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter, namespace, Action } from 'vuex-class';

const foo = namespace('foo');

@Component
export default class HelloDecorator extends Vue {
  @foo.Getter name!: string;
  // @foo.Getter('name') name!: string;
  // @Getter('foo/name') name!: string;
  // @Getter('name', { namespace: 'foo' }) name!: string;

  @Getter exclamationMarks!: string;
  // @Getter('exclamationMarks') exclamationMarks!: string;

  @Action increment!: () => void;
  // @Action('increment') increment!: () => void;

  @Action add!: (count: number) => void;
  // @Action('add') add!: (count: number) => void;

  @Action decrement!: () => void;
  // @Action('decrement') decrement!: () => void;

  render() {
    return (
      <div>
        <div>Hello {this.name}{this.exclamationMarks}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.add.bind(this, 5)}>+5</button>
      </div>
    );
  }
}
