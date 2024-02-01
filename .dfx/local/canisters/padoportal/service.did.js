export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Record({
    'result' : IDL.Text,
    'content' : IDL.Text,
    'source' : IDL.Text,
  });
  return IDL.Service({
    'get' : IDL.Func([IDL.Text], [IDL.Opt(Entry)], ['query']),
    'set' : IDL.Func([IDL.Text, Entry], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
