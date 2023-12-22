import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Entry {
  'result' : string,
  'content' : string,
  'source' : string,
}
export interface _SERVICE {
  'get' : ActorMethod<[string], [] | [Entry]>,
  'set' : ActorMethod<[string, Entry], undefined>,
}
