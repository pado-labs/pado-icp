import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Entry {
  'schemaString' : string,
  'context' : string,
  'name' : string,
  'description' : string,
}
export interface anon_class_7_1 {
  'createSchema' : ActorMethod<[Entry], string>,
  'getInitializer' : ActorMethod<[], Principal>,
  'getSchema' : ActorMethod<[string], [] | [Entry]>,
}
export interface _SERVICE extends anon_class_7_1 {}
