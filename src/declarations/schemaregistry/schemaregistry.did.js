export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Record({
    'schemaString' : IDL.Text,
    'context' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const anon_class_7_1 = IDL.Service({
    'createSchema' : IDL.Func([Entry], [IDL.Text], []),
    'getInitializer' : IDL.Func([], [IDL.Principal], ['query']),
    'getSchema' : IDL.Func([IDL.Text], [IDL.Opt(Entry)], ['query']),
  });
  return anon_class_7_1;
};
export const init = ({ IDL }) => { return []; };
