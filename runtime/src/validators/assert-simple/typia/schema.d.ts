import { type tags } from 'typia';
type Id = number & tags.Type<'uint64'>;
type DisplayName = string & tags.MinLength<3> & tags.MaxLength<24>;
export interface Type {
    id: Id;
    displayName?: DisplayName;
    health: number & tags.Minimum<0> & tags.Maximum<100>;
    inventory: {
        id: Id;
        displayName?: DisplayName;
        tags?: string[];
    }[] & tags.MaxItems<30>;
}
declare const _default: (input: unknown) => input is Type;
export default _default;
