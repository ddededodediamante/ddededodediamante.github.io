(function(Scratch) {
  class atobThing {
    getInfo() {
      return {
        id: 'atob',
        name: 'Atob',
        color1: '#72cf94',
        blocks: [
          {
            opcode: 'doatob',
            blockType: Scratch.BlockType.REPORTER,
            text: 'atob[txt]',
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'something'
              }
            }
          }
        ]
      };
    }
    doatob(args) {
      try {
        return window.atob(Scratch.Cast.toString(args.txt));
      } catch(err) {
        return err;
      }
    }
  }
  Scratch.extensions.register(new atobThing());
})(Scratch);
