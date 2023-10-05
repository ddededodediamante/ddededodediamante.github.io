(function(Scratch) {
  class AtobThing {
    getInfo() {
      return {
        id: 'ddeAtob',
        name: 'Atob',
        color1: '#72cf94',
        blocks: [
          {
            opcode: 'resultatob',
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
    resultatob(args) {
      try {
        return window.atob(Scratch.Cast.toString(args.txt));
      } catch(err) {
        return err;
      }
    }
  }
  Scratch.extensions.register(new AtobThing());
})(Scratch);
