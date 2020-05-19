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
// Jane the Alchemist
var status = -1;
var amount = -1;
var items = [[2000002,310],[2022003,1060],[2022000,1600],[2001000,3120]];
var item;

function start() {
    if (cm.isQuestCompleted(2013))
        cm.sendNext("是您……多亏了您，我得以完成很多工作。 如今，我已经做了很多东西。 如果您需要特殊服务，请告诉我。.");
    else {
        if (cm.isQuestCompleted(2010))
            cm.sendNext("您似乎还不够强大，无法购买我的药水...");
        else
            cm.sendOk("我的梦想是到处旅行，就像您一样。 但是，我父亲不允许我这样做，因为他认为这很危险。 不过，如果我向他展示某种证据，证明我不是他认为自己是我的弱小女孩，他可能会说是...");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    status++;
    if (mode != 1){
        if(mode == 0 && type == 1)
            cm.sendNext("我仍然有很多你以前得到的材料。 这些物品都在那里，所以花点时间选择吧。");
        cm.dispose();
        return;
    }
    if (status == 0){
        var selStr = "您想购买哪个项目？#b";
        for (var i = 0; i < items.length; i++)
            selStr += "\r\n#L" + i + "##i" + items[i][0] + "# (Price : " + items[i][1] + " mesos)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        item = items[selection];
        var recHpMp = ["300 HP.","1000 HP.","800 MP","1000 HP and MP."];
        cm.sendGetNumber("您想要＃b＃t" + item[0] + "##k? #t" + item[0] + "＃让你恢复 " + recHpMp[selection] + " 您想购买几个？", 1, 1, 100);
    } else if (status == 2) {
        cm.sendYesNo("你会购买#r" + selection + "#k #b#t" + item[0] + "#(s)#k? #t" + item[0] + "# costs " + item[1] + " 金币为一，所以总数变成#r" + (item[1] * selection) + "#k mesos.");
        amount = selection;
    } else if (status == 3) {
        if (cm.getMeso() < item[1] * amount)
            cm.sendNext("您是否缺少插槽？ 请检查并查看库存中是否有空插槽，以及您是否至少有#r“ +（item [1] * selectedItem）+” #k mesos“。");
        else {
            if (cm.canHold(item[0])) {
                cm.gainMeso(-item[1] * amount);
                cm.gainItem(item[0], amount);
                cm.sendNext("谢谢你的到来。 随时可以制作东西，因此，如果您需要某些东西，请再来一次。");
            } else
                cm.sendNext("请检查并查看库存中是否有空插槽。");
        }
        cm.dispose();
    }
}
