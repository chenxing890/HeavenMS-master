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

/* 2001003 - Straw Hat Snowman
    @author Richard Wu
 */
var EXP = 44444;
var items = [
  // { name: "Clean Slate Scroll 20%", id: 2049003, count: 1 },
  { name: "EXP Scroll", id: 2022452, count: 1, cost: 1 },
  //Cash
  { id: 2022537, count: 1, cost: 1 },
  { id: 2022245, count: 1, cost: 1 },
  //SCROLL
  { name: "Chaos Scroll 60%", id: 2049100, count: 1, cost: 1 },
  { name: "Scroll for Gloves for ATT 10%", id: 2040805, count: 50, cost: 1 },
  { id: 2040534, count: 50, cost: 1 },
  { id: 2040514, count: 50, cost: 1 },
  { id: 2040517, count: 50, cost: 1 },
  { id: 2040502, count: 50, cost: 1 },
  { id: 2043302, count: 50, cost: 1 },
  { id: 2044702, count: 50, cost: 1 },
  { id: 2044802, count: 50, cost: 1 },
  { id: 2044002, count: 50, cost: 1 },
  { id: 2040026, count: 50, cost: 1 },
  { id: 2040031, count: 50, cost: 1 },
  { id: 2040329, count: 50, cost: 1 },
  { id: 2040330, count: 50, cost: 1 },
  { id: 2040331, count: 50, cost: 1 },
  { id: 2040705, count: 50, cost: 1 },
  { id: 2040933, count: 50, cost: 1 },
  { id: 2043002, count: 50, cost: 1 },
  { id: 2044502, count: 50, cost: 1 },
  { id: 2044302, count: 50, cost: 1 },
  { id: 2044402, count: 50, cost: 1 },

  //EQP
  { id: 1032030, count: 1, cost: 50 },
  { id: 1032070, count: 1, cost: 50 }
];

var cashItems = [
  { id: 5050001, count: 99, cost: 50000000 },
  { id: 5050002, count: 99, cost: 50000000 },
  { id: 5050003, count: 99, cost: 50000000 },
  { id: 5050004, count: 99, cost: 50000000 },
  { id: 5570000, count: 99, cost: 50000000 },
  { id: 5610000, count: 99, cost: 50000000 },
  { id: 5610001, count: 99, cost: 50000000 },
  { id: 5520000, count: 99, cost: 50000000 }
];
var poolCost = [50000000, 1];
var selectedPool = [cashItems, items];
var storeDesc = ["金币", "枫叶"];
var status = -1;
var currentItem = -1;
var itemOptions = "";
var itemCount = 1;
var itemCost = 1;
var itemPool = [];
var storeCategory = 0;
function start() {
  action(1, 0, 0);
}
function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    cm.dispose();
    return;
  }
  if (status == 0) {
    // cm.sendNext("开个玩笑 拜拜");
    // cm.dispose();
    // return;
    cm.sendNext(
      "枯木枯木落啊, 摘套罗,皮斯脱落!!!! 来吧,只要你有 #v4001126# 就可以得到我的财宝. 你现在背包里有#r#c4001126# 个 #v4001126##k. "
    );
    // cm.gainItem(4001126, 99);
  } else if (status == 1) {
    cm.sendSimple("#b\r\n#L0# 金币商店 #k #b\r\n#L1# 枫叶商店 #k ");
  } else if (status == 2) {
    storeCategory = selection;
    itemPool = selectedPool[storeCategory];
    for (var i = 0; i < itemPool.length; i++) {
      itemCount = itemPool[i].count || 1;
      itemCost = itemPool[i].cost || poolCost[storeCategory];
      itemOptions +=
        "#b\r\n#L" +
        i +
        "##v" +
        itemPool[i].id +
        "#" +
        "  X " +
        itemCount +
        "#r, 需要" +
        storeDesc[storeCategory] +
        ": " +
        itemCost +
        "#k";
    }
    cm.sendSimple(itemOptions);
  } else if (status == 3) {
    currentItem = selection;
    cm.sendGetNumber(
      "你想交换多少个 #v" + itemPool[currentItem].id + "#",
      1,
      1,
      99
    );
  } else if (status == 4 && mode == 1) {
    var amount = selection;
    if (storeCategory == 0) {
      if (cm.getMeso() < itemPool[currentItem].cost * amount) {
        //金钱
        cm.sendNext("你个穷逼, 滚粗!");
        cm.dispose();
        return;
      }
      if (cm.canHold(itemPool[currentItem].id)) {
        cm.gainMeso(itemPool[currentItem].cost * -1);
        cm.gainItem(
          itemPool[currentItem].id,
          (itemPool[currentItem].count || 1) * amount
        );
      }
    } else if (storeCategory == 1) {
      if (!cm.hasItem(4001126, amount * itemPool[currentItem].cost)) {
        //枫叶
        cm.sendNext("你并没有足够的 #v4001126# 继续这次交易, 滚粗!");
        cm.dispose();
        return;
      }

      if (currentItem == 0) {
        //经验卷轴
        cm.gainItem(4001126, -1 * amount * itemPool[currentItem].cost); //扣除 枫叶,金币
        cm.gainExp(EXP * cm.getLevel() * amount); //角色等级 x 经验基础
      } else {
        if (cm.canHold(itemPool[currentItem].id)) {
          cm.gainItem(4001126, -1 * amount * itemPool[currentItem].cost); //扣除 枫叶,金币

          cm.gainItem(
            itemPool[currentItem].id,
            itemPool[currentItem].count * amount
          );
        }
      }
    }
    status = 0;
    currentItem = -1;
    cm.dispose();
  }
}
