// This is an alternative way to define components using decorators
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter, namespace, Action } from 'vuex-class';

const foo = namespace('foo');

@Component({
  template: `
    <div>
      <div>Hello {{name}}{{exclamationMarks}}</div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
      <button @click="add(5)">+5</button>
    </div>
  `,
})
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
}
