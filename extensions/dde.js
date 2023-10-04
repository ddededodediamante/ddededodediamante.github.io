const IMAGEpi = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMTQuOTQ4IiBoZWlnaHQ9IjE3Ni42ODgwOCIgdmlld0JveD0iMCwwLDIxNC45NDgsMTc2LjY4ODA4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMyLjU5MzgyLC05MS42NTU5NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTYyLjQ0MDc1LDEyMi45MTA5NWMtOC40Mjk1MSw1Ljk2NTM2IC0xOS45NjY3OSwyMi4xMDc3NSAtMTkuOTY2NzksMjIuMTA3NzVoLTguNDk0OTljMCwwIDUuMDYyMjcsLTE1LjI2NjA0IDEwLjYxODA5LC0yNS43NTU3YzQuOTUxMzEsLTkuMzQ4MzIgMTkuMzgxNzIsLTIyLjM3NjMgMjguNDE2MywtMjQuNTY4ODhjNy43MTg3MSwtMS44NzMyMyAxNC4wNDI3OCwtMi4wMzgxNiAxNC4wNDI3OCwtMi4wMzgxNmgxNTguOTY0ODljMCwwIC03LjcxNTM2LDE3Ljg3NTQxIC0xMS4zNjc5MSwyMi43MzIxYy0yLjU0OTQ0LDMuMzg5OSAtOC40NTM3NSwzLjYyNDE2IC04LjQ1Mzc1LDMuNjI0MTZoLTQyLjQ3NDk3YzAsMCAtMy4xNzg2NSw2MS42ODAzNCAtMi41NjQ5NCw4OS43MDQ0N2MwLjMwMzgxLDEzLjg3MzI3IDAuOTM1MzMsMjIuMDE2MSAzLjUyMDM0LDI4LjQ5NDQ1YzYuNTIyODksMTYuMzQ3MTUgMTcuOTk0OTcsMTQuNjcxNTMgMTcuOTk0OTcsMTQuNjcxNTNjMCwwIDEwLjU2MDczLDEuMjE4MjMgMTcuMDc4NDEsLTIuODg1NzhjNC45NDc4LC0zLjExNTUgMTIuOTgwOCwtMTMuMDE1MTEgMTIuOTgwOCwtMTMuMDE1MTFsNi4zMTY3OSw0LjU3NDIzYzAsMCAtOS4wNzI0LDE3LjkyMjA0IC0yNi44MjUzMywyNC4zMzc0NWMtNy43OTE3NSwyLjgxNTcyIC0xOS42MzAxOCwyLjIzNjYzIC0xOS42MzAxOCwyLjIzNjYzYzAsMCAtMTcuNzE3MjQsMi45NzQ3IC0zMi4yMzA0MiwtMTMuMjU5NzNjLTguMzkxMzUsLTkuMzg2NTUgLTkuMTUyNTksLTQ0LjkyNjU3IC05LjE0MzAyLC01NC4xNTY0MWMwLjAyODAyLC0yNy4wMzIzNSAzLjI1NDg2LC04MS4wNjQzOSAzLjI1NDg2LC04MS4wNjQzOWgtNDUuOTM5MzljMCwwIC01LjM4ODU3LDEwNS44MTM1NyAtMjAuNjE5ODksMTMzLjk2OTgzYy03LjAzMzI1LDEzLjAwMTUgLTE2LjY2OTI0LDE0LjIxOTkyIC0xNi42NjkyNCwxNC4yMTk5MmMwLDAgLTYuODY1MywxLjQ3OTE0IC0xNC4zNTI4NCwtMi4zNzYxNGMtNy40MDY3NywtMy44MTM3IC02LjQ1NDc5LC0xMi42MTQzOSAtNi40NTQ3OSwtMTIuNjE0MzljMCwwIC0xLjEwMjY1LC00LjkyMjA1IDEuNDU4NTgsLTguNzUyODZjMy43NzM2OCwtNS42NDQyNiAxNS4xNjU1NCwtMTkuNzYyMDYgMjIuNDgwNTYsLTM1LjQyMzkyYzUuNjM5MzMsLTEyLjA3NDEyIDcuNDEzMTQsLTE3Ljk4NDEgOS4zNDA3MywtMjcuNDUzMTZjNi41NjI1MywtMzIuMjM3NTkgNy40MDk4OSwtNjEuMjA2NjIgNy40MDk4OSwtNjEuMjA2NjJjMCwwIC0yMC43OTM5MSwtMS42ODg4MiAtMjguNjg5NTQsMy44OTg3M3oiLz48L2c+PC9nPjwvc3ZnPg==';

(function(Scratch) {
  function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  class coolext {
    getInfo() {
      return {
        id: 'dde1extension',
        name: 'dde\'s blocks',
        color1: '#348ceb',
        color2: '#2d7bcf',
        color3: '#2463a6',
        blocks: [
          {
            opcode: 'jsmathPi',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pi',
            blockIconURI: IMAGEpi
          },
          {
            opcode: 'jsmaxmin',
            blockType: Scratch.BlockType.REPORTER,
            text: 'math[js]',
            arguments: {
              js: {
                type: Scratch.ArgumentType.STRING,
                menu: 'JS_NUMBER_MENU'
              }
            }
          },
          '---',
          {
            opcode: 'jointhree',
            blockType: Scratch.BlockType.REPORTER,
            text: '[join1] [join2] [join3]',
            arguments: {
              join1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt1'
              },
              join2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt2'
              },
              join3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt3'
              }
            }
          },
          {
            opcode: 'joinfour',
            blockType: Scratch.BlockType.REPORTER,
            text: '[join1] [join2] [join3] [join4]',
            arguments: {
              join1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt1'
              },
              join2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt2'
              },
              join3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt3'
              },
              join4: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt4'
              }
            }
          },
          {
            opcode: 'joinfive',
            blockType: Scratch.BlockType.REPORTER,
            text: '[join1] [join2] [join3] [join4] [join5]',
            arguments: {
              join1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt1'
              },
              join2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt2'
              },
              join3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt3'
              },
              join4: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt4'
              },
              join5: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt5'
              }
            }
          },
          {
            opcode: 'joinsix',
            blockType: Scratch.BlockType.REPORTER,
            text: '[join1] [join2] [join3] [join4] [join5] [join6]',
            arguments: {
              join1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt1'
              },
              join2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt2'
              },
              join3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt3'
              },
              join4: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt4'
              },
              join5: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt5'
              },
              join6: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'txt6'
              }
            }
          },
          '---',
          {
            opcode: 'ifthenelseuwu',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if[boolean]then[string1]else[string2]',
            arguments: {
              boolean: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              string1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              string2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'orange'
              }
            }
          },
          '---',
          {
            opcode: 'getfromstring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'in[string]get[getmenu]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '6Text9!'
              },
              getmenu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'GET_SOMETHING_MENU'
              }
            }
          },
          '---',
          {
            opcode: 'pickrandomtimes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random[from]to[to]quantity[quantity]',
            arguments: {
              from: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              to: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              quantity: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              }
            }
          },
          {
            opcode: 'randomstringtimes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random string[type]length[length]',
            arguments: {
              type: {
                type: Scratch.ArgumentType.STRING,
                menu: 'RANDOM_STRING'
              },
              length: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              }
            }
          },
          {
            opcode: 'splitstringby',
            blockType: Scratch.BlockType.REPORTER,
            text: '#[number]of[array]split by[split]',
            arguments: {
              array: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a,b,c,d,e'
              },
              split: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              },
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              }
            }
          },
          {
            opcode: 'splitstringmenu',
            blockType: Scratch.BlockType.REPORTER,
            text: '[menu]of[array]split by[split]',
            arguments: {
              array: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a,b,c,d,e'
              },
              split: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              },
              menu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MENU_OF_ARRAY'
              }
            }
          },
          '---',
          {
            opcode: 'getRhex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Random hex color'
          },
          '---',
          {
            opcode: 'getUTC',
            blockType: Scratch.BlockType.REPORTER,
            text: 'UTC[time]',
            arguments: {
              time: {
                type: Scratch.ArgumentType.STRING,
                menu: 'GET_UTC'
              }
            }
          },
          '---',
          {
            opcode: 'isType',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string]is a[ismenu]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Text'
              },
              ismenu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'IS_SOMETHING_MENU'
              }
            }
          },
          {
            opcode: 'containsN',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string]has[hasmenu]?',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Banana69'
              },
              hasmenu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'HAS_SOMETHING_MENU'
              }
            }
          },
          '---',
          {
            opcode: 'notinfinite',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[finiteone]is finite?',
            arguments: {
              finiteone: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          '---',
          {
            opcode: 'equalsonetime',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[input] [logic] [return]',
            arguments: {
              input: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              logic: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EQUALS_MENU'
              },
              return: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            }
          },
          {
            opcode: 'equalstwotimes',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[input] [logicone] [returnone] [bool] [logictwo] [returntwo]',
            arguments: {
              input: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              logicone: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EQUALS_MENU'
              },
              returnone: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
             logictwo: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EQUALS_MENU'
              },
              returntwo: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              bool: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OR_AND_MENU'
              }
            }
          },
          {
            opcode: 'booleanthree',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[bool] [input1] [input2] [input3]',
            arguments: {
              bool: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OR_AND_MENU'
              },
              input1: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              input2: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              input3: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'commandtest',
            blockType: Scratch.BlockType.COMMAND,
            text: 'scratch, target',
            hideFromPalette: true
          },
        ],
        menus: {
          JS_NUMBER_MENU: {
            acceptReporters: true,
            items: ["MIN_VALUE","MAX_VALUE","POSITIVE_INFINITY","NEGATIVE_INFINITY"]
          },
          HAS_SOMETHING_MENU: {
            acceptReporters: true,
            items: ["numbers","strings"]
          },
          IS_SOMETHING_MENU: {
            acceptReporters: true,
            items: ["number","string","boolean"]
          },
          EQUALS_MENU: {
            acceptReporters: true,
            items: [{ text: '=', value: '==' }, '>', '<', { text: 'not =', value: 'not ==' }, 'not >', 'not <']
          },
          GET_SOMETHING_MENU: {
            acceptReporters: true,
            items: ["numbers","letters","characters"]
          },
          OR_AND_MENU: {
            acceptReporters: true,
            items: ["and","or"]
          },
          RANDOM_STRING: {
            acceptReporters: true,
            items: ["letters","numbers","both"]
          },
          MENU_OF_ARRAY: {
            acceptReporters: true,
            items: ["first","last","random","length"]
          },
          GET_UTC: {
            acceptReporters: true,
            items: ["milliseconds","seconds","minutes","hours","day-of-weekend","month","year"]
          },
          DRAG_TEST: {
            acceptReporters: true,
            items: ["start","stop"]
          },
        }
      };
    }
    isType(args) {
      if (args.ismenu == 'number') {
        return !isNaN(args.string);
      } else if (args.ismenu == 'string') {
        return isNaN(args.string);
      } else {
        return (args.string == 'true' || args.string == 'false');
      }
    }
    containsN(args) {
      if (args.hasmenu == 'numbers') {
        return /\d/.test(args.string);
      } else {
        return isNaN(args.string);
      }
    }
    jsmaxmin(args) {
      if (args.js === 'MIN_VALUE') {
        return Number.MIN_VALUE;
      } else if (args.js === 'MAX_VALUE') {
        return Number.MAX_VALUE;
      } else if (args.js === 'POSITIVE_INFINITY') {
        return Number.POSITIVE_INFINITY;
      } else {
        return Number.NEGATIVE_INFINITY;
      }
    }
    jsmathPi() { return Math.PI; }
    jointhree(args) {
      return String(args.join1)+String(args.join2)+String(args.join3);
    }
    joinfour(args) {
      return String(args.join1)+String(args.join2)+String(args.join3)+String(args.join4);
    }
    joinfive(args) {
      return String(args.join1)+String(args.join2)+String(args.join3)+String(args.join4)+String(args.join5);
    }
    joinsix(args) {
      return String(args.join1)+String(args.join2)+String(args.join3)+String(args.join4)+String(args.join5)+String(args.join6);
    }
    ifthenelseuwu(args) {
      return (args.boolean ? args.string1 : args.string2);
    }
    notinfinite(args) {
    return isFinite(args.finiteone);
    }
    equalsonetime(args) {
      var logic = (args.logic)
      if (logic.startsWith('not')) {
        logic = '!('+String(args.input)+((logic).replace('not ',''))+String(args.return)+')'
      } else {
        logic = String(args.input)+logic+String(args.return)
      }
      logic = Boolean(eval(logic))
      return logic;
    }
    equalstwotimes(args) {
      var logic1 = (args.logicone)
      var logic2 = (args.logictwo)
      //logic1
      if (logic1.startsWith('not')) {
        logic1 = '!('+String(args.input)+((logic1).replace('not ',''))+String(args.returntwo)+')'
      } else {
        logic1 = String(args.input)+logic1+String(args.returnone)
      }
      //logic2
      if (logic2.startsWith('not')) {
         logic2 = '!('+String(args.input)+((logic2).replace('not ',''))+String(args.returntwo)+')'
      } else {
        logic2 = String(args.input)+logic2+String(args.returntwo)
      }
      logic1 = eval(logic1)
      logic2 = eval(logic2)
      if (args.bool == 'and') {
        return Boolean(logic1 && logic2);
      } else {
        return Boolean(logic1 || logic2);
      }
    }
    getfromstring(args) {
      if (args.getmenu == 'letters') {
        return (args.string).replace(/[^a-zA-Z]+/g, '');
      } else if (args.getmenu == 'numbers') {
        return (args.string).replace(/[^0-9]+/g, '');
      } else {
        return (args.string).replace(/[a-zA-Z0-9]+/g, '');
      }
    }
    pickrandomtimes(args) {
      var array = []
      for (let i = 0; i < args.quantity; i++) {
        array.push(Random(args.from, args.to))
      }
      return array.toString();
    }
    randomstringtimes(args) {
      if (args.type == 'letters') {
        var letters = 'qwertyuiopasdfghjklzxcvbnm'
      } else if (args.type == 'numbers') {
        var letters = '0123456789'
      } else {
        var letters = ['qwertyuiopasdfghjklzxcvbnm','0123456789']
      }
      var string = ''
      for (let i = 0; i < args.length; i++) {
        if (args.type == 'both') { 
          var lts = letters[Random(0,1)]
        } else { 
          var lts = letters
        }
        string += lts.charAt(Random(0, lts.length - 1))
      }
      return string;
    }
    splitstringby(args) {
      try {
        var array = String(args.array).split(String(args.split))
        return array[(args.number) - 1]
      } catch (error) {
        return;
      }
    }
    splitstringmenu(args) {
      var array = String(args.array).split(String(args.split))
      if (args.menu == 'first') {
        return array[0];
      } else if (args.menu == 'last') {
        return array[array.length - 1];
      } else if (args.menu == 'random') {
        return array[Random(0,array.length - 1)];
      } else {
        return array.length;
      }
    }
    getRhex() { 
      let letters = "0123456789abcdef"
      let color = '#'
      for (let i = 1; i < 7; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
      }
      return String(color); 
    }
    booleanthree(args) {
      if (args.bool == 'and') {
        return Boolean(args.input1) && Boolean(args.input2) && Boolean(args.input3);
      } else {
        return Boolean(args.input1) || Boolean(args.input2) || Boolean(args.input3);
      }
    }
    getUTC(args) {
      if (args.time == 'milliseconds') {
        return new Date().getUTCMilliseconds();
      } else if (args.time == 'seconds') {
        return new Date().getUTCSeconds();
      } else if (args.time == 'minutes') {
        return new Date().getUTCMinutes();
      } else if (args.time == 'hours') {
        return new Date().getUTCHours();
      } else if (args.time == 'day-of-weekend') {
        return (new Date().getUTCDay() + 1);
      } else if (args.time == 'month') {
        return (new Date().getUTCMonth() + 1);
      } else {
        return new Date().getUTCFullYear();
      }
    }
    commandtest(args, util) {
      console.log(Scratch, util.target);
    }
  }
  Scratch.extensions.register(new coolext());
})(Scratch);
