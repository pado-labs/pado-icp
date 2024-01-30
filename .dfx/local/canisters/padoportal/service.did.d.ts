import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Entry {
  'result' : string,
  'content' : string,
  'source' : string,
}
export interface anon_class_4_1 {
  'get' : ActorMethod<[string], [] | [Entry]>,
  'getInitializer' : ActorMethod<[], Principal>,
  'set' : ActorMethod<[string, Entry], Principal>,
}
export interface _SERVICE extends anon_class_4_1 {}
