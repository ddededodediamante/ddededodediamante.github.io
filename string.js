(function(Scratch) {
  class stringthings {
    getInfo() {
      return {
        id: 'ddestringthings',
        name: 'String Things',
        color1: '#72cf94',
        blocks: [
          {
            opcode: 'ChangeCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'case [string] to [menu]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              },
              menu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'CASE_CHANGE'
              }
            }
          },
          {
            opcode: 'StringEndsWith',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string] ends with [string2]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'o'
              }
            }
          },
          {
            opcode: 'StringStartsWith',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string] starts with [string2]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'H'
              }
            }
          },
          {
            opcode: 'StringStartsEndsWith',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string] starts or ends with [string2]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hi'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
              }
            }
          },
          {
            opcode: 'RepeatString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'repeat [string] [number] times',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'M'
              },
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              }
            }
          },
          {
            opcode: 'UnicodeAtString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'unicode of letter #[number] of [string]',
            arguments: {
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              }
            }
          },
          {
            opcode: 'CharacterFromUnicode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'character from unicode [unicode]',
            arguments: {
              unicode: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 65
              }
            }
          },
          {
            opcode: 'IndexOfString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'index of [string] in [string2]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'e'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'tea tea'
              }
            }
          },
          {
            opcode: 'LastIndexOfString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'last index of [string] in [string2]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'e'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'tea tea'
              }
            }
          },
          {
            opcode: 'ReplaceFirst',
            blockType: Scratch.BlockType.REPORTER,
            text: 'in [string] replace first [string2] with [string3]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abc abc'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abc'
              },
              string3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'def'
              }
            }
          },
          {
            opcode: 'ReplaceAll',
            blockType: Scratch.BlockType.REPORTER,
            text: 'in [string] replace all [string2] with [string3]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abc abc'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abc'
              },
              string3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'def'
              }
            }
          },
          {
            opcode: 'SliceText',
            blockType: Scratch.BlockType.REPORTER,
            text: 'slice [string] from [number] to [number2]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Heyey'
              },
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              number2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'SplitText',
            blockType: Scratch.BlockType.REPORTER,
            text: '[string] split by [string2]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hey-there'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '-'
              }
            }
          },
          {
            opcode: 'TimesStringAppears',
            blockType: Scratch.BlockType.REPORTER,
            text: 'amount of [string] in [string2]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'ha'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hahahaha'
              }
            }
          },
          {
            blockType: "label",
            text: "Advanced",
          },
          {
            opcode: 'AddToStringUntil',
            blockType: Scratch.BlockType.REPORTER,
            text: 'add [string] to [string2] until length [number]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hh'
              },
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7
              },
            }
          },
          {
            opcode: 'RemoveFromArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'in [string] remove from array [array]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abcde'
              },
              array: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["b","d"]'
              }
            }
          },
          {
            opcode: 'HasFromArray',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string] contains from array [array]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abcde'
              },
              array: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["f","e"]'
              }
            },
            hideFromPalette: true
          },
          {
            opcode: 'ToUnicodeArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'text [string] to unicode array',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'abcde'
              }
            }
          },
          {
            opcode: 'FromUnicodeArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'text from unicode array [array]',
            arguments: {
              array: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[97, 98, 99, 100, 101]'
              }
            }
          },
          {
            opcode: 'Newline',
            blockType: Scratch.BlockType.REPORTER,
            text: '\\n'
          }
        ],
        menus: {
          CASE_CHANGE: {
            acceptReporters: true,
            items: ['lowercase','UPPERCASE','mIxEd CaSe','random case','Title Case']
          }
        }
      };
    }
    ChangeCase(args) {
      const str = args.string;
      if (args.menu == 'lowercase') {
        return str.toLowerCase();
      } else if (args.menu == 'UPPERCASE') {
        return str.toUpperCase();
      } else if (args.menu == 'mIxEd CaSe') {
        var returns = '';
        var state = 1;
        for (let i = 0; i < str.length; i++) {
          returns += (state == 1 ? str.charAt(i).toLowerCase() : str.charAt(i).toUpperCase());
          state = (0 - state);
        }
        return returns;
      } else if (args.menu == 'random case') {
        var returns = '';
        for (let i = 0; i < str.length; i++) {
          returns += (Math.random() > 0.5 ? str.charAt(i).toLowerCase() : str.charAt(i).toUpperCase());
        }
        return returns;
      } else {
        const array = str.split(' ');
        const array2 = [];
        for (const element of array) {
          array2.push(element.charAt(0).toUpperCase() + element.slice(1))
        }
        return array2.join(' ');
      }
    }
    UnicodeAtString(args) {
      return (args.string).codePointAt(args.number - 1);
    }
    StringEndsWith(args) {
      return (args.string).endsWith(args.string2);
    }
    StringStartsWith(args) {
      return (args.string).startsWith(args.string2);
    }
    StringStartsEndsWith(args) {
      const str1 = args.string; const str2 = args.string2
      return str1.endsWith(str2) || str1.startsWith(str2);
    }
    CharacterFromUnicode(args) {
      return String.fromCharCode(args.unicode);
    }
    IndexOfString(args) {
      return (args.string2).indexOf(args.string) + 1;
    }
    LastIndexOfString(args) {
      return (args.string2).lastIndexOf(args.string) + 1;
    }
    ReplaceFirst(args) {
      return (args.string).replace(args.string2, args.string3);
    }
    ReplaceAll(args) {
      return (args.string).replaceAll(args.string2, args.string3);
    }
    SliceText(args) {
      return (args.string).slice(args.number - 1, args.number2);
    }
    SplitText(args) {
      const array = (args.string).split(args.string2)
      return JSON.stringify(array);
    }
    AddToStringUntil(args) {
      return (args.string2).padStart(args.number, args.string);
    }
    RemoveFromArray(args) {
      const array = JSON.parse(args.array)
      var string = args.string
      array.forEach(item => string = string.replaceAll(item, ''))
      return string;
    }
    HasFromArray(args) {
      const array = JSON.parse(args.array)
      return (array.some(v => (args.string).includes(v)));
    }
    ToUnicodeArray(args) {
      const array = []
      for (let i = 0; i < (args.string).length; i++) {
        array.push(args.string.charCodeAt(i))
      }
      return JSON.stringify(array);
    }
    FromUnicodeArray(args) {
      const array = JSON.parse(args.array)
      var str = ''
      for (const element of array) {
        str += String.fromCharCode(element);
      }
      return str;
    }
    TimesStringAppears(args) {
      return (args.string2).split(args.string).length - 1;
    }
    RepeatString(args) {
      return (args.string).repeat(args.number);
    }
    Newline() {
      return '\n';
    }
  }
  Scratch.extensions.register(new stringthings());
})(Scratch);
