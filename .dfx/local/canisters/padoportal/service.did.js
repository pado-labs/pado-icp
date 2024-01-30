export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Record({
    'result' : IDL.Text,
    'content' : IDL.Text,
    'source' : IDL.Text,
  });
  const anon_class_4_1 = IDL.Service({
    'get' : IDL.Func([IDL.Text], [IDL.Opt(Entry)], ['query']),
    'getInitializer' : IDL.Func([], [IDL.Principal], ['query']),
    'set' : IDL.Func([IDL.Text, Entry], [IDL.Principal], []),
  });
  return anon_class_4_1;
};
export const init = ({ IDL }) => { return []; };
