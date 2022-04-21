var bech32 = require('./crypto/bech32');

module.exports = {
    isValidAddress: function (address, currency, opts) {
      const decoded = bech32.decode(address, bech32.encodings.BECH32);
      return decoded !== null && decoded.hrp.startsWith('terra');
    }
};
