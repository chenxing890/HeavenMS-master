/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Document Roll
 * Chloe's House (220000304)
 */
//RW: Toy Collector
var BONUS_ITEM = 4001126;
var toys = [
  //umbrellas
  { id: 1302016 },
  { id: 1302017 },
  { id: 1302025 },
  { id: 1302026 },
  { id: 1302027 },
  { id: 1302028 },
  { id: 1302029 },
  { id: 1302058 },
  //snowboard
  { id: 1442011 },
  { id: 1442012 },
  { id: 1442013 },
  { id: 1442014 },
  { id: 1442015 },
  { id: 1442016 },
  { id: 1442017 },
  { id: 1442018 },
  { id: 1442030 },
  //mop
  { id: 1442021, reward: 10 },
  { id: 1442022, reward: 10 },
  { id: 1442023, reward: 10 },
  //tube
  { id: 1322021, reward: 15 },
  { id: 1322022, reward: 15 },
  { id: 1322023, reward: 15 },
  { id: 1322024, reward: 15 },
  { id: 1322025, reward: 15 },
  { id: 1322026, reward: 15 },
  //lolipop
  { id: 1322003, reward: 20 }
];
var status;
var options = "";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (mode == 0 && type > 0) {
      cm.dispose();
      return;
    }
    if (mode == 1) status++;
    else status--;
    //     status = 0;
    if (status == 0) {
      cm.sendNext(
        "你好,冒险者,别看我是个文件包,我还是一名玩具收藏家. 把你旅途中收集到的玩具带来给我吧, 我可以提供一些 #v4001126# 作为交换!"
      );
      //       cm.dispose();
    } else if (status == 1) {
      for (var i = 0; i < toys.length; i++) {
        options +=
          "#b\r\n#L" +
          i +
          "##v" +
          toys[i].id +
          "# 有可能得到 1~" +
          (!toys[i].reward ? 5 : toys[i].reward) +
          " 个 #v4001126#";
      }
      cm.sendSimple("我现在的采购清单是:\r\n" + options);
    } else {
      if (!cm.hasItem(toys[selection].id, 1)) {
        cm.sendNext(
          "你的背包里并没有 #v" +
            toys[selection].id +
            "# ! 请带给我指定玩具来获得我奖励!"
        );
        cm.dispose();
        return;
      } else {
        if (cm.canHold(BONUS_ITEM)) {
          cm.gainItem(toys[selection].id, -1); //扣除玩具
          cm.gainItem(
            BONUS_ITEM,
            Math.ceil(
              Math.random() *
                (!toys[selection].reward ? 5 : toys[selection].reward)
            )
          ); //随机5个
        }
      }

      status = 0;
      cm.dispose();
      return;
    }
  }
}
