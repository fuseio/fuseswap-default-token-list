const { version } = require('../package.json');
const fuse = require('./tokens/fuse.json');

module.exports = async function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'FuseSwap Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'ipfs://QmQQGd3Kbb8fhxKQLvzPPngzBGd5aydV3QAigLHy53Hr3g',
    'keywords': [
      'fuseswap',
      'fuse',
      'default'
    ],
    tokens: [
      ...fuse
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
