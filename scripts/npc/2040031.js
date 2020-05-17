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
  { id: 1442023, reward: 10 }
];
var status;
var currentReqItemIdx = -1;
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
        "你好,冒险者,别看我是个文件包,我还是一名玩具收藏家. 把你旅途中收集到的玩具带来给我吧, 我可以提供一些 #v4001126# 作为交换 (我的需求#r每分钟#k都会变哦!!)"
      );
      //       cm.dispose();
    } else if (status == 1) {
      currentReqItemIdx = new Date().getMinutes() % toys.length;
      cm.sendYesNo(
        "我现在想要一个 #b1#k\r\n#v" +
          toys[currentReqItemIdx].id +
          "#, 你要跟我换吗?"
      );
    } else {
      if (type == 1) {
        if (!cm.hasItem(toys[currentReqItemIdx].id, 1)) {
          cm.sendNext(
            "你的背包里并没有 #v" +
              toys[currentReqItemIdx].id +
              "# ! 请带给我指定玩具来获得我奖励!"
          );
          cm.dispose();
          return;
        } else {
          cm.gainItem(toys[currentReqItemIdx].id, -1); //扣除玩具
          cm.gainItem(
            BONUS_ITEM,
            Math.ceil(Math.random() * (toys[currentReqItemIdx].reward || 5))
          ); //随机5个
        }
      }
      status = 0;
      cm.dispose();
      return;
    }
  }
}
